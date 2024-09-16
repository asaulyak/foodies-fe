import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import clsx from 'clsx';

import css from './Pagination.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const Pagination = ({ total, limit = 10, onPageChange }) => {
  const [maxVisibleButtons, setMaxVisibleButtons] = useState(3);
  const [searchParams, setSearchParams] = useSearchParams();
  const totalPages = Math.ceil(total / limit);
  const currentPage = parseInt(searchParams.get('page')) || 1;

  const getMaxVisibleButtons = () => {
    const paginationContainer = document.querySelector(
      `.${css['pagination-container']}`
    );
    const rootStyles = window.getComputedStyle(paginationContainer);
    const maxButtons = parseInt(
      rootStyles.getPropertyValue('--max-visible-buttons')
    );
    return maxButtons;
  };

  // Update maxVisibleButtons on initial load and on window resize
  useEffect(() => {
    if (!total || total <= limit) {
      return;
    }

    setMaxVisibleButtons(getMaxVisibleButtons());

    const handleResize = () => {
      setMaxVisibleButtons(getMaxVisibleButtons());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Automatically redirect the user if the current page becomes invalid
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      searchParams.set('page', String(totalPages));
      setSearchParams(searchParams);
    }
  }, [currentPage, totalPages, setSearchParams]);

  if (!total || total <= limit) {
    return <></>;
  }

  const handlePageQuery = page => {
    if (page >= 1 && page <= totalPages) {
      searchParams.set('page', String(page));

      setSearchParams(searchParams);

      if (onPageChange) {
        onPageChange();
      }
    }
  };

  const handlePagination = step => {
    const newPage = currentPage + step;
    if (newPage >= 1 && newPage <= totalPages) {
      handlePageQuery(newPage);
    }
  };

  const renderPageNumbers = () => {
    let startPage = Math.max(
      1,
      currentPage - Math.floor(maxVisibleButtons / 2)
    );
    let endPage = startPage + maxVisibleButtons - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, totalPages - maxVisibleButtons + 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageQuery(i)}
          className={clsx(css.btn, { [css.active]: currentPage === i })}
          aria-current={currentPage === i ? 'page' : undefined}
          aria-label={`Go to page ${i}`}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div
      className={css['pagination-container']}
      role="navigation"
      aria-label="Pagination Navigation"
    >
      {/* Prev page button */}
      <button
        onClick={() => {
          handlePagination(-1);
        }}
        className={clsx(css.btn, { [css.disabled]: currentPage === 1 })}
        aria-disabled={currentPage === 1}
        aria-label="Go to previous page"
      >
        <FaChevronLeft />
      </button>

      {/* Numeric Page Buttons */}
      {renderPageNumbers()}

      {/* Next page button */}
      <button
        onClick={() => {
          handlePagination(1);
        }}
        className={clsx(css.btn, {
          [css.disabled]: currentPage === totalPages,
        })}
        aria-disabled={currentPage === totalPages}
        aria-label="Go to next page"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
