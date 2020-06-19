import React, { Component } from 'react';
import CartIcon from '../components/CartIcon';
import Categories from '../components/Categories';

class ProductDetails extends Component {
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CartIcon />
        <Categories />
      </div>
    );
  }
}

export default ProductDetails;
