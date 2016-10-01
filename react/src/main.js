import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

$(function() {
  ReactDOM.render(
    <h1 className="text-center">
      Boo yaa
      <i className="fa fa-camera-retro" />
    </h1>,
    document.getElementById('app')
  );
});
