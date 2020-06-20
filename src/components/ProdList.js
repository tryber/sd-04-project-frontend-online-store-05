import React, { Component } from 'react';
// import * as api from '../services/api';
// import Input from './Input';
import ProductCard from './ProductCard';

class ProdList extends Component {
  render() {
    const { items } = this.props;
    if (items === '') return <div>Sem elementos ainda</div>;
    return (
      <div>
        {/* {this.chamaMap()} */}
        {console.log(items)}
        {items.map((item) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </div>
    );
  }
}

export default ProdList;
