import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentWeather from '../lib/CurrentWeather.js';

const cleanApiData = {
  curr: {
    location: 'denver, co',
    date: '24',
    day: 'tuesday',
    month: 'may',
    conditions: 'cloudy',
    temp: '39',
    high: '42',
    low: '23',
    summary: 'Plentiful sunshine. High 42.',
    icon: 'img.png'
  }
};

describe.skip('CurrentWeather', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = shallow(<CurrentWeather cleanApiData={cleanApiData} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have an p element with a class of today title', () => {
    expect(wrapper.find('.today-title').text()).toEqual('Today\'s Weather');
  });


})