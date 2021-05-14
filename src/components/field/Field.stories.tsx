import React from 'react';
import Field from './Field';
import { fieldSelectedByO, fieldSelectedByX, noOp } from '../../test.data';

export default {component: Field, title: '1. Field'};

export const PlayerX = () => <>
  <Field activePlayer={'x'} field={{}} handleClick={noOp}/>
  <Field activePlayer={'x'} field={fieldSelectedByX}  handleClick={noOp}/>
  <Field activePlayer={'x'} field={fieldSelectedByO} handleClick={noOp}/>
</>;

export const PlayerO = () => <>
  <Field activePlayer={'o'} field={{}} handleClick={noOp}/>
  <Field activePlayer={'o'} field={fieldSelectedByX} handleClick={noOp}/>
  <Field activePlayer={'o'} field={fieldSelectedByO} handleClick={noOp}/>
</>;
