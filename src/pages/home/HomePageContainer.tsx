import React from 'react';
import { useSelector } from 'react-redux';
import HomePage, { IStateProps } from './HomePage';
import { RootState } from '../../store/reducers';


export const HomePageContainer = () => {

  const stateProps: IStateProps = useSelector((state: RootState) => {
    return {
      activePlayer: state.activePlayer,
      board: state.board
    };
  });

  return (<HomePage  {...stateProps} />);
};

export default HomePageContainer;
