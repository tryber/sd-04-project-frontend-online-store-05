import React, { Component } from 'react';
import ProductCard from '../components/ProductCard';
import Input from '../components/Input';
import * as api from '../services/api';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '', items: '' };
    this.changeSearch = this.changeSearch.bind(this);
    this.getProduct = this.getProduct.bind(this);
  }

  getProduct() {
    console.log(this.state.search)
    api
      .getProductsFromCategoryAndQuery(this.state.search)
      .then((res) => this.setState({ items: 'teste' }));

    console.log(this.state.items);
  }

  changeSearch(event) {
    this.setState({ search: event.target.value });
    console.log(this.state.search);
  }

  createInput() {
    const { search, items } = this.props;
    return (
      <Input
        value={search}
        onChange={this.changeSearch}
        onClick={this.getProduct}
      />
    );
  }
  // componentDidMount() {
  //   const { items } = this.props;
  //   // console.log(items.map((item) => <ProductCard key={item.id} item={item} />))
  //   // this.setState({ toot: xablau });
  // }

  render() {
    // if (!this.props) console.log('nao tem props');
    const { search, items } = this.props;
    console.log(search);
    console.log(items);
    // console.log(items)
    // const { toot } = this.state;
    // if (toot === '') return <p>Loading...</p>;
    return <div>{this.createInput()}</div>;

    {
      /* {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
        {console.log(items)} */
    }
    {
      /* {items.map((prod) => (<ProductCard key={items.id}>))} */
    }
  }
}

export default ProductList;

// --------------------------------------------------------------
// import React from 'react';
// import MovieCard from './MovieCard';

// class MovieList extends React.Component {
// render() {
// const { movies } = this.props;
// return (
// <div>
// {movies.map((movieElem) => (<MovieCard key={movieElem.title} movie={movieElem} />))}
// </div>
// );
// }
// }

// export default MovieList;
