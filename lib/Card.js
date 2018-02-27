import React from 'react';
import './css/Card.css';
import PropTypes from 'prop-types';

export default function Card (props) {
  if (props.hour) {
    return (
      <div className="container">
        <div className="card">
          <img className="icon" src={props.icon}/><br/>
          <p className="hour">{props.hour}</p><br/>
          <p className="temp">{props.tempF}</p>
        </div>
    );
  }

  if (props.day) {
    return (
      <div className="container">
        <div className="card">
          <img className="icon" src={props.icon}/><br/>
          <p className="day">{props.day}</p><br/>
          <p className="high">High: {props.high}</p>
          <p className="low">Low: {props.low}</p>
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