const { Component } = require('react');

class Filter extends Component {
  render() {
    return (
      <label htmlFor="filter">
        Filter contacts by name
        <input type="search" name="q" id="filter"></input>
      </label>
    );
  }
}

export default Filter;
