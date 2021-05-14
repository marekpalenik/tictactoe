import React from 'react';

import HomePage from './HomePage';
import { board1, noOp } from '../../test.data';

export default {component: HomePage, title: 'x. HomePage'};

export const PlayerX = () => <HomePage board={board1} activePlayer={'x'} handleStartGame={noOp}/>;

export const PlayerO = () => <HomePage board={board1} activePlayer={'o'} handleStartGame={noOp}/>;
