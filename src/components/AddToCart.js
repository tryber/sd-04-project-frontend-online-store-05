import React from 'react';

const AddToCart = (props) => {
  const { item, testid } = props;
  const addItemCart = (prod) => {
    if (!localStorage.cartItems) localStorage.cartItems = JSON.stringify([]);
    const keyStorage = JSON.parse(localStorage.cartItems);
    keyStorage.push(prod);
    localStorage.cartItems = JSON.stringify(keyStorage);
  };

  return (
    <div>
      <button
        type="button"
        data-testid={testid}
        onClick={() => addItemCart(item)}
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default AddToCart;
