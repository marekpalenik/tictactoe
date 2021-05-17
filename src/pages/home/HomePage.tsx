import React from 'react';
import './HomePage.css';
import { GameProgress, IBoard, IField, IPlayer, IScore, Victory } from '../../lib/interfaces';
import Board from '../../components/board/Board';
import Score from '../../components/score/Score';

export interface IStateProps {
  activePlayer?: IPlayer,
  board: IBoard,
  gameProgress: GameProgress,
  score?: IScore
  remainTime?:string;
}

export interface IDispatchProps {
  handleStartGame: () => void;
  handleFieldClick: (field: IField) => void;
}

export const HomePage = (props: IStateProps & IDispatchProps) => {

  const getVictoryLineCssClass = (): string => {
    if ((props.gameProgress as Victory).player) {
      const victory = props.gameProgress as Victory;
      return 'victory-line victor-' + victory.player + ' type-' + victory.type + '-' + victory.typeNumber;
    } else {
      return props.gameProgress as string;
    }
  };

  return (
    <div className="home-page">
      <div className={getVictoryLineCssClass()}/>
      {/* todo? make separate component */}

      <Board board={props.board} activePlayer={props.activePlayer} handleFieldClick={props.handleFieldClick}/>

      <h1>{props.remainTime}</h1>

      <Score activePlayer={props.activePlayer} score={props.score}/>

      <div className="start-button"
        onClick={props.handleStartGame}>{props.gameProgress === 'IN_PROGRESS' ? 'reset' : 'start'}</div>
    </div>
  );
};

export default HomePage;
