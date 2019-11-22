// import FormContainer from "./js/components/container/FormContainer";
// import ReactDOM from "react-dom";
// import React from "react";

// const wrapper = document.getElementById("create-article-form");
// wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;

import React from 'react';
import ReactDOM from 'react-dom';
import Router from './js/Router';

ReactDOM.render(
  <Router/>,
  document.getElementById('create-article-form')
);