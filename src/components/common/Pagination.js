import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  const renderPaginationButtons = () => {
    const pageButtons = [];
    const visiblePageNumbers = [];

    // ... Pagination logic here ...

    return pageButtons;
  };

  return (
      <button
        className="w-48 py-4 px-8 rounded-full bg-white"
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
      >
        More
      </button>
  );
};

export default Pagination;
