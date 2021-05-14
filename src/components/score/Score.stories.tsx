import React from 'react';
import Score from './Score';
import { score2 } from '../../test.data';

export default {component: Score, title: '3. Score'};

export const PlayerX = () => <Score activePlayer={'x'}/>;

export const PlayerO = () => <Score activePlayer={'o'}/>;

export const BigScore = () => <Score score={score2}/>;
