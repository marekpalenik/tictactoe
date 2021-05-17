import { checkGameProgress } from './GameRulesService';
import * as t from '../test.data';

describe('test checkGameProgress', () => {

  test('Player X won with a vertical line', () => {

    const result = checkGameProgress(t.boardWonByXVertical);
    expect(result).toEqual({'player': 'x', 'type': 'COLUMN', 'typeNumber': 0});
  });

  test('Player O won with a horizontal line', () => {
    const result = checkGameProgress(t.boardWonByOHorizontal);
    expect(result).toEqual({'player': 'o', 'type': 'ROW', 'typeNumber': 1});
  });

  test('Player X won with a diagonal line', () => {
    const result = checkGameProgress(t.boardWonByXDiagonal);
    expect(result).toEqual({'player': 'x', 'type': 'DIAG', 'typeNumber': 0});
  });

  test('Game ends with a draw', () => {
    const result = checkGameProgress(t.boardDraw);
    expect(result).toBe('DRAW');
  });

  test('game still in progress', () => {
    let result = checkGameProgress(t.board1);
    expect(result).toBe('IN_PROGRESS');
    result = checkGameProgress(t.board2);
    expect(result).toBe('IN_PROGRESS');
  });


});
