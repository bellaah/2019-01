/* eslint-disable no-underscore-dangle */
import socketio from 'socket.io-client';
import EVENT from '../constants/socket-event';
import URL from '../constants/url';

const isFunction = (callback) => typeof callback === 'function';

class SocketContainer {
  constructor() {
    this.socket = undefined;
  }

  connect(query) {
    this.socket = (
      process.env.NODE_ENV === 'production'
        ? socketio({ path: '/socket.io', transports: ['websocket'], query })
        : socketio(URL.LOCAL_API_SERVER, { transports: ['websocket'], query }));
  }

  isConnected() {
    return (this.socket !== undefined && this.socket.connected);
  }

  disconnect() {
    this.socket.disconnect();
  }

  emitCreateRoom(roomName) {
    this.socket.emit(EVENT.CREATE_ROOM, roomName);
  }

  emitStartGame() {
    this.socket.emit(EVENT.START_GAME);
  }

  emitMove(direction) {
    this.socket.emit(EVENT.MOVE, direction);
  }

  emitEnterLobby() {
    this.socket.emit(EVENT.ENTER_LOBBY);
  }

  emitEnterRoom(data) {
    this.socket.emit(EVENT.ENTER_ROOM, data);
  }

  emitEndGame(data) {
    this.socket.emit(EVENT.END_GAME, data);
  }

  onEnterLobby(callback) {
    if (isFunction(callback)) {
      this.socket.on(EVENT.ENTER_LOBBY, (data) => callback(data));
    }
  }

  onCreateRoom(callback) {
    if (isFunction(callback)) {
      this.socket.on(EVENT.CREATE_ROOM, (data) => callback(data));
    }
  }

  onRoomIsCreated(callback) {
    if (isFunction(callback)) {
      this.socket.on(EVENT.ROOM_IS_CREATED, (data) => callback(data));
    }
  }

  onUpdateRoomInfo(callback) {
    if (isFunction(callback)) {
      this.socket.on(EVENT.UPDATE_ROOM_INFO, (data) => callback(data));
    }
  }

  onEnterRoom(callback) {
    if (isFunction(callback)) {
      this.socket.on(EVENT.ENTER_ROOM, (data) => callback(data));
    }
  }

  onEnterNewUser(callback) {
    if (isFunction(callback)) {
      this.socket.on(EVENT.ENTER_NEW_USER, (data) => callback(data));
    }
  }

  onMove(callback) {
    if (isFunction(callback)) {
      this.socket.on(EVENT.MOVE, (data) => callback(data));
    }
  }

  onStartRound(callback) {
    if (isFunction(callback)) {
      this.socket.on(EVENT.START_ROUND, (data) => callback(data));
    }
  }

  onEndRound(callback) {
    if (isFunction(callback)) {
      this.socket.on(EVENT.END_ROUND, (data) => callback(data));
    }
  }

  onEndGame(callback) {
    if (isFunction(callback)) {
      this.socket.on(EVENT.END_GAME, (data) => callback(data));
    }
  }

  onQuizList(callback) {
    if (isFunction(callback)) {
      this.socket.on(EVENT.FETCH_QUIZLIST, (data) => callback(data));
    }
  }

  onLeaveUser(callback) {
    if (isFunction(callback)) {
      this.socket.on(EVENT.LEAVE_USER, (data) => callback(data));
    }
  }

  onStartGame(callback) {
    if (isFunction(callback)) {
      this.socket.on(EVENT.START_GAME, (data) => callback(data));
    }
  }
}

const socket = new SocketContainer();

export default socket;
