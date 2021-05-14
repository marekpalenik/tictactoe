export enum types {
  INIT = '@@INIT',

  GAME_START = 'game/start'

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
