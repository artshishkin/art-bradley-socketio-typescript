import express from 'express'
import path from 'path'
import http from 'http'
import socketIO from 'socket.io'
import LuckyNumbersGame from "./luckyNumbersGame";

const port: number = 3000

class App {
    private server: http.Server
    private port: number

    private io: socketIO.Server
    private game: LuckyNumbersGame;

    constructor(port: number) {
        this.port = port

        const app = express()
        app.use(express.static(path.join(__dirname, '../client')))

        this.server = new http.Server(app)
        // const io = new socketIO.Server(this.server,{serveClient: false})
        this.io = new socketIO.Server(this.server)

        this.game = new LuckyNumbersGame();

        this.io.on('connection', (socket: socketIO.Socket) => {
            console.log('a user connected : ' + socket.id);
            // console.dir(socket)

            const luckyNumber = Math.floor(Math.random() * 10);
            this.game.LuckyNumbers[socket.id] = luckyNumber

            socket.emit('message', `Hello ${socket.id}, your lucky number is ${luckyNumber}`)

            socket.broadcast.emit(
                'message',
                'Everybody, say hello to ' + socket.id
            )

            socket.on("message", (mess: any) => {
                console.log(`Got message from ${socket.id}: ${mess}`);
            })

            socket.on("disconnect", () => {
                console.log(this.game.LuckyNumbers);
                console.log('socket disconnected: ' + socket.id);
                delete this.game.LuckyNumbers[socket.id]
                console.log(this.game.LuckyNumbers);
            })
        });

        setInterval(() => {
            const randomNumber = Math.floor(Math.random() * 10);
            const winners = this.game.GetWinners(randomNumber);

            if (winners.length > 0) {
                winners.forEach(w => {
                    this.io.to(w).emit('message', '*** You are the winner ***')
                });
            }

            this.io.emit('random', randomNumber)

        }, 1000)
    }

    public Start() {
        this.server.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}.`)
        })
    }
}

new App(port).Start()