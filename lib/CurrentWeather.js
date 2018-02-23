import React, { Component } from 'react';

export default class CurrentWeather extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  render () {
    return (
      <div>
        <p>{this.props.cleanApiData.curr.location}</p>
        <p>{this.props.cleanApiData.curr.date}</p>
        <h1>{this.props.cleanApiData.curr.day}</h1>
        <h1>{this.props.cleanApiData.curr.month}</h1>
        <h1>{this.props.cleanApiData.curr.date}</h1>
        <p>{this.props.cleanApiData.curr.conditions}</p>
        <p>{this.props.cleanApiData.curr.temp}</p>
        <p>
          High:<br/>
          {this.props.cleanApiData.curr.highF} F (
          {this.props.cleanApiData.curr.highC} C)
        </p>
        <p>
          Low:<br/>
          {this.props.cleanApiData.curr.lowF} F (
          {this.props.cleanApiData.curr.lowC} C)
        </p>
        <p>{this.props.cleanApiData.curr.summary}</p>
      </div>
    )
  }
}