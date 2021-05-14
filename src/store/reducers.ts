import { IBoard, IPlayer } from '../lib/interfaces';
import { IAction } from './actions';

export interface RootState {
  activePlayer?: IPlayer,
  board: IBoard,
  scoreX?: number,
  ties?: number,
  scoreO?: number,
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

    default:
      return state;
  }
};
