import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card.js';

export default function TenDayForecast(props) {
  return (
    <div>
      <h1 className="ten-day">TenDayForecast</h1>
      {props.cleanApiData.daily.map((daily, i) => {
        return <Card className="ten-day-card"
          key={i}
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