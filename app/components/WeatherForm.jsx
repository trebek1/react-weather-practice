var React = require('react');

var WeatherForm = React.createClass({
	clickHandler: function(event){
		event.preventDefault();
		var value = this.refs.location.value; 
		
		if(value.length > 0){
			this.refs.location.value = ''; 
			this.props.onSearch(value);	
		}
		
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