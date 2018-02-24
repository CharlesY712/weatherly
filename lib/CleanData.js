export default function cleanApiData(data) {
   const cleanApiData = {
    curr: {
      location: data.current_observation.display_location.full,
      conditions: data.forecast.simpleforecast.forecastday[0].conditions,
      temp: data.current_observation.temperature_string,
      highF: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
      highC: data.forecast.simpleforecast.forecastday[0].high.celsius,
      lowF: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
      lowC: data.forecast.simpleforecast.forecastday[0].low.celsius,
      day: data.forecast.txt_forecast.forecastday[0].title,
      month: data.forecast.simpleforecast.forecastday[0].date.monthname,
      date: data.forecast.simpleforecast.forecastday[0].date.day,
      summary: data.forecast.txt_forecast.forecastday[0].fcttext,
      icon: data.current_observation.icon_url
    },
    hourly: data.hourly_forecast.slice(0,7).map( hour => {
      return {
        hour: hour.FCTTIME.civil,
        icon: hour.icon_url,
        tempF: hour.temp.english
      }
    })
  };
  return cleanApiData;
}