import React from 'react';
import Cart from '../components/Cart/Cart';
import Topic from '../components/Topic/Topic';

function ShoppingCart() {
  return (
    <>
      <Topic title={'my cart'} />
      <Cart />
    </>
  );
}

export default ShoppingCart;
