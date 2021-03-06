import React from 'react';
import Board from './Board';
import { board1, noOp } from '../../test.data';

export default {component: Board, title: '2. Board'};

export const PlayerX = () => <Board board={board1} activePlayer={'x'} handleFieldClick={noOp}/>;

export const PlayerO = () => <Board board={board1} activePlayer={'o'} handleFieldClick={noOp}/>;
