import React, { Component } from 'react';
import './css/Search.css';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      userInput: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ userInput: event.target.value });
  }

  handleClick() {
    this.props.setLocation(this.state.userInput);
    this.setState({userInput: ''})
  }

  render() {
    return (
      <div className="Search">
        <input type='search'
              className="search"
               placeholder='Search by Location'
               value = {this.state.userInput}
               onChange={this.handleChange} />
        <input className="submitBtn"type="submit"
               placeholder="Search"
               onClick={this.handleClick} />
      </div>
    );
  }
}