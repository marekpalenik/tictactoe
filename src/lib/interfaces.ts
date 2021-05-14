export type IPlayer = 'x' | 'o';

export interface IField {
  selectedByPlayer?: IPlayer
}

export interface IBoard {
  fields: IField[][]
}
