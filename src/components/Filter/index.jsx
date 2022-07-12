import React, { Component } from 'react';

class Filter extends Component {
  changeHandler = e => {
    const { value } = e.target;

    this.props.onFilterContacts(value);
  };

  render() {
    return (
      <label>
        Find contacts by name
        <input name="filter" type="text" onChange={this.changeHandler}></input>
      </label>
    );
  }
}

export default Filter;
