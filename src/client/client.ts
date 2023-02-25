class Client {
    private socket: SocketIOClient.Socket

    constructor() {
        this.socket = io() //io("http://127.0.0.1:3000")
    }
}

const client = new Client()