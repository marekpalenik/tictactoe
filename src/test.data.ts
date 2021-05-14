import { IBoard, IField } from './lib/interfaces';


export const fieldSelectedByX: IField = {selectedByPlayer: 'x'};
export const fieldSelectedByO: IField = {selectedByPlayer: 'o'};

export const board1: IBoard = {
  fields: [
    [fieldSelectedByX, {}, fieldSelectedByX],
    [fieldSelectedByX, {}, fieldSelectedByO],
    [{}, {}, fieldSelectedByO]
  ]
};
