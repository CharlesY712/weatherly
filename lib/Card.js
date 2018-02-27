import React from 'react';
import PropTypes from 'prop-types';

export default function Card (props) {
  if (props.hour) {
    return (
      <div>
        <img src={props.icon}/><br/>
        <p className="hour">{props.hour}</p>
        <p  className="temp">{props.tempF}˚ F</p>
      </div>
    );
  }

  if (props.day) {
    return (
      <div>
        <img src={props.icon}/><br/>
        <p className="day">{props.day}</p><br/>
        <p className="high">High: {props.high}˚ F</p>
        <p className="low">Low: {props.low}˚ F</p>
      </div>
    );
  }
}

Card.propTypes = {
  hour: PropTypes.string,
  icon: PropTypes.string,
  tempF: PropTypes.string,
  day: PropTypes.string,
  high: PropTypes.string,
  low: PropTypes.string
};