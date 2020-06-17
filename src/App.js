import React from 'react';
import './App.css';
<<<<<<< HEAD
=======
// import * as MLB from './services/api';
>>>>>>> 68f63af4fa9d190572e39222f1ee5adf5eebb8fb
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
