import React from 'react';
import logo from './logo.svg';
import './App.css';
// import * as MLB from './services/api';
import * as api from './services/api';

function App() {
  return (
    <div className="App">
      {api
        .getCategories()
        .then((categories) => categories.json())
        .then((data) => console.log(data))}
      {api
        .getProductsFromCategoryAndQuery()
        .then((categories) => categories.json())
        .then((data) => console.log(data))}
    </div>
  );
}
export default App;
