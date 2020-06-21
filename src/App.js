import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ShopPage from './Pages/ShopPage';
import Home from './Pages/Home';
import ProductDetails from './Pages/ProdDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ShopPage" component={ShopPage} />
          <Route path="/ProdDetails/:id" component={ProductDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
