import { ckey, ekey } from './WeatherUndergroundKey.js';
import App from './App.js';

const root = 'http://api.wunderground.com/api/';

const retrieveWeather = (location = 'Denver, Co') => {
  return fetch(`${root}${ckey}/conditions/geolookup/forecast/forecast10day/q/${location}.json`)
}

export default retrieveWeather;
