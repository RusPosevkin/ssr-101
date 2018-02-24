const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const Hello = require('./Hello').default;

const template = (html) => `
  <!DOCTYPE html>
  <div id="root">${html}</div>
`;

const controller = (req, res) => {
  const html = renderToString(<Hello />);
  res.send(template(html));
};

const app = express();
app.get('/', controller);
app.listen(3000);
