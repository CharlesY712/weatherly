import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHourForecast from '../lib/SevenHourForecast.js';

const cleanApiData = {
  hourly: [
    { hour: "6:00 PM", icon: "http://icons.clear.gif", tempF: "37" },
    { hour: "7:00 PM", icon: "http://icons.clear.gif", tempF: "34" },
    { hour: "8:00 PM", icon: "http://icons.clear.gif", tempF: "30" },
    { hour: "9:00 PM", icon: "http://icons.clear.gif", tempF: "26" },
    { hour: "10:00 PM", icon: "http://icons.clear.gif", tempF: "25" },
    { hour: "11:00 PM", icon: "http://icons.clear.gif", tempF: "24" },
    { hour: "12:00 AM", icon: "http://icons.clear.gif", tempF: "23" }
  ]
};

describe('SevenHour', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SevenHourForecast cleanApiData={cleanApiData} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render a h1 tag with a class of seven-hour', () => {
    expect(wrapper.find('.seven-hour').length).toEqual(1);
  });

  it('should render seven card components with a class of seven-hour-card', () => {
    expect(wrapper.find('.seven-hour-card').length).toEqual(7);
  });
});