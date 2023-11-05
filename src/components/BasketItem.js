import React, { useContext } from 'react';
import { ShopContext } from '../context';

export default function BasketItem(props) {
  const { mainId, displayName, regularPrice, quantity } = props;

  const {
    removeFromBasket = Function.prototype,
    increaseItems = Function.prototype,
    decreaseItems = Function.prototype,
  } = useContext(ShopContext);

  return (
    <li className='collection-item'>
      {displayName} x{quantity} = {regularPrice * quantity} руб.
      <span className='secondary-content'>
        <i
          className='material-icons delete-btn'
          onClick={() => removeFromBasket(mainId)}
        >
          delete
        </i>
      </span>
      <span className='secondary-content'>
        <i
          className='material-icons delete-btn'
          onClick={() => decreaseItems(mainId)}
        >
          remove
        </i>
      </span>
      <span className='secondary-content'>
        <i
          className='material-icons delete-btn'
          onClick={() => increaseItems(mainId)}
        >
          add
        </i>
      </span>
    </li>
  );
}
