"use strict";
class Client {
    constructor() {
        this.socket = io(); //io("http://127.0.0.1:3000")
        this.socket.on('connect', function () {
            console.log('connect');
            document.body.innerHTML = '';
        });
        this.socket.on('disconnect', function (message) {
            console.log('disconnect ' + message);
            document.body.innerHTML +=
                `Disconnected from Server : ${message} <br/>`;
            //location.reload();
        });
        this.socket.on("message", (mess) => {
            console.dir(mess);
            document.body.innerHTML += mess + '<br/>';
        });
        this.socket.on("random", (mess) => {
            console.dir(mess);
            document.body.innerHTML += 'Winning number is ' + mess + '<br/>';
        });
    }
}
const client = new Client();
