import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
// import  './templates/css/main.css'


// import './templates/js/main'

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById('root')
);


