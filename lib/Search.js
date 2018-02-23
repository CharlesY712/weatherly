import React, { Component } from 'react';

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
  }

  render() {
    return (
      <div>
        <input type='search'
               placeholder='Search by Location'
               onChange={this.handleChange} />
        <input type="submit"
               placeholder="Search"
               onClick={this.handleClick} />
      </div>
    );
  }
}