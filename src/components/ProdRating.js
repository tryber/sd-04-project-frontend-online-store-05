import React, { Component } from 'react';

class ProdRating extends Component {
  render() {
    return (
      <div>
        <textarea
          placeholder="O que achou do produto?"
          data-testid="product-detail-evaluation"
        />
        <button type="submit">Enviar Avaliação</button>
      </div>
    );
  }
}

export default ProdRating;
