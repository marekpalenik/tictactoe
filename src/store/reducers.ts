import { GameProgress, IBoard, IField, IPlayer, IScore, Victory } from '../lib/interfaces';
import { IAction, types } from './actions';
import { checkGameProgress } from '../services/GameRulesService';

export interface RootState {
  activePlayer?: IPlayer,
  board: IBoard,
  gameProgress: GameProgress,
  score?: IScore;
}

const initialState: RootState = {
  board: {
    fields: [[{}, {}, {}], [{}, {}, {}], [{}, {}, {}]]
  },
  gameProgress: 'NOT_STARTED'
};

export const appReducer = (state: RootState = initialState, action: IAction): RootState => {
  switch (action.type) {

    case types.GAME_START:
      return {
        activePlayer: 'x',
        board: {
          fields: [[{}, {}, {}], [{}, {}, {}], [{}, {}, {}]]
        },
        gameProgress: 'IN_PROGRESS'
      };

    case types.FIELD_SELECT: {
      const newFields: IField[][] = [...state.board.fields];
      newFields[action.payload.field.row][action.payload.field.column] = {
        selectedByPlayer: action.payload.player
      };

      const gameProgress: GameProgress = checkGameProgress(newFields);
      let newActivePlayer: IPlayer | undefined;
      const newScore: IScore = {
        ...state.score
      };

      if (gameProgress === 'DRAW') {
        newScore.ties = newScore?.ties ? newScore.ties + 1 : 1;

      } else if ((<Victory>gameProgress).player) {
        const victory: Victory = (<Victory>gameProgress);
        newActivePlayer = action.payload.player;
        if ('x' === victory.player) {
          newScore.scoreX = newScore?.scoreX ? newScore.scoreX + 1 : 1;
        } else {
          newScore.scoreO = newScore?.scoreO ? newScore.scoreO + 1 : 1;
        }
      } else {
        newActivePlayer = action.payload.player === 'x' ? 'o' : 'x';
      }

      return {
        activePlayer: newActivePlayer,
        board: {
          fields: newFields
        },
        gameProgress: gameProgress,
        score: newScore
      };
    }

    case types.MOVE_TIMEOUT:
      return {
        ...state,
        activePlayer: state.activePlayer === 'x' ? 'o' : 'x'
      };

    default:
      return state;
  }
};
