import React, { Component } from 'react';
import AddToCart from './AddToCart';

class DetailsProduct extends Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        <p data-testid="product-detail-name">{product.title}</p>
        <p>{`R$ ${product.price}`}</p>
        <p>{product.id}</p>
        <div>
          <AddToCart item={product} testid="product-detail-add-to-cart" />
        </div>
      </div>
    );
  }
}

export default DetailsProduct;
