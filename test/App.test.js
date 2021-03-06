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

  it('should have default states of null for cleanApiData, location, error', () => {
    expect(wrapper.state()).toEqual({ cleanApiData: null, location: localStorage.location, error: false });
  });

  it('should render the Search component if there is an error', () => {
    wrapper.setState({ error: true });

    expect(wrapper.find('Search').length).toEqual(1);
  });

  it('should render the error message if there is an error', () => {
    wrapper.setState({ error: true });

    expect(wrapper.find('p').text()).toEqual('Please insert a recognized location');
  });

  it('should render the CurrentWeather, SevenHourForecast, and TenDayForecast components if there is cleanApiData and an error', () => {
    wrapper.setState({ cleanApiData: true });
    wrapper.setState({ error: true });

    expect(wrapper.find('CurrentWeather').length).toEqual(1);
    expect(wrapper.find('SevenHourForecast').length).toEqual(1);
    expect(wrapper.find('TenDayForecast').length).toEqual(1);
  });

  it('should render the Welcome component if there is no location and no error', () => {
    wrapper.setState({ location: localStorage.location });
    wrapper.setState({ error: false });

    expect(wrapper.find('Welcome').length).toEqual(1);
  });

  it('should render the Search component if there is no location and no error', () => {
    wrapper.setState({ location: localStorage.location });
    wrapper.setState({ error: false });

    expect(wrapper.find('Search').length).toEqual(1);
  });

  it('should not render the CurrentWeather, SevenHourForecast, and TenDayForecast components if there is no location and no error', () => {
    wrapper.setState({ location: localStorage.location });
    wrapper.setState({ error: false });

    expect(wrapper.find('CurrentWeather').length).toEqual(0);
    expect(wrapper.find('SevenHourForecast').length).toEqual(0);
    expect(wrapper.find('TenDayForecast').length).toEqual(0);
  });

  it('should not render the Welcome component if there is a valid location, cleaned API data, and there is no error', () => {
    wrapper.setState({ cleanApiData: true });
    wrapper.setState({ location: 'Denver, CO' });
    wrapper.setState({ error: false });

    expect(wrapper.find('Welcome').length).toEqual(0);
  });

  it('should render the Search, CurrentWeather, SevenHourForecast, and TenDayForecast components if there is a valid location, cleaned API data, and there is no error', () => {
    wrapper.setState({ cleanApiData: true });
    wrapper.setState({ location: 'Denver, CO' });
    wrapper.setState({ error: false });

    expect(wrapper.find('Search').length).toEqual(1);
    expect(wrapper.find('CurrentWeather').length).toEqual(1);
    expect(wrapper.find('SevenHourForecast').length).toEqual(1);
    expect(wrapper.find('TenDayForecast').length).toEqual(1);
  });

  it('should update the state.cleanApiData, state.location, and state.error when a user clicks the submit button', () => {
    const mountedWrapper = mount(<App />);
    mountedWrapper.instance().getWeatherData = jest.fn();
    mountedWrapper.find('.search-bar').simulate('change', { target: { value: 'Denver, CO' } });
    mountedWrapper.find('.search-button').simulate('click');

    wrapper.setState({ cleanApiData: true });
    wrapper.setState({ location: 'Denver, CO' });
    wrapper.setState({ error: false });

    expect(mountedWrapper.instance().getWeatherData).toHaveBeenCalledTimes(1);
    expect(wrapper.state()).toEqual({ cleanApiData: true, location: 'Denver, CO', error: false });
  });
});