import React from 'react';

export default function Pagination({
  totalGoods,
  goodsPerPage,
  handlePagination,
  nextPage,
  prevPage,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalGoods / goodsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className='pagination'>
      {currentPage !== 1 && (
        <li onClick={prevPage}>
          <a href='#!'>
            <i className='material-icons'>chevron_left</i>
          </a>
        </li>
      )}
      {pageNumbers.map((num) => {
        return (
          <li
            key={num}
            onClick={() => handlePagination(num)}
            className={`${currentPage === num ? 'active teal lighten-3' : ''}`}
          >
            <a href='#!'>{num}</a>
          </li>
        );
      })}
      {currentPage !== Math.ceil(totalGoods / goodsPerPage) && (
        <li className='waves-effect' onClick={nextPage}>
          <a href='#!'>
            <i className='material-icons'>chevron_right</i>
          </a>
        </li>
      )}
    </ul>
  );
}
