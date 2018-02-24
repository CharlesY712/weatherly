import React from 'react';

export default function Card (props) {

  return (
    <div>
      <img src={props.icon}/><br/>
      <p>{props.hour}</p><br/>
      <p>{props.tempF}</p>
    </div>
    )
}