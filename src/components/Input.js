import React, { Component } from 'react';
// import * as api from '../services/api';

class Input extends Component {
  render() {
    const { value, onClick, onChange } = this.props;
    // console.log(this.state.items);
    return (
      <div>
        <input
          type="text"
          data-testid="query-input"
          value={value}
          onChange={onChange}
        />
        <button
          type="button"
          data-testid="query-button"
          // onClick={() => api.getProductsFromCategoryAndQuery(search)}
          onClick={onClick}
        >
          Search
        </button>
        {/* {console.log(items)} */}
      </div>
    );
  }
}

export default Input;
