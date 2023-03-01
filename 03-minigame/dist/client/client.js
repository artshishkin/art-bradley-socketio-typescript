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
        this.socket.on('playerDetails', (player) => {
            this.player = player;
            $('.screenName').text(player.screenName.name);
            $('.score').text(player.score);
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
        this.socket.on('GameStates', (gameStates) => {
            //console.dir(gameStates)
            gameStates.forEach((gameState) => {
                let gid = gameState.id;
                if (gameState.gameClock >= 0) {
                    if (gameState.gameClock >= gameState.duration) {
                        $('#gamephase' + gid).text('New Game, Guess the Lucky Number');
                    }
                    $('#timer' + gid)
                        .css('display', 'block')
                        .text(gameState.gameClock.toString());
                    const progressParent = (gameState.gameClock / gameState.duration) * 100;
                    $('#timerBar' + gid)
                        .css('background-color', '#4caf50')
                        .css('width', progressParent + '%');
                }
                else {
                    $('#timerBar' + gid)
                        .css('background-color', '#ff0000')
                        .css('width', '100%');
                    $('#timer' + gid).css('display', 'none');
                    $('#gamephase' + gid).text('Game Closed');
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
                from: this.player.screenName.abbreviation
            };
            console.log(chatMessage);
            this.socket.emit('chatMessage', chatMessage);
            $('#messages').append("<li><span class='float-left'><span class='circle'>" +
                this.player.screenName.abbreviation +
                "</span></span><div class='myMessage'>" +
                messageText +
                '</div></li>');
            this.scrollChatWindow();
        }
        $('#messageText').val('');
    }
}
const client = new Client();
