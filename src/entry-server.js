import React from 'react';
import { renderToString, renderToNodeStream } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import Hello from './Hello';

const startTemplate = `
  <!DOCTYPE html>
  <link rel="stylesheet" href="styles.css" />
  <div id="root">
`;

const finishTemplate = `
  </div>
  <script src="client.js"></script>
`;

const controller = (req, res) => {
  res.write(startTemplate);
  const sheet = new ServerStyleSheet();
  const jsx = sheet.collectStyles(<Hello />);
  const stream = sheet.interleaveWithNodeStream(renderToNodeStream(jsx));
  stream.pipe(res, { end: false });
  stream.on('end', () => res.end(finishTemplate));
};

export default controller;
