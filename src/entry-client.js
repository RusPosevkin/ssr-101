import React from 'react';
import { hydrate } from 'react-dom';
import Hello from './Hello';
import { consolidateStreamedStyles } from 'styled-components';

consolidateStreamedStyles();
hydrate(
  <Hello />,
  document.getElementById('root'),
);
