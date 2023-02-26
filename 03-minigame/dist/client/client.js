"use strict";
class Client {
    constructor() {
        this.socket = io();
        this.socket.on('connect', () => {
            console.log('connect');
        });
        this.socket.on('disconnect', (message) => {
            console.log('disconnect ' + message);
            location.reload();
        });
    }
}
const client = new Client();
