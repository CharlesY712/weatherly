import React from 'react';

export default function Card (props) {
  if (props.hour) {
    return (
      <div>
        <img src={props.icon}/><br/>
        <p>{props.hour}</p><br/>
        <p>{props.tempF}</p>
      </div>
    )
  }

  if (props.day){
    return (
      <div>
        <img src={props.icon}/><br/>
        <p>{props.day}</p><br/>
        <p>High: {props.high}</p>
        <p>Low: {props.low}</p>
      </div>
    )
  }
}