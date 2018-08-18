var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

var objOne = {
  name: 'Erik'
};

var objTwo = {
  age: 29,
  ...objOne
};

console.log(objTwo);


ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
      </Route>
    </Router>,
    document.getElementById('app')
);
