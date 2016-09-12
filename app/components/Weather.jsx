var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var OWM = require('OWM');

var Weather = React.createClass({
	getInitialState: function(){
		return {
			location: 'null',
			temp: 'null'
		}
	},

	handleSearch: function(location){
		var that = this;
		OWM.getTemp(location).then(function(temp){
			that.setState({
				location: location, 
				temp: temp
			});
		}, function(errorMessage){
			alert(errorMessage);
		});
		
	},
	render: function(){
		return(
			<div>
				<h3> Weather Component </h3>
				<WeatherForm onSearch={this.handleSearch}/>
				<WeatherMessage location = {this.state.location} temp = {this.state.temp}/>
			</div>
		)
	}
});

module.exports = Weather; 