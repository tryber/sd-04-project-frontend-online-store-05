import React, { Component } from 'react';
import CartIcon from './CartIcon';
import Categories from './Categories';

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
        <Categories />
      </div>
    );
  }
}

export default Home;
