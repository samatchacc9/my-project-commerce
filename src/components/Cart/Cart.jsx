import React from 'react';
// import Topic from '../Topic/Topic';
import './Cart.css';

function Cart() {
  return (
    <>
      {/* <Topic title='my cart' /> */}
      <div className='container-cart'>
        <div className='cart'>
          <div className='products'>
            <div className='product'>
              <img src='https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' />

              <div className='product-info'>
                <h3 className='product-name'>New Shoes</h3>

                <h4 className='product-price-cart'>₹ 1,000</h4>

                <div className='change-item'>
                  <p className='product-quantity'>
                    Qnt: <input value='1' name='' />
                  </p>

                  <p className='product-remove'>
                    <i className='fa fa-trash' aria-hidden='true'></i>

                    <span className='remove'>&nbsp;Remove</span>
                  </p>
                </div>
              </div>
            </div>

            <div className='product'>
              <img src='https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=626&q=80' />

              <div className='product-info'>
                <h3 className='product-name'>New Bag</h3>

                <h4 className='product-price-cart'>₹ 2,000</h4>

                <p className='product-quantity'>
                  Qnt: <input value='1' name='' />
                </p>

                <p className='product-remove'>
                  <i className='fa fa-trash' aria-hidden='true'></i>

                  <span className='remove'>&nbsp;Remove</span>
                </p>
              </div>
            </div>
          </div>

          <div className='cart-total'>
            <p>
              <span>Total Price</span>

              <span>₹ 3,000</span>
            </p>

            <p>
              <span>Number of Items</span>

              <span>2</span>
            </p>

            <a href='#'>Proceed to Checkout</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
