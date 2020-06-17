import React from 'react';
import './App.css';
// import * as MLB from './services/api';
import * as api from './services/api';

function App() {
  return (
    <div className="App">
      {api
        .getCategories()
        .then((categories) => categories.json())
        .then((data) => (
          <div>{data}</div>
        ))}
      {/* console.log(data) */}
      {api
        .getProductsFromCategoryAndQuery()
        .then((categories) => categories.json())
        .then((data) => (
          <div>{data}</div>
        ))}
      {/* console.log(data) */}
    </div>
  );
}
export default App;
