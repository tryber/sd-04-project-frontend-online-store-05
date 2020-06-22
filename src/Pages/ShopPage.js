import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = { cartItems: [] };
  }

 qualquerNome() {
    if (!localStorage.cartItems) localStorage.cartItems = JSON.stringify([]);
    const keyStorage = JSON.parse(localStorage.cartItems);
    this.setState({ cartItems: keyStorage });
 }

  componentDidMount() {
    this.qualquerNome()
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
      // <div>
      //   <Link data-testid="checkout-products" to="/Checkout">
      //     <button type="button">Comprar</button>
      //   </Link>
      // </div>
    );
  }
}

export default ShopPage;
