import React, { Component } from 'react';
import ProductCard from './ProductCard';

class ProdList extends Component {
  render() {
    const { items } = this.props;
    if (items === '') return <div>Sem elementos ainda</div>;
    return (
      <div>
        {console.log(items)}
        {items.map((item) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </div>
    );
  }
}

export default ProdList;
