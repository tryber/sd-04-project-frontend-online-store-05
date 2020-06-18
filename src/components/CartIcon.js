import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartIcon extends Component {
  render() {
    return (
      <div>
        <Link to="/ShopPage">
          {/* <ShopPage
            src="https://cdn.iconscout.com/icon/free/png-256/shopping-cart-452-1163339.png"
            alt="carrinho de compras"
            data-testid="shopping-cart-button"
          /> */}
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/shopping-cart-452-1163339.png"
            alt="carrinho de compras"
            data-testid="shopping-cart-button"
          />
        </Link>
      </div>
    );
  }
}

export default CartIcon;
