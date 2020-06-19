import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ShopPage from './Pages/ShopPage';
import ProductList from './Pages/ProductList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/ShopPage" component={ShopPage} />
        </Switch>
      </BrowserRouter>
      {/* <Shop /> */}
      {/* {api
        .getCategories()
        .then((categories) => categories.json())
        .then((data) => (
          <div>{data}</div>
        ))}
      {api
        .getProductsFromCategoryAndQuery()
        .then((categories) => categories.json())
        .then((data) => (
          <div>{data}</div>
        ))} */}
    </div>
  );
}
export default App;
