import { key } from './WeatherUndergroundKey.js';

const root = 'http://api.wunderground.com/api/';
const extensions = '/conditions/forecast/hourly/geolookup/forecast10day/q/';

const retrieveWeather = (location) => {
  return fetch(`${root}${key}${extensions}${location}.json`);
};

export default retrieveWeather;