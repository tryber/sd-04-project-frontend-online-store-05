import React, { Component } from 'react';

class DetailsProduct extends Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        <p data-testid="product-detail-name">{product.title}</p>
        <p>{`R$ ${product.price}`}</p>
        <p>{product.id}</p>
      </div>
    );
  }
}

export default DetailsProduct;
