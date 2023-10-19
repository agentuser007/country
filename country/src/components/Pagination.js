import React from 'react';
import ReactPaginate from "react-paginate";

// Pagination component
const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = Math.ceil(totalItems / itemsPerPage);


//   for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
//     pageNumbers.push(i);
//   }

  return (
    // <nav>
    //   <ul className="pagination">
    //     {pageNumbers.map(number => (
    //       <li key={number} className="page-item">
    //         <button onClick={() => paginate(number)} className="page-link">
    //           {number}
    //         </button>
    //       </li>
    //     ))}
    //   </ul>
    // </nav>
    <ReactPaginate
        breakLabel="..."
        nextLabel="›"
        onPageChange={(e) => paginate(e.selected + 1)}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageNumbers}
        previousLabel="‹"
        renderOnZeroPageCount={null}
        containerClassName="justify-content-center pagination"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active"
        disabledClassName="disabled"
  />
  );
};

export default Pagination;
