import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        {/* <label></label> */}
        <input type="text"></input>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Home;
