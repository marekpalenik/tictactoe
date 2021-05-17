import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomePage, { IDispatchProps, IStateProps } from './HomePage';
import { RootState } from '../../store/reducers';
import { fieldSelect, startGame, timeout } from '../../store/actions';
import { IField } from '../../lib/interfaces';


export const HomePageContainer = () => {

  const stateProps: IStateProps = useSelector((state: RootState) => {
    return {
      activePlayer: state.activePlayer,
      board: state.board,
      gameProgress: state.gameProgress,
      score: state.score
    };
  });

  const dispatch = useDispatch();
  const dispatchProps: IDispatchProps = {

    handleFieldClick: (field: IField) => {
      if (stateProps.gameProgress === 'NOT_STARTED') {
        dispatch(startGame());
        dispatch(fieldSelect('x', field));
        resetTimer();

      } else if (stateProps.gameProgress === 'IN_PROGRESS') {
        dispatch(fieldSelect(stateProps.activePlayer!, field));
        resetTimer();
      }
    },

    handleStartGame: () => {
      dispatch(startGame());
      resetTimer();
    }
  };

  const handleTimeout = () => {
    if (stateProps.gameProgress === 'IN_PROGRESS') {
      dispatch(timeout());
      resetTimer();
    }
  };

  const [seconds, setSeconds] = useState<number>(0);
  let timer: NodeJS.Timeout;
  useEffect(() => {
    timer = setTimeout(() => {

      if (stateProps.gameProgress === 'IN_PROGRESS') {
        if (seconds > 0.1) {
          setSeconds(seconds - 0.1);
        } else {
          clearTimeout(timer);
          handleTimeout();
        }
      } else {
        setSeconds(0);
      }

    }, 100);

    return () => clearTimeout(timer);
  });

  const resetTimer = () => {
    setSeconds(2);
  };
  const remainTime = new Date(seconds * 1000).toISOString().substr(18, 3) + 's';

  return <HomePage  {...stateProps} {...dispatchProps} remainTime={remainTime}/>;
};

export default HomePageContainer;
