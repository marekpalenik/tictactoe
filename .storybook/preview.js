import React from 'react';

import '../src/index.css';

export const decorators = [
  (Story) => (
    <div style={{padding: '50px'}}>
      <Story/>
    </div>
  )
];

export const parameters = {
  options: {
    storySort: {
      method: 'alphabetical'
    }
  }
};
