import React, { Component } from 'react';
import CartIcon from '../components/CartIcon';
import Categories from '../components/Categories';
import Input from '../components/Input';
import ProdList from '../components/ProdList';
import * as api from '../services/api';
import AddProduct from '../components/AddCart';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '', items: '' };
    this.changeSearch = this.changeSearch.bind(this);
    this.getProduct = this.getProduct.bind(this);
    this.getProductFromId = this.getProduct.bind(this);
  }

  getProduct() {
    const { search } = this.state;
    api
      .getProductsFromCategoryAndQuery(search)
      .then((res) => this.setState({ items: res.results }));
  }

  getProductFromId(e) {
    const { items } = this.state;
    const query = items;
    const categoryId = e.target.id;
    if (query && categoryId) {
      api
        .getProductsFromCategoryAndQuery({ categoryId, query })
        .then((results) => this.setState({ items: results.results }));
    } else if (categoryId) {
      api
        .getProductsFromCategoryAndQuery({ categoryId })
        .then((results) => this.setState({ items: results.results }));
    } else {
      api
        .getProductsFromCategoryAndQuery({ query })
        .then((results) => this.setState({ items: results.results }));
    }
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
        <Categories onChange={this.getProductFromId} />
        <ProdList items={items} />
      </div>
    );
  }
}
export default Home;
