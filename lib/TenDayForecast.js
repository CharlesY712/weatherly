import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card.js';
import './css/TenDay.css';

export default function TenDayForecast(props) {
  return (
    <div className="TenDayForeCast">
      <h1 className="TenDay">TenDayForeCast</h1>
      {props.cleanApiData.daily.map((daily, i) => {
        return <Card key={i}
          day={daily.day}
          icon={daily.icon}
          high={daily.high} 
          low={daily.low}/>;
      })}
    </div>
  );
}

TenDayForecast.propTypes = {
  cleanApiData: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ])
};