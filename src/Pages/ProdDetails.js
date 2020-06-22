import React from 'react';
import DetailsProduct from '../components/DetailsProduct';
import ProdRating from '../components/ProdRating';
import CartIcon from '../components/CartIcon';

export class ProductDetail extends React.Component {
  render() {
    const { location: { state: { product } } } = this.props;
    return (
      <div>
        <img src={product.thumbnail} alt={product.title} />

        <DetailsProduct product={product} />
        <ProdRating />
        <CartIcon />
      </div>
    );
  }
}

export default ProductDetail;
