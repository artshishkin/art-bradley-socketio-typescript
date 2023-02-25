"use strict";
class Client {
    constructor() {
        this.socket = io(); //io("http://127.0.0.1:3000")
        this.socket.on("message", (user) => {
            console.dir(user);
            document.body.innerHTML = JSON.stringify(user);
        });
    }
}
const client = new Client();
