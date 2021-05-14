import React from 'react';
import './Board.css';
import { IBoard, IField, IPlayer } from '../../lib/interfaces';
import Field from '../field/Field';


export interface IStateProps {
  activePlayer?: IPlayer,
  board: IBoard
}

export interface IDispatch {
  handleFieldClick: (field: IField) => void;
}

export const Board = (props: IStateProps & IDispatch) => {

  const extendField = (field: IField, row: number, column: number): IField => {
    field.row = row;
    field.column = column;
    return field;
  };

  return (
    <div className="board">
      {props.board.fields.map((row, i) =>
        <div className="row" key={i}>
          {row.map((field, j) =>
            <Field key={j} field={extendField(field, i, j)} activePlayer={props.activePlayer}
              handleClick={props.handleFieldClick.bind(this, field)}/>
          )}
        </div>)}
    </div>
  );
};

export default Board;
