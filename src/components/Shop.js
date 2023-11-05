import React, { useEffect, useContext } from 'react';
import { API_KEY, API_URL } from '../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import BasketList from './BasketList';
import Alert from './Alert';
import Pagination from './Pagination';

import { ShopContext } from '../context';

export default function Shop() {
  const {
    goods,
    setGoods,
    isLosding,
    order,
    isBasketShow,
    alertName,
    currentPage,
    goodsPerPage,
  } = useContext(ShopContext);

  const lastGoodIndex = currentPage * goodsPerPage;
  const firstGoodIndex = lastGoodIndex - goodsPerPage;
  const currentGoods = goods.slice(firstGoodIndex, lastGoodIndex);
  const totalGoods = goods.length;

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setGoods(data.shop);
      });
  }, []);

  return (
    <main className='container content'>
      <Cart quantity={order.length} />
      {isLosding ? <Preloader /> : <GoodsList goods={currentGoods} />}
      {isBasketShow && <BasketList />}
      <Pagination totalGoods={totalGoods} />
      {alertName && <Alert />}
    </main>
  );
}
