import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddToCart from './AddToCart';

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
            <div>
              <AddToCart item={product} testid="product-add-to-cart" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
