"use strict";
class Client {
    constructor() {
        this.socket = io(); //io("http://127.0.0.1:3000")
        this.socket.on("message", (mess) => {
            console.dir(mess);
            document.body.innerHTML += mess + '<br/>';
        });
    }
}
const client = new Client();
