import React, { useContext } from 'react';
import { ShopContext } from '../context';

export default function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    price: { regularPrice },
    displayAssets: [{ full_background }],
  } = props;

  const { addToBasket } = useContext(ShopContext);

  return (
    <div className='card'>
      <div className='card-image waves-effect waves-block waves-light'>
        {full_background !== 'N/A' ? (
          <img className='activator' alt={displayName} src={full_background} />
        ) : (
          <img
            className='activator'
            alt={displayName}
            src={`https://placehold.co/300x450?text=${displayName}`}
          />
        )}
      </div>
      <div className='card-content'>
        <span className='card-title activator grey-text text-darken-4'>
          {displayName}
        </span>
        <p>{displayDescription}</p>
      </div>
      <div className='card-action'>
        <button
          className='btn'
          onClick={() =>
            addToBasket({
              mainId,
              displayName,
              regularPrice,
            })
          }
        >
          Купить
        </button>
        <span className='right price'>{regularPrice} руб.</span>
      </div>
    </div>
  );
}
