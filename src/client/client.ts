class Client {
    private socket: SocketIOClient.Socket

    constructor() {
        this.socket = io() //io("http://127.0.0.1:3000")
        this.socket.on("message", (mess: any) => {
            console.dir(mess)
            document.body.innerHTML = JSON.stringify(mess);
        })
    }
}

const client = new Client()