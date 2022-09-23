import React,{useState} from 'react'
import Pagination from "react-js-pagination";
import '../../css/paging.css';

const Paginations = ({page, count, setPage,postPerPage}) => {
  // const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };


  return (
    <>
        <Pagination
            activePage={page}
            itemsCountPerPage={5}
            totalItemsCount={count ? count : 0}
            pageRangeDisplayed={5}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={setPage}
        />
    </>
  )
}


export default Paginations