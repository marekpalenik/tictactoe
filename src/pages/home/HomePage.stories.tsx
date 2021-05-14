import React from 'react';

import HomePage from './HomePage';
import { board1 } from '../../test.data';

export default {component: HomePage, title: 'x. HomePage'};

export const PlayerX = () => <HomePage board={board1} activePlayer={'x'}/>;

export const PlayerO = () => <HomePage board={board1} activePlayer={'o'}/>;
