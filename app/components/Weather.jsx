var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');

var Weather = React.createClass({
	handleSearch: function(location){
		console.log(location);
	},
	render: function(){
		return(
			<div>
				<h3> Weather Component </h3>
				<WeatherForm onSearch={this.handleSearch}/>
				<WeatherMessage/>
			</div>
		)
	}
});

module.exports = Weather; 