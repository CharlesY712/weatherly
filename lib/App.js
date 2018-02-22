import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather.js';
import { retrieveWeather } from './API.js';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentWeather: null
    }
  }

  componentDidMount() {

    retrieveWeather()
      .then(response => response.json())
      .then(weatherUnderground => {
        this.setState({
          currentWeather: weatherUnderground.current_observation
        })
      })
      .catch(error => console.log({error}));
  }
  render () {
    return (
    <div>
    {
      this.state.currentWeather &&
      <CurrentWeather currentWeather={this.state.currentWeather}/>
    }
    </div>
    )
  }
}

export default App;