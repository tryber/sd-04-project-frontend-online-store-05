import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = { cartItems: [] };
  }

  componentDidMount() {
    this.qualquerNome();
  }

  qualquerNome() {
    if (!localStorage.cartItems) localStorage.cartItems = JSON.stringify([]);
    const keyStorage = JSON.parse(localStorage.cartItems);
    this.setState({ cartItems: keyStorage });
  }

  filterItem(itemId) {
    const { cartItems } = this.state;
    return cartItems.filter((prod) => prod.id === itemId).length;
  }

  render() {
    const { cartItems } = this.state;
    return cartItems.length === 0 ? (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    ) : (
      cartItems.map((res) => (
        <div>
          <p data-testid="shopping-cart-product-name">{res.title}</p>
          <p data-testid="shopping-cart-product-quantity">{this.filterItem(res.id)}</p>
        </div>
      ))
    );
  }
}

export default ShopPage;
