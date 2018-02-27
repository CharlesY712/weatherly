import React from 'react';
import PropTypes from 'prop-types';

export default function Card (props) {
  if (props.hour) {
    return (
      <div>
        <img src={props.icon}/><br/>
        <h3>{props.hour}</h3>
        <h4>{props.tempF}</h4>
      </div>
    );
  }

  if (props.day) {
    return (
      <div>
        <img src={props.icon}/><br/>
        <h3>{props.day}</h3><br/>
        <h4>High: {props.high}</h4>
        <h5>Low: {props.low}</h5>
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