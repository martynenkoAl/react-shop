import React, { useEffect, useContext } from 'react';
import { ShopContext } from '../context';

export default function Alert() {
  const { displayName = '', closeAlert = Function.prototype } =
    useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [displayName]);

  return (
    <div id='toast-container'>
      <div className='toast'>{displayName} добавлен в корзину</div>
    </div>
  );
}
