// import React from 'react';

// class ProductCard extends React.Component {
//   render() {
//     const { items } = this.props;
//     return (
//       <div data-testid="product">
//         <img src={items.imagePath} alt="product cover" />
//         <h4>{items.title}</h4>
//         <h5>{items.price}</h5>
//       </div>
//     );
//   }
// }

// export default ProductCard;

import React from 'react';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        <img src={product.thumbnail} alt="product cover" />
        <h4>{product.title}</h4>
        <h6>{product.price}</h6>
      </div>
    );
  }
}

export default ProductCard;
