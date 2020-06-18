import React from 'react';
import './App.css';
<<<<<<< HEAD
<<<<<<< HEAD
=======
// import * as MLB from './services/api';
>>>>>>> 68f63af4fa9d190572e39222f1ee5adf5eebb8fb
import * as api from './services/api';
=======
import Home from './components/Home';
// import * as api from './services/api';
>>>>>>> 48821734550d0dbb6095b74208ad05871e557a8a

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
