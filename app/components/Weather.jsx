var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var OWM = require('OWM');

var Weather = React.createClass({
	getInitialState: function(){
		return {
			isLoading: false
		}
	},

	handleSearch: function(location){
		var that = this;

		this.setState({isLoading: true}); 

		OWM.getTemp(location).then(function(temp){
			that.setState({
				location: location, 
				temp: temp,
				isLoading: false
			});
		}, function(errorMessage){
			alert(errorMessage);
			that.setState({
				isLoading: false
			})
		});
		
	},
	render: function(){
		var _this = this; 
		var isLoading = this.state.isLoading; 
		function renderMessage(){
			if(isLoading){
				return <h3> Fetching Weather </h3>; 
			}else if(_this.state.temp && _this.state.location){
				return <WeatherMessage location = {_this.state.location} temp = {_this.state.temp}/>
			}else{

			}
		};
		return(
			<div>
				<h3> Weather Component </h3>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		)
	}
});

module.exports = Weather; 