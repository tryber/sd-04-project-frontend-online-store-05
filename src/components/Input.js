import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { value, onClick, onChange } = this.props;
    return (
      <div>
        <input
          type="text"
          data-testid="query-input"
          value={value}
          onChange={onChange}
        />
        <button type="button" data-testid="query-button" onClick={onClick}>
          Search
        </button>
      </div>
    );
  }
}

export default Input;
