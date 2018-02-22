import { ckey, ekey } from './WeatherUndergroundKey.js';

const root = 'http://api.wunderground.com/api/'
const state = 'CO'
const city = 'Denver'

const retrieveWeather = () => {
  return fetch(`${root}${ckey}/conditions/geolocation/forecast/forecast10day/q/${state}/${city}.json`)
}

export {
  retrieveWeather
}
