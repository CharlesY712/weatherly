import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card.js';

export default function SevenHourForecast(props) {
  return (
    <div>
      <h1 className="seven-hour">SevenHourForecast</h1>
      {props.cleanApiData.hourly.map((time, i) => {
        return <Card className="seven-hour-card"
          key={i}
          hour={time.hour}
          icon={time.icon}
          tempF={time.tempF}/>;
      })}
    </div>
  );
}

SevenHourForecast.propTypes = {
  cleanApiData: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ])
};