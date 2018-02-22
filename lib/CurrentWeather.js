import React, { Component } from 'react';

export default class CurrentWeather extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  render () {
    return (
      <div>
        <h1>{this.props.currentWeather.display_location.country}</h1>
        <h1>{this.props.currentWeather.display_location.country}</h1>
        <h1>{this.props.currentWeather.display_location.country}</h1>
        <h1>{this.props.currentWeather.display_location.country}</h1>
      </div>
      // current city
      // current condition
      // current day
      // current temp
      // hi
      // low
      // summary
    )
  }
}