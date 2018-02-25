import React from 'react';
import { renderToString } from 'react-dom/server';
import Hello from './Hello';

const template = (html) => `
  <!DOCTYPE html>
  <link rel="stylesheet" href="styles.css" />
  <div id="root">${html}</div>
  <script src="client.js"></script>
`;

const controller = (req, res) => {
  const html = renderToString(<Hello />);
  res.send(template(html));
};

export default controller;
