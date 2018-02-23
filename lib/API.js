import { ckey, ekey } from './WeatherUndergroundKey.js';
import App from './App.js';

const root = 'http://api.wunderground.com/api/';
// const state = 'CO';
// const city = 'Denver';

const retrieveWeather = (location) => {
  console.log(location)
  // let [city, state] = location.split(', ');
  return fetch(`${root}${ckey}/conditions/forecast/hourly/geolookup/forecast10day/q/${location}.json`)
}

export default retrieveWeather
