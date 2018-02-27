import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App.js';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = shallow(<App />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should initially have default states of null for cleanApiData, location, and no apiData error', () => {
    expect(wrapper.state()).toEqual(
      {
        cleanApiData: null,
        city: localStorage.location,
        error: false
      });
  });

  // Rendering - If there is an error
  it('Should render the Search component if there is an error', () => {
    wrapper.setState({ error: true });
    expect(wrapper.find('Search').length).toEqual(1);
  });

  it('Should render the error message if there is an error', () => {
    wrapper.setState({ error: true });
    expect(wrapper.find('p').text()).toEqual('Please insert a recognized location');
  });

  it('Should render the CurrentWeather, SevenHourForecast, and TenDayForecast components if there is an error and there is cleanApiData', () => {
    wrapper.setState({ error: true });
    wrapper.setState({ cleanApiData: true });

    expect(wrapper.find('CurrentWeather').length).toEqual(1);
    expect(wrapper.find('SevenHourForecast').length).toEqual(1);
    expect(wrapper.find('TenDayForecast').length).toEqual(1);
  });

  // Rendering - If there is no location set in storage
  it('Should render the Welcome component if there is no location', () => {
    expect(wrapper.find('Welcome').length).toEqual(1);
  });

  it('Should render the Search component if there is no location', () => {
    expect(wrapper.find('Search').length).toEqual(1);
  });

  it('Should not render the CurrentWeather, SevenHourForecast, and TenDayForecast components if there is no location', () => {
    expect(wrapper.find('CurrentWeather').length).toEqual(0);
    expect(wrapper.find('SevenHourForecast').length).toEqual(0);
    expect(wrapper.find('TenDayForecast').length).toEqual(0);
  });

  // Rendering - If there is a location set in state
  it('Should not render the Welcome component if there is a location that returned API data', () => {
    wrapper.setState({ city: 'Denver, CO' });
    wrapper.setState({ cleanApiData: true });

    expect(wrapper.find('Welcome').length).toEqual(0);
  });

  it('Should render the Search component if there is a location that returned API data', () => {
    wrapper.setState({ city: 'Denver, CO' });
    wrapper.setState({ cleanApiData: true });

    expect(wrapper.find('Search').length).toEqual(1);
  });

  it('Should render the CurrentWeather, SevenHourForecast, and TenDayForecast components if there is a location that returned API data', () => {
    wrapper.setState({ city: 'Denver, CO' });
    wrapper.setState({ cleanApiData: true });

    expect(wrapper.find('CurrentWeather').length).toEqual(1);
    expect(wrapper.find('SevenHourForecast').length).toEqual(1);
    expect(wrapper.find('TenDayForecast').length).toEqual(1);
  });

  it('Should render the CurrentWeather, SevenHourForecast, and TenDayForecast components if there is a location that returned API data', () => {
    wrapper.setState({ city: 'Denver, CO' });
    wrapper.setState({ cleanApiData: true });

    expect(wrapper.find('CurrentWeather').length).toEqual(1);
    expect(wrapper.find('SevenHourForecast').length).toEqual(1);
    expect(wrapper.find('TenDayForecast').length).toEqual(1);
  });
});