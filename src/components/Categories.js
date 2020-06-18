import React, { Component } from 'react';
import * as api from '../services/api';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: '',
    };
  }
  componentDidMount() {
    api.getCategories().then((response) => this.setState({ categories: response }));
  }
  render() {
    const { categories } = this.state;
    if (categories === '') return <p>Loading...</p>;
    return (
      <div>
        {categories.map((cat) => (
          <label key={cat.id}>
            <input type="radio" data-testid="category" />
            {cat.name}
            <br />
          </label>
        ))}
      </div>
    );
  }
}

export default Categories;
