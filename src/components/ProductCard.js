import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product">
        <div>{product.title}</div>
        <div>
          <img src={product.thumbnail} alt="Product Cover" />
          <p>{product.price}</p>
          <div>
            <Link
              type="button"
              data-testid="product-detail-link"
              to={{
                pathname: `/ProdDetails/${product.id}`,
                state: { product },
              }}
            >
              Detalhes do Produto
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
