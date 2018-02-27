import React from 'react';
import PropTypes from 'prop-types';
import { cleanApiData } from './cleanData';
import './css/CurrentWeather.css';

export default function CurrentWeather(props) {
    return (
      <div className="current">
        <p className="place">{props.cleanApiData.curr.location}</p>
        <h3>{props.cleanApiData.curr.day}, {props.cleanApiData.curr.month}.
        {props.cleanApiData.curr.date}
        </h3>
        <p>{props.cleanApiData.curr.conditions}</p>
        <p>{props.cleanApiData.curr.temp}</p>
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
    )
}

CurrentWeather.propTypes = {
  cleanApiData: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ])
};