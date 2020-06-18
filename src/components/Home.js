import React, { Component } from 'react';
import CartIcon from './CartIcon';

class Home extends Component {
  render() {
    return (
      <div>
        {/* <label></label> */}
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CartIcon />
      </div>
    );
  }
}

export default Home;
