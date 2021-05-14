export type IPlayer = 'x' | 'o';

export interface IField {
  selectedByPlayer?: IPlayer,
  row?: number;
  column?: number;
}

export interface IBoard {
  fields: IField[][]
}

export interface IScore {
  scoreX?: number,
  ties?: number,
  scoreO?: number
}
