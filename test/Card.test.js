import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../lib/Card.js';

describe('Hourly Card', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = shallow(<Card key={1} icon={'img.png'} hour={'8:00'} tempF={'33'}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render a img tag with a src', () => {
    expect(wrapper.find('img').prop('src')).toEqual('img.png');
  });

  it('should render an p tag with class of "hour" showing the hour', () => {
    expect(wrapper.find('.hour').text()).toEqual('8:00');
  });

  it('should render a p tag with class "temp" showing the temp', () => {
    expect(wrapper.find('.temp').text()).toEqual('33˚ F');
  });
});

describe('Ten day Card', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = shallow(<Card key={1} icon={'img.png'} day={'Tuesday'} high={'75'} low={'35'}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

   it('should render a img tag with a src', () => {
    expect(wrapper.find('img').prop('src')).toEqual('img.png');
  });

  it('should render p tag with class "day" showing the day', () => {
    expect(wrapper.find('.day').text()).toEqual('Tuesday');
  });

   it('should render a p tag with class "high" showing the high', () => {
    expect(wrapper.find('.high').text()).toEqual('High: 75˚ F');
  });

   it('should render a p tag with class "low" showing the low', () => {
    expect(wrapper.find('.low').text()).toEqual('Low: 35˚ F');
  });
});
