import React from 'react';

export default function BasketItem(props) {
  const {
    mainId,
    displayName,
    regularPrice,
    quantity,
    removeFromBasket = Function.prototype,
    increaseItems = Function.prototype,
    decreaseItems = Function.prototype,
  } = props;

  return (
    <li className='collection-item'>
      {displayName} x{quantity} = {regularPrice * quantity} руб.
      <span class='secondary-content'>
        <i
          class='material-icons delete-btn'
          onClick={() => removeFromBasket(mainId)}
        >
          delete
        </i>
      </span>
      <span class='secondary-content'>
        <i
          class='material-icons delete-btn'
          onClick={() => decreaseItems(mainId)}
        >
          remove
        </i>
      </span>
      <span class='secondary-content'>
        <i
          class='material-icons delete-btn'
          onClick={() => increaseItems(mainId)}
        >
          add
        </i>
      </span>
    </li>
  );
}
