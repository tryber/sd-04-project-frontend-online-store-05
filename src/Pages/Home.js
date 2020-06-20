import React, { Component } from 'react';
import CartIcon from '../components/CartIcon';
import Categories from '../components/Categories';
import Input from '../components/Input';
import ProdList from '../components/ProdList';
import * as api from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '', items: '' };
    this.changeSearch = this.changeSearch.bind(this);
    this.getProduct = this.getProduct.bind(this);
  }

  getProduct() {
    const { search } = this.state;
    api
      .getProductsFromCategoryAndQuery(search)
      .then((res) => this.setState({ items: res.results }));
    // console.log(item)
    // this.setState({ items: item.results })
  }

  changeSearch(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    const { search, items } = this.state;
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Input
          value={search}
          onChange={this.changeSearch}
          onClick={this.getProduct}
        />
        <CartIcon />
        <Categories />
        <ProdList items={items} />
      </div>
    );
  }
}
export default Home;

// import React, { Component } from 'react';
// import CartIcon from '../components/CartIcon';
// import Categories from '../components/Categories';
// import Input from '../components/Input';
// import ProductList from '../components/ProductList';
// import * as api from '../services/api';

// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { items: [] };
//   }

//   render() {
//     return (
//       <div>
//         <ProductList items={items}/>
//         <CartIcon />
//         <Input />
//         <Categories />
//       </div>
//     );
//   }
// }

// export default Home;
