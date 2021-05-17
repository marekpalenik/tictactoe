import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomePage, { IDispatchProps, IStateProps } from './HomePage';
import { RootState } from '../../store/reducers';
import { fieldSelect, startGame } from '../../store/actions';
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

      } else if (stateProps.gameProgress === 'IN_PROGRESS') {
        dispatch(fieldSelect(stateProps.activePlayer!, field));
      }
    },

    handleStartGame: () => {
      dispatch(startGame());
    }
  };

  return <HomePage  {...stateProps} {...dispatchProps}/>;
};

export default HomePageContainer;
