import { IBoard, IField, IScore } from './lib/interfaces';


export const fieldSelectedByX: IField = {selectedByPlayer: 'x'};
export const fieldSelectedByO: IField = {selectedByPlayer: 'o'};

export const board1: IBoard = {
  fields: [
    [fieldSelectedByX, {}, fieldSelectedByX],
    [fieldSelectedByX, {}, fieldSelectedByO],
    [{}, {}, fieldSelectedByO]
  ]
};

export const score1: IScore = {
  scoreO: 0,
  scoreX: 1,
  ties: 0
};

export const score2: IScore = {
  scoreO: 1234,
  scoreX: 9999,
  ties: 1
};

export const noOp = () => {
};
