import { IBoard, IField, IPlayer, IScore } from '../lib/interfaces';
import { IAction, types } from './actions';

export interface RootState {
  activePlayer?: IPlayer,
  board: IBoard,
  score?: IScore;
}

const initialState: RootState = {
  board: {
    fields: [[{}, {}, {}], [{}, {}, {}], [{}, {}, {}]]
  }
};

export const appReducer = (state: RootState = initialState, action: IAction): RootState => {
  switch (action.type) {

    case types.GAME_START:
      return {
        activePlayer: 'x',
        board: {
          fields: [[{}, {}, {}], [{}, {}, {}], [{}, {}, {}]]
        },
        score: {
          scoreO: 0,
          scoreX: 0,
          ties: 0
        }
      };

    case types.FIELD_SELECT: {
      const newFields: IField[][] = [...state.board.fields];
      newFields[action.payload.field.row][action.payload.field.column] = {
        selectedByPlayer: action.payload.player
      };

      return {
        ...state,
        activePlayer: action.payload.player === 'x' ? 'o' : 'x',
        board: {fields: newFields}
      };
    }

    default:
      return state;
  }
};
