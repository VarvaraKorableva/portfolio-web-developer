import React from 'react';
import './Pogination.css';

function Pogination({ currentPage, number, selectPage }) {
  const handleSelectPage = () => {
    selectPage(number);
  };

  return (
    <li className='pogination__item-btn'>
      <button
        onClick={handleSelectPage}
        className={currentPage === number ? 'pogination__btn_active' : 'pogination__btn'}
      >
        {number}
      </button>
    </li>
  );
}

export default Pogination;
