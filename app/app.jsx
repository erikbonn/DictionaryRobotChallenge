var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: 'Erik',
};

var objTwo = {
  age: 29,
  ...objOne
};

console.log(objTwo);


ReactDOM.render(
    <h1>Boilerplate App!</h1>,
    document.getElementById('app')
);
