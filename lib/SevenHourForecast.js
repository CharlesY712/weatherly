import React from 'react';
import cleanApiData from './cleanData';
import Card from './Card.js';

export default function SevenHourForeCast(props) {

  console.log(props)
  return (
    <div>
      <h1>SevenHourForeCast</h1>
      {props.cleanApiData.hourly.map((time, i) => {
        return <Card key={i} hour={time.hour} icon={time.icon} tempF={time.tempF}/>
      })}
    </div>
  )
}