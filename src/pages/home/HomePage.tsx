import React from 'react';
import './HomePage.css';
import { IBoard, IField, IPlayer, IScore } from '../../lib/interfaces';
import Board from '../../components/board/Board';
import Score from '../../components/score/Score';

export interface IStateProps {
  activePlayer?: IPlayer,
  board: IBoard,
  score?: IScore
}

export interface IDispatchProps {
  handleStartGame: () => void;
  handleFieldClick: (field: IField) => void;
}

export const HomePage = (props: IStateProps & IDispatchProps) => {
  return (
    <div className="home-page">

      <Board board={props.board} activePlayer={props.activePlayer} handleFieldClick={props.handleFieldClick}/>

      <Score activePlayer={props.activePlayer} score={props.score}/>

      <div className="start-button" onClick={props.handleStartGame}>start</div>
    </div>
  );
};

export default HomePage;
