import React from 'react';
import './App.css';
import Home from './components/Home';
// import * as api from './services/api';

function App() {
  return (
    <div className="App">
      <Home />
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
