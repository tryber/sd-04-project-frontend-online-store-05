// import React, { Component } from 'react';
// import CartIcon from '../components/CartIcon';
// import Categories from '../components/Categories';
// import Input from '../components/Input';
// import * as api from '../services/api';
// import ProductCard from '../components/ProductCard';

// class ProductDetails extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { search: '', items: '' };
//     this.changeSearch = this.changeSearch.bind(this);
//     this.getProduct = this.getProduct.bind(this);
//     this.chamaMap = this.chamaMap.bind(this);
//   }

//   getProduct() {
//     api
//       .getProductsFromCategoryAndQuery(this.state.search)
//       .then((res) => this.setState({ items: res.results }));
//     // console.log(item)
//     // this.setState({ items: item.results })
//     console.log(this.state.items);
//   }

//   changeSearch(event) {
//     this.setState({ search: event.target.value });
//   }

//   chamaMap() {
//     const { search, items } = this.state;
//     items.map((item) => <ProductCard search={item} />);
//   }

//   render() {
//     return (
//       <Input
//         value={search}
//         onChange={this.changeSearch}
//         onClick={() => {
//           this.getProduct();
//         }}
//       />
//     );

//     const { search, items } = this.state;
//     if (search === '') {
//       return (
//         <div>
//           <p data-testid="home-initial-message">
//             Digite algum termo de pesquisa ou escolha uma categoria.
//           </p>

//           <CartIcon />
//           <Categories onChange={this.getProduct} />
//         </div>
//       );
//     }
//     if (items === '') return <div></div>;
//     return (
//       <div>
//         <div>
//           {/* {this.chamaMap()} */}
//           {console.log(items)}
//           {items.map((prod) => (
//             <ProductCard items={prod} />
//           ))}
//         </div>
//         <CartIcon />
//         <Categories onChange={this.getProduct} />
//       </div>
//     );
//   }
// }

// export default ProductDetails;
