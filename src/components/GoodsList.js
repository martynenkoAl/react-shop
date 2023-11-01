import React from 'react';
import GoodsItem from './GoodsItem';

export default function GoodsList(props) {
  const { goods = [], addToBasket = Function.prototype } = props;

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className='goods'>
      {goods.map((el) => {
        return <GoodsItem key={el.mainId} addToBasket={addToBasket} {...el} />;
      })}
    </div>
  );
}
