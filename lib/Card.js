import React from 'react';
import './css/Card.css';

export default function Card (props) {
  if (props.hour) {
    return (
      <div className="container">
        <div className="card">
          <img className="icon" src={props.icon}/><br/>
          <p className="hour">{props.hour}</p><br/>
          <p className="temp">{props.tempF}</p>
        </div>
      </div>
    )
  }

  if (props.day){
    return (
      <div className="container">
        <div className="card">
          <img className="icon" src={props.icon}/><br/>
          <p className="day">{props.day}</p><br/>
          <p className="high">High: {props.high}</p>
          <p className="low">Low: {props.low}</p>
        </div>
      </div>
    )
  }
}