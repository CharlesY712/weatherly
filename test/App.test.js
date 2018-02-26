import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App.js';

// console.log(wrapper.debug())

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = shallow(<App />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should initially have set states of null for cleanApiData, a set location, and no apiData error', () => {
    expect(wrapper.state()).toEqual(
    {
      cleanApiData: null,
      location: localStorage.location,
      error: false
    });
  });

  // it('should set the location on mount if a location exists in local storage', () => {
  //   const city = [
  //   { title: 'title', body: 'body', id: 1},
  //   { title: 'title', body: 'body', id: 2}
  //   ];

  //   localStorage.setItem('location', JSON.stringify(city));

  //   // wrapper = mount(<App />);

  //   // console.log(localStorage.location)
  //   // expect(wrapper.state().location).toEqual(city);
  // });
// IF THERE IS AN ERROR
  it('should render the Search components if there is an error', () => {
    wrapper.setState({ error: true })

    expect(wrapper.find('Search').length).toEqual(1);
  });

  it('should render the CurrentWeather, SevenHourForecast, and TenDayForecast components if there is an error and there is cleanApiData', () => {
    wrapper.setState({ error: true, cleanApiData: true })


    expect(wrapper.find('CurrentWeather').length).toEqual(1);
    expect(wrapper.find('SevenHourForecast').length).toEqual(1);
    expect(wrapper.find('TenDayForecast').length).toEqual(1);
  });
// IF THERE IS NO LOCATION
  it('should render the Welcome and Search components if there is a location and no error', () => {
    wrapper.setState({ error: false })
    wrapper.setState({ cleanApiData: true })

    expect(wrapper.find('Search').length).toEqual(1);
    expect(wrapper.find('Welcome').length).toEqual(1);
  });

// IF THERE IS A LOCATION
  it('should render the Search, CurrentWeather, SevenHourForecast component if there is a valid location', () => {
    wrapper.setState({ error: false})
    wrapper.setState({ cleanApiData: true });
    wrapper.setState({ city: 'Denver, CO' });

    // console.log(wrapper.debug())
    expect(wrapper.find('Search').length).toEqual(1);
    expect(wrapper.find('CurrentWeather').length).toEqual(1);
    expect(wrapper.find('SevenHourForecast').length).toEqual(1);
    expect(wrapper.find('TenDayForecast').length).toEqual(1);
  });
});
