import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather.js';
import retrieveWeather from './API.js';
import SevenHourForecast from './SevenHourForecast.js';
import cleanApiData from './CleanData.js';
import Search from './Search.js';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      cleanApiData: null,
      location: ''
    }

    this.setLocation = this.setLocation.bind(this);
  }

  componentDidMount() {
  
    retrieveWeather()
      .then(response => response.json())
      .then(weatherUnderground => {
        this.setState({
          cleanApiData: cleanApiData(weatherUnderground)
        })
      })
      .catch(error => console.log({error}));
  }

  setLocation() {
    this.setState( { location: location} );
  }

  render () {
      if (!this.state.location) {
      return (
        <div className='App'>
          
          <Search setLocation={this.setLocation} />
        </div>
      );
    } else {
      return (
    <div>
    {
      this.state.cleanApiData &&
      <CurrentWeather cleanApiData={this.state.cleanApiData}/>
    }
    {
      this.state.cleanApiData &&
      <SevenHourForecast cleanApiData={this.state.cleanApiData}/>
      // if else condition for 7 vs 10
    }
    </div>
    );
  }
 }
}

export default App;