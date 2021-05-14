import React from 'react';
import Field from './Field';
import { IField } from '../../lib/interfaces';

export default {component: Field, title: '1. Field'};

const fieldSelectedByX:IField = {selectedByPlayer:'x'};
const fieldSelectedByO:IField = {selectedByPlayer:'o'};

export const PlayerX = () => <>
  <Field activePlayer={'x'} field={{}}/>
  <Field activePlayer={'x'} field={fieldSelectedByX}/>
  <Field activePlayer={'x'} field={fieldSelectedByO}/>
</>;

export const PlayerO = () => <>
  <Field activePlayer={'o'} field={{}}/>
  <Field activePlayer={'o'} field={fieldSelectedByX}/>
  <Field activePlayer={'o'} field={fieldSelectedByO}/>
</>;
