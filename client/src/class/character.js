/* eslint-disable no-underscore-dangle */
import { CHARACTER, TILE } from '../constants/room';

class Character {
  constructor(imgUrl, indexX, indexY, isMine) {
    this.ctx = null;
    this.img = null;
    this.imgUrl = imgUrl;
    this.indexX = indexX;
    this.indexY = indexY;
    this.shape = CHARACTER.SHAPE.STAND;
    this.direction = CHARACTER.DIRECTION.DOWN;
    this.curShapeLoopIdx = 0;
    this.frameCount = 0;
    this.requestId = null;
    this.isMine = isMine;
  }

  getNickname() {
    return this.nickname;
  }

  drawImage(ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = this.imgUrl;
    this.img.onload = () => this._draw();
  }

  move(direction) {
    if (this.ctx === null) return;
    if (this.requestId) return;
    this.direction = direction;
    this.requestId = window.requestAnimationFrame(() => this._walk());
  }

  _draw() {
    /*
     * HTML canvas drawImage() Method :
     * context.drawImage(img,startX,startY,startWidth,startheight,x,y,width,height)
     */
    this.ctx.drawImage(
      this.img,
      CHARACTER.SIZE * this.shape + CHARACTER.CROP_OFFSET,
      CHARACTER.SIZE * this.direction,
      CHARACTER.getWidth(),
      CHARACTER.getHeight(),
      TILE.WIDTH * this.indexX,
      TILE.HEIGHT * this.indexY,
      TILE.WIDTH,
      TILE.HEIGHT,
    );
  }

  _walk() {
    this.frameCount += 1;
    if (this.frameCount < CHARACTER.MOVE_FRAME) {
      this.requestId = window.requestAnimationFrame(() => this._walk());
      return;
    }

    this.frameCount = 0;
    this._clear();
    this._step();
    this._draw();

    if (this.curShapeLoopIdx >= CHARACTER.SHAPE.LOOP.length) {
      this.curShapeLoopIdx = 0;
      this.requestId = null;
      return;
    }
    this.requestId = window.requestAnimationFrame(() => this._walk());
  }

  _step() {
    const directionOption = {
      [CHARACTER.DIRECTION.UP]: { idx: 'indexY', sign: -1 },
      [CHARACTER.DIRECTION.DOWN]: { idx: 'indexY', sign: 1 },
      [CHARACTER.DIRECTION.LEFT]: { idx: 'indexX', sign: -1 },
      [CHARACTER.DIRECTION.RIGHT]: { idx: 'indexX', sign: 1 },
    };

    const option = directionOption[this.direction];

    if (!option) return;
    this[option.idx] += (option.sign / CHARACTER.SHAPE.LOOP.length);

    this.shape = CHARACTER.SHAPE.LOOP[this.curShapeLoopIdx];
    this.curShapeLoopIdx += 1;
  }

  _clear() {
    this.ctx.clearRect(
      TILE.WIDTH * this.indexX,
      TILE.HEIGHT * this.indexY,
      TILE.WIDTH,
      TILE.HEIGHT,
    );
  }
}

export default Character;
