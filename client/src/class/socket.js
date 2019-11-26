/* eslint-disable no-underscore-dangle */
import socketio from 'socket.io-client';
import EVENT from '../constants/socket-event';

const isFunction = (callback) => typeof callback === 'function';

class SocketContainer {
  constructor() {
    this.socket = undefined;
    this.connect();
    this.emitEnterRoom();
  }

  connect() {
    this.socket = socketio.connect('http://localhost:3000');
  }

  disconnect() {
    this.socket.disconnect();
  }

  onEnterRoom(callback) {
    if (isFunction(callback)) {
      // this.socket.on(EVENT.ENTER_ROOM, (data) => callback(data));
      this.socket.on(EVENT.ENTER_ROOM, (data) => {
        console.log(data);
      });
    }
  }

  onEnterPlayer(callback) {
    if (isFunction(callback)) {
      this.socket.on(EVENT.ENTER_PLAYER, (data) => callback(data));
    }
  }

  emitEnterRoom() {
    this.socket.emit(EVENT.ENTER_ROOM);
  }

  emitStartGame() {
    this.socket.emit(EVENT.START_GAME);
  }

  onQuizList(callback) {
    if (isFunction(callback)) {
      this.socket.on(EVENT.FETCH_QUIZLIST, (data) => callback(data));
    }
  }
}

const socket = new SocketContainer();

export default socket;
