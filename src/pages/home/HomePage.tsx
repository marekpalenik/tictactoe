import React from 'react';
import './HomePage.css';
import { IBoard, IPlayer, IScore } from '../../lib/interfaces';
import Board from '../../components/board/Board';
import Score from '../../components/score/Score';

export interface IStateProps {
  activePlayer?: IPlayer,
  board: IBoard,
  score?: IScore
}

export const HomePage = (props: IStateProps) => {
  return (
    <div className="home-page">
      <Board board={props.board} activePlayer={props.activePlayer}/>
      <Score activePlayer={props.activePlayer} score={props.score} />
    </div>
  );
};

export default HomePage;
