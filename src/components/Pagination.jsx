import React from "react";

function Pagination({ currentPage, totalPage, setCurrentPage }) {
  return (
    <>
      <div className="flex justify-center">
        <button
          className=" text-3xl border-1 flex  bg-gray-300  "
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 0}
        >
          &larr;
        </button>
        {[...Array(totalPage).keys()].map((n) => {
          return (
            <button
              key={n}
              className={
                ` border-1 cursor-pointer m-1 p-2 ` +
                (currentPage === n ? "bg-gray-400 text-white" : "bg-white")
              }
              onClick={() => setCurrentPage(n)}
            >
              {n}
            </button>
          );
        })}
        <button
          className=" text-3xl border-1 flex  bg-gray-300  "
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPage - 1}
        >
          &rarr;
        </button>
      </div>
    </>
  );
}

export default Pagination;
