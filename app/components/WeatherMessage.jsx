var React = require('react');

var WeatherForm = React.createClass({
	
	render: function(){
		return(
			<div>
				The temperature is {this.props.temp} in {this.props.location}
			</div>
		)
	}
});

module.exports = WeatherForm; 