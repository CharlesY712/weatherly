import React from 'react';
import cleanApiData from './cleanData';
import Card from './Card.js';

export default function TenDayForeCast(props) {
  return (
    <div>
      <h1>TenForeCast</h1>
        {props.cleanApiData.daily.map((daily, i) => {
        return <Card key={i} day={daily.day} icon={daily.icon} high={daily.high} low={daily.low}/>
      })}
    </div>
  )
}