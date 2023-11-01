import React from 'react';
import BasketItem from './BasketItem';

export default function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    increaseItems = Function.prototype,
    decreaseItems = Function.prototype,
  } = props;

  return (
    <div className='basket'>
      <ul className='collection basket-list'>
        <span class='secondary-content close-btn' onClick={handleBasketShow}>
          <i class='material-icons white-text'>clear</i>
        </span>
        <li className='collection-item active'>Корзина</li>
        {order.length ? (
          order.map((el) => (
            <BasketItem
              removeFromBasket={removeFromBasket}
              increaseItems={increaseItems}
              decreaseItems={decreaseItems}
              key={el.mainId}
              {...el}
            />
          ))
        ) : (
          <li className='collection-item'>Корзина пуста</li>
        )}
        <li className='collection-item active'>
          Общая стоимость:{' '}
          {order.reduce((acc, cur) => acc + cur.regularPrice * cur.quantity, 0)}{' '}
          руб.
        </li>
        <li className='collection-item active'>
          <button className='btn-small teal lighten-3'>Оформить заказ</button>
        </li>
      </ul>
    </div>
  );
}
