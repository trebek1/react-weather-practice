// a container component keeps track of state and renders child components 
// a presentational component uses props to display information 

var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather'); 
var About = require('About'); 

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}> 
			<Route path="about" component={About}/>
			<IndexRoute component={Weather}/>
		</Route>
	</Router>, document.getElementById('app')
);