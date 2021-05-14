enum types {
  INIT = '@@INIT',

  GAME_START = 'game/start'
}

export interface IAction {
  isError?: boolean;
  meta?: string;
  payload?: any;
  type: types;
}
