import React from 'react';
import Field from './Field';
import { fO, fX, noOp } from '../../test.data';

export default {component: Field, title: '1. Field'};

export const PlayerX = () => <>
  <Field activePlayer={'x'} field={{}} handleClick={noOp}/>
  <Field activePlayer={'x'} field={fX} handleClick={noOp}/>
  <Field activePlayer={'x'} field={fO} handleClick={noOp}/>
</>;

export const PlayerO = () => <>
  <Field activePlayer={'o'} field={{}} handleClick={noOp}/>
  <Field activePlayer={'o'} field={fX} handleClick={noOp}/>
  <Field activePlayer={'o'} field={fO} handleClick={noOp}/>
</>;
