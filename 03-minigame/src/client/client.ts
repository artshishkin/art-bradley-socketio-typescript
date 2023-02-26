class Client {
    private socket: SocketIOClient.Socket

    constructor() {
        this.socket = io()

        this.socket.on('connect', () => {
            console.log('connect')
        })

        this.socket.on('disconnect', (message: any) => {
            console.log('disconnect ' + message)
            location.reload()
        })
    }
}

const client = new Client()