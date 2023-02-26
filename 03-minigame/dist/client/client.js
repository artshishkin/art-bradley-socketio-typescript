"use strict";
class Client {
    constructor() {
        this.scrollChatWindow = () => {
            $('#messages').animate({
                scrollTop: $('#messages li:last-child').position().top,
            }, 500);
            setTimeout(() => {
                let messagesLength = $('#messages li');
                if (messagesLength.length > 10) {
                    messagesLength.eq(0).remove();
                }
            }, 500);
        };
        this.socket = io();
        this.socket.on('connect', () => {
            console.log('connect');
        });
        this.socket.on('chatMessage', (chatMessage) => {
            console.log(chatMessage);
            $('#messages').append("<li><span class='float-right'><span class='circle'>" +
                chatMessage.from +
                "</span></span><div class='otherMessage'>" +
                chatMessage.message +
                '</div></li>');
            this.scrollChatWindow();
        });
        $(document).ready(() => {
            $('#messageText').keypress((e) => {
                const key = e.which;
                if (key == 13) {
                    // the enter key code
                    this.sendMessage();
                    return false;
                }
            });
        });
        this.socket.on('disconnect', (message) => {
            console.log('disconnect ' + message);
            location.reload();
        });
    }
    showGame(id) {
        switch (id) {
            case 0:
                $('#gamePanel1').fadeOut(100);
                $('#gamePanel2').fadeOut(100);
                $('#gamePanel0').delay(100).fadeIn(100);
                break;
            case 1:
                $('#gamePanel0').fadeOut(100);
                $('#gamePanel2').fadeOut(100);
                $('#gamePanel1').delay(100).fadeIn(100);
                break;
            case 2:
                $('#gamePanel0').fadeOut(100);
                $('#gamePanel1').fadeOut(100);
                $('#gamePanel2').delay(100).fadeIn(100);
                break;
        }
    }
    sendMessage() {
        const messageText = $('#messageText').val();
        if (messageText && messageText.toString().length > 0) {
            const chatMessage = {
                message: messageText.toString(),
                from: this.socket.id
            };
            console.log(chatMessage);
            this.socket.emit('chatMessage', chatMessage);
            $('#messages').append("<li><span class='float-left'><span class='circle'>Me</span></span><div class='myMessage'>" +
                messageText +
                '</div></li>');
            this.scrollChatWindow();
        }
        $('#messageText').val('');
    }
}
const client = new Client();
