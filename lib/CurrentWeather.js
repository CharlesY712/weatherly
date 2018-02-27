import React from 'react';
import PropTypes from 'prop-types';

export default function CurrentWeather(props) {
  return (
    <div>
      <p className="location">{props.cleanApiData.curr.location}</p>
      <p className="day-mon-date">{props.cleanApiData.curr.day}
        {props.cleanApiData.curr.month}
        {props.cleanApiData.curr.date}</p>
      <p className="condition">{props.cleanApiData.curr.conditions}</p>
      <p className="current">Current:<br/>
        {props.cleanApiData.curr.temp}</p>
      <p className="high-temp">
        High:<br/>
        {props.cleanApiData.curr.highF} F (
        {props.cleanApiData.curr.highC} C)
      </p>
      <p className="low-temp">
        Low:<br/>
        {props.cleanApiData.curr.lowF} F (
        {props.cleanApiData.curr.lowC} C)
      </p>
      <p className="summary">{props.cleanApiData.curr.summary}</p>
    </div>
  );
}

CurrentWeather.propTypes = {
  cleanApiData: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ])
};