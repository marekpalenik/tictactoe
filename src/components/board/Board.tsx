import React from 'react';
import './Board.css';
import { IBoard, IPlayer } from '../../lib/interfaces';
import Field from '../field/Field';


export interface IStateProps {
  activePlayer?: IPlayer,
  board: IBoard
}

export const Board = (props: IStateProps) => {
  return (
    <div className="board">
      {props.board.fields.map((row, i) =>
        <div className="row" key={i}>
          {row.map((value, j) =>
            <Field key={j} field={value} activePlayer={props.activePlayer}/>
          )}
        </div>)}
    </div>
  );
};

export default Board;
