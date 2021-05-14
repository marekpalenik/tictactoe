import { IBoard, IPlayer, IScore } from '../lib/interfaces';
import { IAction, types } from './actions';

export interface RootState {
  activePlayer?: IPlayer,
  board: IBoard,
  score?: IScore;
}

const initialState: RootState = {
  board: {
    fields: [[{}, {}, {}],
      [{}, {}, {}],
      [{}, {}, {}]
    ]
  }
};

export const appReducer = (state: RootState = initialState, action: IAction): RootState => {
  switch (action.type) {

    case types.GAME_START:
      return {
        ...initialState,
        activePlayer: 'x',
        score: {
          scoreO: 0,
          scoreX: 0,
          ties: 0
        }
      };


    default:
      return state;
  }
};
