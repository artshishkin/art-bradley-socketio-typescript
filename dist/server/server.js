"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
const luckyNumbersGame_1 = __importDefault(require("./luckyNumbersGame"));
const port = 3000;
class App {
    constructor(port) {
        this.port = port;
        const app = express_1.default();
        app.use(express_1.default.static(path_1.default.join(__dirname, '../client')));
        this.server = new http_1.default.Server(app);
        // const io = new socketIO.Server(this.server,{serveClient: false})
        this.io = new socket_io_1.default.Server(this.server);
        this.game = new luckyNumbersGame_1.default();
        this.io.on('connection', (socket) => {
            console.log('a user connected : ' + socket.id);
            // console.dir(socket)
            const luckyNumber = Math.floor(Math.random() * 10);
            this.game.LuckyNumbers[socket.id] = luckyNumber;
            socket.emit('message', `Hello ${socket.id}, your lucky number is ${luckyNumber}`);
            socket.broadcast.emit('message', 'Everybody, say hello to ' + socket.id);
            socket.on("disconnect", () => {
                console.log(this.game.LuckyNumbers);
                console.log('socket disconnected: ' + socket.id);
                delete this.game.LuckyNumbers[socket.id];
                console.log(this.game.LuckyNumbers);
            });
        });
        setInterval(() => {
            const randomNumber = Math.floor(Math.random() * 10);
            const winners = this.game.GetWinners(randomNumber);
            if (winners.length > 0) {
                winners.forEach(w => {
                    this.io.to(w).emit('message', '*** You are the winner ***');
                });
            }
            this.io.emit('random', randomNumber);
        }, 1000);
    }
    Start() {
        this.server.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}.`);
        });
    }
}
new App(port).Start();
//# sourceMappingURL=server.js.map