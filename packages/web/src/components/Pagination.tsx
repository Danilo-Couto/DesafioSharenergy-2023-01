import React from 'react';
import styles from '../styles/users.module.css';

function Pagination ({ totalPages, handleClick }) {
  const pages = [...Array(totalPages).keys()].map(number => number + 1);

  return (
    <div className="numbers">
      {pages.map(number => (
        <a className={styles.pagination}
          key={number}
          // href=""
          onClick={() => handleClick(number)}
          // className={`${page === number && 'active'}`}
        >
          {number}
        </a>
      ))}
    </div>
  );
};

export default Pagination;
