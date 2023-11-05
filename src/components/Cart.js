import React, { useContext } from 'react';
import { ShopContext } from '../context';

export default function Cart(props) {
  const { quantity = 0 } = props;
  const { handleBasketShow = Function.prototype } = useContext(ShopContext);

  return (
    <div className='cart teal accent-2' onClick={handleBasketShow}>
      <i className='material-icons'>local_grocery_store</i>
      {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
  );
}
