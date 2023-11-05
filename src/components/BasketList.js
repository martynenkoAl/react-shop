import React, { useContext } from 'react';
import BasketItem from './BasketItem';
import { ShopContext } from '../context';

export default function BasketList() {
  const { order = [], handleBasketShow = Function.prototype } =
    useContext(ShopContext);

  return (
    <div className='basket'>
      <ul className='collection basket-list'>
        <span
          className='secondary-content close-btn'
          onClick={handleBasketShow}
        >
          <i className='material-icons white-text'>clear</i>
        </span>
        <li className='collection-item active'>Корзина</li>
        {order.length ? (
          order.map((el) => <BasketItem key={el.mainId} {...el} />)
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
