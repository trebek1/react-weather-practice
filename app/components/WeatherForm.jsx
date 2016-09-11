var React = require('react');

var WeatherForm = React.createClass({
	clickHandler: function(event){
		event.preventDefault();
		var value = this.refs.location.value; 
		this.refs.location.value = ''; 
	},
	render: function(){
		return(
			<div>
				<form onSubmit={this.clickHandler}>
					<input ref="location" placeholder="enter a location"></input>
					<button> Look up Weather</button>
				</form>
			</div>
		)
	}
});

module.exports = WeatherForm; 