import React, { Component } from 'react';
import './css/Search.css';
import PropTypes from 'prop-types';
import Trie from '@CharlesY712/complete-me/lib/trie.js';
import cities from '../__mocks__/dictionaryMock.js';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      suggestions: []
    };

    this.trie = new Trie();
    this.trie.populate(cities.data);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ userInput: (event.target.value)
      .charAt(0).toUpperCase() + (event.target.value).slice(1),
    suggestions: this.trie.suggest(event.target.value)
    });

  }

  handleClick() {
    this.props.setLocation(this.state.userInput);
    this.setState({userInput: ''});
  }

  render() {
    return (
      <div className="Search">
        <input className="search"
          type='search'
          placeholder='Search by Location'
          list = 'suggestions'
          value = {this.state.userInput}
          onChange={this.handleChange} />
        <datalist id="suggestions">
          {
            this.state.suggestions.map((suggestion, i) => {
              if (i < 5) {
                return <option key={i} value={suggestion}/>;
              }
            })
          }
        </datalist>
        <input className="search-button"
          type="submit"
          placeholder="Search"
          onClick={this.handleClick} />
      </div>
    );
  }
}

Search.propTypes = {
  setLocation: PropTypes.func
};