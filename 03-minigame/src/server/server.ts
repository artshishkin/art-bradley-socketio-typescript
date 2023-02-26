import express from 'express'
import path from 'path'
import http from 'http'
import socketIO from 'socket.io'
import LuckyNumbersGame from './luckyNumbersGame'
import RandomScreenNameGenerator from "./RandomScreenNameGenerator";

const port: number = 3000

type ChatMessage = {
    message: string;
    from: string;
}

class App {
    private server: http.Server
    private port: number

    private io: socketIO.Server
    private game: LuckyNumbersGame
    private randomScreenNameGenerator: RandomScreenNameGenerator

    constructor(port: number) {
        this.port = port

        const app = express()
        app.use(express.static(path.join(__dirname, '../client')))
        app.use('/jquery', express.static(path.join(__dirname, '../../node_modules/jquery/dist')))
        app.use('/bootstrap', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist')))

        this.server = new http.Server(app)
        this.io = new socketIO.Server(this.server)

        this.game = new LuckyNumbersGame()
        this.randomScreenNameGenerator = new RandomScreenNameGenerator();

        this.io.on('connection', (socket: socketIO.Socket) => {
            console.log('a user connected : ' + socket.id)

            socket.on('disconnect', () => {
                console.log('socket disconnected : ' + socket.id)
            })

            socket.on('chatMessage', (chatMessage: ChatMessage) => {
                console.dir(chatMessage);
                socket.broadcast.emit('chatMessage', chatMessage);
            })

            const screenName = this.randomScreenNameGenerator.generateRandomScreenName();
            socket.emit('screenName', screenName);

        })
    }

    public Start() {
        this.server.listen(this.port)
        console.log(`Server listening on port ${this.port}.`)
    }
}

new App(port).Start()