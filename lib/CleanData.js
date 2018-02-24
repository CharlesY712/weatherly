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
<<<<<<< HEAD
      summary: data.forecast.txt_forecast.forecastday[0].fcttext,
      icon: data.current_observation.icon_url
    }
    // hour: {
      
    // }
=======
      tempF: data.hourly_forecast[0].temp.english
    },
    hourly: {
      hour: data.hourly_forecast[0],
      icon: data.hourly_forecast[0].icon_url,
    }
>>>>>>> 7f0547599e0becfef8d2c867ffb86aa975251268
  };
  console.log(cleanApiData)
  return cleanApiData;
}

