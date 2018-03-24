import ReactDOM from 'react-dom';
import React from 'react';
import Root from './root';

document.addEventListener("DOMContentLoaded", () =>{
  const main = document.getElementById('main');
  ReactDOM.render(<Root />, main);
});
