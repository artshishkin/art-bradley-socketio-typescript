type User = {
    name: string
    age: number
}

class Client {
    private socket: SocketIOClient.Socket

    constructor() {
        this.socket = io() //io("http://127.0.0.1:3000")
        this.socket.on("message", (user: User) => {
            console.dir(user)
            document.body.innerHTML = JSON.stringify(user);
        })
    }
}

const client = new Client()