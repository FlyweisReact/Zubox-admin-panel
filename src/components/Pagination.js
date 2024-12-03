/** @format */

import React from "react";

const Pagination = ({
  setCurrentPage,
  currentPage,
  totalDocs,
  docsPerPage = 5,
}) => {
  const totalPages = Math.ceil(totalDocs / docsPerPage);
  const getPaginationButtons = () => {
    const buttons = [];

    if (totalPages <= 5) {
      // Display all pages if totalPages is less than or equal to 5
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(i);
      }
    } else {
      // Display pagination logic with ellipsis for larger page sets
      if (currentPage <= 3) {
        buttons.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        buttons.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        buttons.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return buttons;
  };

  const handlePageClick = (page) => {
    if (page === "...") return; // Ignore clicks on ellipsis
    setCurrentPage(page); // Update current page
  };

  return (
    <div className="pagination">
      {getPaginationButtons()?.map((page, index) => (
        <button
          key={index}
          className={page === currentPage ? "active" : ""}
          onClick={() => handlePageClick(page)}
          disabled={page === "..."}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
