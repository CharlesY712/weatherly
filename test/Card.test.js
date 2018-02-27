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

  it('should render an h3 tag with the hour', () => {
    expect(wrapper.find('h3').text()).toEqual('8:00');
  });

  it('should render a h4 tag with the temp', () => {
    expect(wrapper.find('h4').text()).toEqual('33');
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

  it('should render an h3 tag with the day', () => {
    expect(wrapper.find('h3').text()).toEqual('Tuesday');
  });

   it('should render a h4 tag with the high', () => {
    expect(wrapper.find('h4').text()).toEqual('High: 75');
  });

   it('should render a h5 tag with the low', () => {
    expect(wrapper.find('h5').text()).toEqual('Low: 35');
  });
});
