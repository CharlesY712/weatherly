import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather.js';
import retrieveWeather from './API.js';
import SevenHourForecast from './SevenHourForecast.js';
import TenDayForecast from './TenDayForecast.js'
import cleanApiData from './cleanData.js';
import Search from './Search.js';
import Welcome from './Welcome.js';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      cleanApiData: null,
      location: localStorage.location,
      error: false
    }

    this.setLocation = this.setLocation.bind(this);
    this.getWeatherData = this.getWeatherData.bind(this);
  }

  setLocation(location) {
    this.setState({location: location})
    this.getWeatherData(location)
  }


  getWeatherData(location) {
    const getStorage = localStorage.getItem('location');

    retrieveWeather(location)
    .then(response => response.json())
    .then(weatherUnderground => {
      if (weatherUnderground.forecast) {
        localStorage.setItem('location', location);
        this.setState({
          error: false,
          cleanApiData: cleanApiData(weatherUnderground),
          location: location
        })
      } else {
        this.setState({
          error: true
        })
      }
    })
    .catch(() => this.setState({ error: true }));
  }

  componentDidMount() {
    if (this.state.location) {
      this.getWeatherData(this.state.location);
    }
  }

  render () {
    if (this.state.error) {
      return (
        <div>
            <Search setLocation={this.setLocation} />
          <p>Please insert a recognized location</p>
          {
            this.state.cleanApiData &&
            <CurrentWeather cleanApiData={this.state.cleanApiData}/>
          }
          {
            this.state.cleanApiData &&
            <SevenHourForecast cleanApiData={this.state.cleanApiData}/>
          }
          {
            this.state.cleanApiData &&
            <TenDayForecast cleanApiData={this.state.cleanApiData}/>
          }
        </div>
        )
    }
    if (!this.state.location) {
      return (
        <div>
        <Welcome />
        <Search setLocation={this.setLocation} />
        </div>
        );
    } else {
      return (
        <div>
        {
          this.state.cleanApiData &&
          <Search setLocation={this.setLocation} />
        }
        {
          this.state.cleanApiData &&
          <CurrentWeather cleanApiData={this.state.cleanApiData}/>
        }
        {
          this.state.cleanApiData &&
          <SevenHourForecast cleanApiData={this.state.cleanApiData}/>
        }
        {
          this.state.cleanApiData &&
          <TenDayForecast cleanApiData={this.state.cleanApiData}/>
        }
        </div>
      );
    }
  }
}

export default App;