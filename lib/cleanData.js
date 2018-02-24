export default function cleanApiData(data) {
  const cleanApiData = {
    curr: {
      location: data.current_observation.display_location.full,
      date: data.forecast.simpleforecast.forecastday[0].date.day,
      conditions: data.current_observation.weather,
      temp: data.current_observation.temperature_string,
      highF: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
      highC: data.forecast.simpleforecast.forecastday[0].high.celsius,
      lowF: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
      lowC: data.forecast.simpleforecast.forecastday[0].low.celsius,
      summary: data.forecast.txt_forecast.forecastday[0].fcttext,
      month: data.forecast.simpleforecast.forecastday[0].date.monthname,
      date: data.forecast.simpleforecast.forecastday[0].date.day,
      tempF: data.hourly_forecast[0].temp.english
    },
    hourly: {
      hour: data.hourly_forecast[0],
      icon: data.hourly_forecast[0].icon_url,
    }
  };
  console.log(cleanApiData)
  return cleanApiData;
}