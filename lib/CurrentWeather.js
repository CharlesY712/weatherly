import React, { Component } from 'react';
import { cleanApiData } from './cleanData';

export default class CurrentWeather extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  render () {
    return (
      <div>
        {/* current city*/}
        <p>{this.props.cleanApiData.curr.location}</p>
        {/*current day month and date*/}
        <h1>{this.props.cleanApiData.curr.day}</h1>
        <h1>{this.props.cleanApiData.curr.month}</h1>
        <h1>{this.props.cleanApiData.curr.date}</h1>
        {/*current condition*/}
        <p>{this.props.cleanApiData.curr.condition}</p>
        {/*current temp*/}
        <p>{this.props.cleanApiData.curr.temp}</p>
        {/*high*/}
        <p>
          High:<br/>
          {this.props.cleanApiData.curr.high}
          {this.props.cleanApiData.curr.high}
        </p>
        {/*low*/}
        <p>
          Low:<br/>
          {this.props.cleanApiData.curr.low}
          {this.props.cleanApiData.curr.low}
        </p>
        {/*summary*/}
        <p>{this.props.cleanApiData.curr.summary}</p>
      </div>
    )
  }
}