import React from 'react';
import PropTypes from 'prop-types';

export default function Card (props) {
  if (props.hour) {
    return (
      <div>
        <img src={props.icon}/><br/>
        <span>{props.hour}</span><br/>
        <p>{props.tempF}</p>
      </div>
    );
  }

  if (props.day) {
    return (
      <div>
        <img src={props.icon}/><br/>
        <p>{props.day}</p><br/>
        <p>High: {props.high}</p>
        <p>Low: {props.low}</p>
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