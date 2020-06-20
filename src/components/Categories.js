import React, { Component } from 'react';
import * as api from '../services/api';

function createRadio(cat, callback) {
  return (
    <div className="categoriesDiv" style={{ display: 'inline-block' }}>
      <label htmlFor={cat.id} data-testid="category">
        <input
          type="radio"
          id={cat.id}
          name="categoriesRadio"
          value={cat.name}
          onChange={callback}
        />
        {cat.name}
      </label>
    </div>
  );
}

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: '' };
    // this.createRadio = this.createRadio.bind(this);
  }

  componentDidMount() {
    api
      .getCategories()
      .then((response) => this.setState({ categories: response }));
  }

  render() {
    const { categories } = this.state;
    const { onChange } = this.props;
    if (categories === '') return <p>Loading...</p>;
    return (
      // <div>
      //   {categories.map((cat) => (
      //     <label htmlFor={cat.id} key="categorie">
      //       <input
      //         id={cat.id}
      //         type="radio"
      //         data-testid="category"
      //         onChange={onChange}
      //       />
      //       {cat.name}
      //       <br />
      //     </label>
      //   ))}
      // </div>
      <div>{categories.map((cat) => createRadio(cat, onChange))}</div>
    );
  }
}

export default Categories;
