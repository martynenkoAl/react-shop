import React, { useEffect } from 'react';

export default function Alert(props) {
  const { displayName = '', closeAlert = Function.prototype } = props;

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
