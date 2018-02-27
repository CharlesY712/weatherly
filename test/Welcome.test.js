import React from 'react';
import { shallow, mount } from 'enzyme';
import Welcome from '../lib/Welcome.js';

describe('Welcome', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Welcome />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render an h1 tag with a welcome title', () => {
    expect(wrapper.find('h1').text()).toEqual('Welcome to Weatherly');
  });
});
