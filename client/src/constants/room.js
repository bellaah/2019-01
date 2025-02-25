export const TILE = {
  WIDTH: 50,
  HEIGHT: 60,
};

export const FIELD = {
  ROW: 8,
  COLUMN: 16,
  getWidth() { return TILE.WIDTH * this.COLUMN; },
  getHeight() { return TILE.HEIGHT * this.ROW; },
  BACKGROUND: 'https://kr.object.ncloudstorage.com/connect-2019-01/image/field.png',
};

export const THANOS = {
  TIME_MS: 2000,
  HEIGHT_TERM: 10,
  TRUE_X: 0,
  FALSE_X: FIELD.getWidth() / 2,
  WIDTH: FIELD.getWidth() / 2,
  HEIGHT: FIELD.getHeight(),
  IMG: 'https://kr.object.ncloudstorage.com/connect-2019-01/image/field-thanos.png',
};

export const CHARACTER = {
  SIZE: 48,
  CROP_OFFSET: 4,
  MOVE_FRAME: 3,
  MOVE_FRAME_RELOCATE: 1,
  LAST_FIVE_MOVES: 5,
  getHeight() { return this.SIZE; },
  getWidth() { return this.SIZE - this.CROP_OFFSET * 2; },
  DIRECTION: {
    UP: 3,
    DOWN: 0,
    LEFT: 1,
    RIGHT: 2,
  },
  SHAPE: {
    STAND: 1,
    MOVE1: 0,
    MOVE2: 2,
    LOOP: [0, 2, 0, 1],
  },
};

export const CHAT_BALLOON = {
  WIDTH: TILE.WIDTH * 2.5,
  LINE_HEIGHT: 15,
  PADDING_TOP: 3,
  PADDING_BOTTOM: 3,
  PADDING_LEFT: 5,
  PADDING_RIGHT: 5,
  BORDER_WIDTH: 3,
  BORDER_RADIUS: 5,
  TIP_WIDTH: 3,
  TIP_HEIGHT: 5,
  MAX_LINE_COUNT: 5,
  CLEAR_TIME_MS: 3000,
  FONT: '13px nanoom',
  ALIGN: 'center',
  BASELINE: 'middle',
  BACKGROUND_COLOR: 'rgba(255, 255, 255, 0.3)',
  getTextWidth() { return this.WIDTH - this.PADDING_LEFT - this.PADDING_RIGHT; },
};

export const NICKNAME = {
  WIDTH: TILE.WIDTH * 1.5,
  HEIGHT: TILE.HEIGHT / 3,
  FONT: '13px nanoom',
  ALIGN: 'center',
  BASELINE: 'middle',
  MINE_COLOR: 'yellow',
  OTHER_COLOR: 'white',
  BG_COLOR: 'rgba(0, 0, 0, 0.6)',
};

export const KEYCODE = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
  ENTER: 13,
};

export const DASHBOARD = {
  SECOND: 1,
  SECOND_MS: 1000,
  WIN_MESSAGE: '↓↓↓↓   우승   ↓↓↓↓',
  NOTICE_START_MESSAGE: '게임이 곧 시작됩니다.',
  CLOCK_COLOR_ARRAY: ['red', 'red', 'orange', 'orange', 'green', 'green', 'blue'],
  BACKGROUND: 'https://kr.object.ncloudstorage.com/connect-2019-01/image/dashboard.png',
};


export const CHAT_AREA = {
  MAX_MESSAGE_LENGTH: 50,
  NOTICE_MESSAGE: '** 매너채팅 해요 ^_^ **',
  EMOJI_URL_VIEWER: 'https://kr.object.ncloudstorage.com/connect-2019-01/image/viewer-emoji.png',
  EMOJI_URL_PLAYER: 'https://kr.object.ncloudstorage.com/connect-2019-01/image/player-emoji.png',
};

export const SOUND_TOGGLE = {
  HEIGHT: 30,
  FONT_SIZE: 20,
  PADDING_RIGHT: 5,
};

export const ROOM = {
  WAITING_TIME_MS: 3000,
  WAITING_SOUND_TIME_MS: 2000,
  PATH_ERROR_MESSAGE: '잘못된 경로로 들어왔습니다.',
};

export const ROOM_NAME = {
  WRAPPER_WIDTH: CHAT_AREA.WIDTH - 30,
  FONT_WIDTH: {
    HANGUL: 30,
    EMOJI: 30,
    OTHERS: 16,
  },
  REGEX: {
    HANGUL: /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g,
    EMOJI: /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g,
  },
};
