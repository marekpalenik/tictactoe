import { IBoard, IField, IScore } from './lib/interfaces';


export const fX: IField = {selectedByPlayer: 'x'};
export const fO: IField = {selectedByPlayer: 'o'};

export const board1: IBoard = {
  fields: [
    [fX, {}, fX],
    [fX, {}, fO],
    [{}, {}, fO]
  ]
};
export const board2: IBoard = {
  fields: [
    [fX, fO, fO],
    [fX, {}, fO],
    [{}, fX, {}]
  ]
};

export const boardWonByXVertical: IBoard = {
  fields: [
    [fX, {}, {}],
    [fX, fO, {}],
    [fX, {}, fO]
  ]
};

export const boardWonByOHorizontal: IBoard = {
  fields: [
    [fX, {}, fX],
    [fO, fO, fO],
    [fX, {}, {}]
  ]
};

export const boardWonByXDiagonal: IBoard = {
  fields: [
    [fX, {}, {}],
    [fO, fX, {}],
    [fO, {}, fX]
  ]
};

export const boardDraw: IBoard = {
  fields: [
    [fX, fO, fX],
    [fO, fO, fX],
    [fX, fX, fO]
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
