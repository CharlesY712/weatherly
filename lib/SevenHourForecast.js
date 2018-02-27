import React from 'react';
import cleanApiData from './cleanData';
import Card from './Card.js';
import './css/SevenHourForeCast.css';

export default function SevenHourForeCast(props) {
  return (
    <div className="sevenhour">
      <h1 className="hourly-title">SevenHourForeCast</h1>
        {props.cleanApiData.hourly.map((time, i) => {
        return <Card key={i} hour={time.hour} icon={time.icon} tempF={time.tempF}/>
      })}
    </div>
  )
}