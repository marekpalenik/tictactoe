import React from 'react';

import HomePage, { IDispatchProps } from './HomePage';
import { board1, noOp } from '../../test.data';

export default {component: HomePage, title: 'x. HomePage'};

const dispatchProps: IDispatchProps = {
  handleFieldClick: noOp,
  handleStartGame: noOp
};

export const PlayerX = () => <HomePage board={board1} activePlayer={'x'} gameProgress={'IN_PROGRESS'} {...dispatchProps} />;

export const PlayerO = () => <HomePage board={board1} activePlayer={'o'} gameProgress={'IN_PROGRESS'} {...dispatchProps} />;
