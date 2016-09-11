// a container component keeps track of state and renders child components 
// a presentational component uses props to display information 

var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather'); 
var About = require('About'); 
var Examples = require("Examples");
	// hashHistory means that we want to use /#/ followed by the route 
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}> 
			<Route path="about" component={About}/>
			<Route path="examples" component={Examples}/>
			<IndexRoute component={Weather}/>
		</Route>
	</Router>, document.getElementById('app')
);