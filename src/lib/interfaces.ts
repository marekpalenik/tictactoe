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

export interface Victory {
  player:IPlayer,
  type: 'ROW' | 'COLUMN' | 'DIAG',
  typeNumber:number
}

export type GameProgress = 'NOT_STARTED' | 'IN_PROGRESS' | 'DRAW' | Victory;
