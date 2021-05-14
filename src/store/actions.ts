import { IField, IPlayer } from '../lib/interfaces';

export enum types {
  INIT = '@@INIT',

  GAME_START = 'game/start',

  FIELD_SELECT = 'field/select',

}

export interface IAction {
  isError?: boolean;
  meta?: string;
  payload?: any;
  type: types;
}

export const startGame = (): IAction => {
  return {
    type: types.GAME_START
  };
};

export const fieldSelect = (player: IPlayer, field: IField): IAction => {
  return {
    payload: {
      field,
      player
    },
    type: types.FIELD_SELECT
  };
};
