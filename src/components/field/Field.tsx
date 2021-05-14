import React from 'react';
import './Field.css';
import { IField, IPlayer } from '../../lib/interfaces';

export interface IStateProps {
  activePlayer?: IPlayer,
  field: IField
}

export const Field = (props: IStateProps) => {

  const classNameBoard ='board-field'
    + (props.field.selectedByPlayer ? ' selected-' + props.field.selectedByPlayer : ' empty')
    + (props.activePlayer ? ' active-' + props.activePlayer : '');

  return (
    <div className={classNameBoard}>
      <svg height="100" width="100">
        <line x1="10" y1="10" x2="90" y2="90" stroke="blue" strokeWidth={10}/>
        <line x1="10" y1="90" x2="90" y2="10" stroke="blue" strokeWidth={10}/>
        <circle cx="50" cy="50" r="30" stroke="red" strokeWidth="10" fill="transparent"/>
      </svg>
    </div>
  );
};

export default Field;
