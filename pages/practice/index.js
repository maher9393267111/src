
import React, { useState } from "react";
import JsonData from "./data.json";
import ReactPaginate from "react-paginate";
import './index.css'

function Practice() {
  const [users, setUsers] = useState(JsonData.slice(0, 50));  // slice(0, 50) is used to show only 50 users
  const [pageNumber, setPageNumber] = useState(0);   // pageNumber is used to show the current page

  const usersPerPage = 10;   // usersPerPage is used to show 10 users per page
  const pagesVisited = pageNumber * usersPerPage;  // pagesVisited is used to show the current page  2 *10 = 20

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)  // slice from  pagenumber well be +++  1 2 when pageNumber change change pages visited and change slice from
    .map((user) => {
      return (
        <div className="user">
          <h3>{user.firstName}</h3>
          <h3>{user.lastName}</h3>
          <h3>{user.email}</h3>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

console.log('pageNumber', pageNumber, 'pagesVisited', pagesVisited, 'usersPerPage', usersPerPage, 'pageCount', pageCount);


  return (
    <div className="App">
      {displayUsers}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default Practice;