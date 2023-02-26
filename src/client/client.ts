class Client {
    private socket: SocketIOClient.Socket

    constructor() {
        this.socket = io() //io("http://127.0.0.1:3000")

        this.socket.on('connect', function () {
            console.log('connect')
            document.body.innerHTML = ''
        })

        this.socket.on('disconnect', function (message: any) {
            console.log('disconnect ' + message)
            document.body.innerHTML +=
                `Disconnected from Server : ${message} <br/>`
            //location.reload();
        })

        this.socket.on("message", (mess: any) => {
            console.dir(mess)
            document.body.innerHTML += mess + '<br/>';
            this.socket.emit('message', 'Thanks for having me')
        })
        this.socket.on("random", (mess: any) => {
            console.dir(mess)
            document.body.innerHTML += 'Winning number is ' + mess + '<br/>';
        })
    }
}

const client = new Client()