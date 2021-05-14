import React from 'react';
import './Score.css';
import { IPlayer, IScore } from '../../lib/interfaces';


export interface IStateProps {
  activePlayer?: IPlayer,
  score?: IScore
}

export const Score = (props: IStateProps) => {
  return (
    <div className="score">
      <div className={'score-x' + ('x' === props.activePlayer ? ' active' : '')}>
        <h4>player X</h4>
        <h1> {props.score?.scoreX || 0}</h1>
      </div>
      <div>
        <h4>tie</h4>
        <h1> {props.score?.ties || 0}</h1>
      </div>
      <div className={'score-o' + ('o' === props.activePlayer ? ' active' : '')}>
        <h4>player O</h4>
        <h1> {props.score?.scoreO || 0}</h1>
      </div>
    </div>
  );
};

export default Score;
