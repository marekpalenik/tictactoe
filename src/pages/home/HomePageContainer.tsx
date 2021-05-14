import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomePage, { IDispatchProps, IStateProps } from './HomePage';
import { RootState } from '../../store/reducers';
import { startGame } from '../../store/actions';


export const HomePageContainer = () => {

  const stateProps: IStateProps = useSelector((state: RootState) => {
    return {
      activePlayer: state.activePlayer,
      board: state.board
    };
  });

  const dispatch = useDispatch();
  const dispatchProps: IDispatchProps = {
    handleStartGame: () => {
      dispatch(startGame());
    }
  };

  return <HomePage  {...stateProps} {...dispatchProps}/>;
};

export default HomePageContainer;
