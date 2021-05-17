import { GameProgress, IBoard, IField } from '../lib/interfaces';

export const checkGameProgress = (board: IBoard | IField[][]): GameProgress => {
  let f;
  if ('fields' in board) {
    f = board.fields;
  } else {
    f = board;
  }

  //vertical lines
  for (let i = 0; i < 3; i++) {
    if (f[0][i]?.selectedByPlayer
      && f[0][i].selectedByPlayer === f[1][i].selectedByPlayer
      && f[0][i].selectedByPlayer === f[2][i].selectedByPlayer) {

      return {
        player: f[0][i].selectedByPlayer!,
        type: 'COLUMN',
        typeNumber: i
      };
    }
  }

  //horizontal lines
  for (let i = 0; i < 3; i++) {
    if (f[i][0]?.selectedByPlayer
      && f[i][0].selectedByPlayer === f[i][1].selectedByPlayer
      && f[i][0].selectedByPlayer === f[i][2].selectedByPlayer) {
      return {
        player: f[i][0].selectedByPlayer!,
        type: 'ROW',
        typeNumber: i
      };
    }
  }

  //diagonals
  if (f[0][0]?.selectedByPlayer
    && f[0][0].selectedByPlayer === f[1][1].selectedByPlayer
    && f[0][0].selectedByPlayer === f[2][2].selectedByPlayer) {
    return {
      player: f[0][0].selectedByPlayer!,
      type: 'DIAG',
      typeNumber: 0
    };

  } else if (f[0][2]?.selectedByPlayer
    && f[0][2].selectedByPlayer === f[1][1].selectedByPlayer
    && f[0][2].selectedByPlayer === f[2][0].selectedByPlayer) {
    return {
      player: f[0][2].selectedByPlayer!,
      type: 'DIAG',
      typeNumber: 1
    };
  }

  //draw or inProgress
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (!f[i][j].selectedByPlayer) {
        return 'IN_PROGRESS';
      }
    }
  }
  return 'DRAW';
};
