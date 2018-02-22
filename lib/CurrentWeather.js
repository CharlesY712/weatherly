import React, { Component } from 'react';

export default class CurrentWeather extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  render () {
    return (
      <div>
        {/* current city*/}
        <p>{this.props.currentWeather.current_observation.display_location.full}</p>
        {/*current day*/}
        <p>{this.props.currentWeather.forecast.simpleforecast.forecastday[0].date.pretty}</p>
        {/*current condition*/}
        <p>{this.props.currentWeather.forecast.simpleforecast.forecastday[0].conditions}</p>
        {/*current temp*/}
        <p>{this.props.currentWeather.current_observation.temperature_string}</p>
        {/*high*/}
        <p>
          High:<br/>
          {this.props.currentWeather.forecast.simpleforecast.forecastday[0].high.fahrenheit} F (
          {this.props.currentWeather.forecast.simpleforecast.forecastday[0].high.celsius} C)
        </p>
        {/*low*/}
        <p>
          Low:<br/>
          {this.props.currentWeather.forecast.simpleforecast.forecastday[0].low.fahrenheit} F (
          {this.props.currentWeather.forecast.simpleforecast.forecastday[0].low.celsius} C)
        </p>
        {/*summary*/}
        <p>{this.props.currentWeather.forecast.txt_forecast.forecastday[0].fcttext}</p>
      </div>
    )
  }
}