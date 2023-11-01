import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import BasketList from './BasketList';
import Alert from './Alert';
import Pagination from './Pagination';

export default function Shop() {
  const [goods, setGoods] = useState([]);
  const [isLosding, setIsLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setIsBasketShow] = useState(false);
  const [alertName, setAlertName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [goodsPerPage] = useState(10);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setIsLoading(false);
      });
  }, []);

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((el) => el.mainId === item.mainId);
    if (itemIndex < 0) {
      const newItem = { ...item, quantity: 1 };
      setOrder([newItem, ...order]);
    } else {
      const newOrder = order.map((el, index) => {
        if (index === itemIndex) {
          return { ...el, quantity: el.quantity + 1 };
        } else {
          return el;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.displayName);
  };

  const handleBasketShow = () => {
    setIsBasketShow(!isBasketShow);
  };

  const removeFromBasket = (id) => {
    setOrder(order.filter((el) => el.mainId !== id));
  };

  const increaseItems = (id) => {
    setOrder(
      order.map((el) =>
        el.mainId === id ? { ...el, quantity: el.quantity + 1 } : el
      )
    );
  };

  const decreaseItems = (id) => {
    if (order.find((el) => el.mainId === id).quantity <= 1) {
      setOrder(order.filter((el) => el.mainId !== id));
    } else {
      setOrder(
        order.map((el) =>
          el.mainId === id ? { ...el, quantity: el.quantity - 1 } : el
        )
      );
    }
  };

  const closeAlert = () => {
    setAlertName('');
  };

  const lastGoodIndex = currentPage * goodsPerPage;
  const firstGoodIndex = lastGoodIndex - goodsPerPage;
  const currentGoods = goods.slice(firstGoodIndex, lastGoodIndex);
  const totalGoods = goods.length;

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <main className='container content'>
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {isLosding ? (
        <Preloader />
      ) : (
        <GoodsList goods={currentGoods} addToBasket={addToBasket} />
      )}
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          increaseItems={increaseItems}
          decreaseItems={decreaseItems}
        />
      )}
      <Pagination
        goodsPerPage={goodsPerPage}
        totalGoods={totalGoods}
        handlePagination={handlePagination}
        nextPage={nextPage}
        prevPage={prevPage}
        currentPage={currentPage}
      />
      {alertName && <Alert closeAlert={closeAlert} displayName={alertName} />}
    </main>
  );
}
