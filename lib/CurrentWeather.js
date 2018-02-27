import React from 'react';
import PropTypes from 'prop-types';

export default function CurrentWeather(props) {
  return (
    <div>
      <p>{props.cleanApiData.curr.location}</p>
      <p>{props.cleanApiData.curr.day}
        {props.cleanApiData.curr.month}
        {props.cleanApiData.curr.date}</p>
      <p>{props.cleanApiData.curr.conditions}</p>
      <p>Current:<br/>
        {props.cleanApiData.curr.temp}</p>
      <p>
        High:<br/>
        {props.cleanApiData.curr.highF} F (
        {props.cleanApiData.curr.highC} C)
      </p>
      <p>
        Low:<br/>
        {props.cleanApiData.curr.lowF} F (
        {props.cleanApiData.curr.lowC} C)
      </p>
      <p>{props.cleanApiData.curr.summary}</p>
    </div>
  );
}

CurrentWeather.propTypes = {
  cleanApiData: PropTypes.bool
};