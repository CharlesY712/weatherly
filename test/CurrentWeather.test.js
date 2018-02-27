import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentWeather from '../lib/CurrentWeather.js';

const cleanApiData = {
  curr: {
    location: 'Denver, CO',
    day: 'Monday',
    month: 'July',
    date: '26',
    conditions: 'Sunny',
    temp: '60',
    highF: '70',
    highC: '70',
    lowF: '50',
    lowC: '50',
    summary: 'Plentiful sunshine. High 70.',
    icon: 'img.png'
  }
};

describe('CurrentWeather', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = shallow(<CurrentWeather cleanApiData={cleanApiData} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render a p element with a class of location show the current location', () => {
    expect(wrapper.find('.location').text()).toEqual('Denver, CO');
  });

  it('should render a p element with a class of day-mon-date show the current day month and date', () => {
    expect(wrapper.find('.day-mon-date').text()).toEqual('MondayJuly26');
  });

  it('should render a p element with a class of condition show the current condition', () => {
    expect(wrapper.find('.condition').text()).toEqual('Sunny');
  });

  it('should render a p element with a class of current show the current temp', () => {
    expect(wrapper.find('.current').text()).toEqual('Current:60');
  });

  it('should render a p element with a class of high-temp show the high temp', () => {
    expect(wrapper.find('.high-temp').text()).toEqual('High:70 F (70 C)');
  });

  it('should render a p element with a class of low-temp show the low temp', () => {
    expect(wrapper.find('.low-temp').text()).toEqual('Low:50 F (50 C)');
  });

  it('should render a p element with a class of summary show the weather summary', () => {
    expect(wrapper.find('.summary').text()).toEqual('Plentiful sunshine. High 70.');
  });
})