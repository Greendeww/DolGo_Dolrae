import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { instance } from "../../../shared/Api";
import Paginations from "../../pagination/Paginations";
import MypgReview from "./MypgReview";

const ReviewList = () => {
  const [list, setList] = useState([]);
  const [reviewList, setReviewList] = useState([...list].reverse());
  const [currentReview, setCurrnetReview] = useState([]);
  const [page, setPage] = useState(1);
  const [postPerPage] = useState(3);
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPage = indexOfLastPost - postPerPage;

  const getList = async () => {
    const res = await instance.get("/api/auth/comment/mypage");
    console.log(res.data);
    setList(res.data);
    setReviewList([...res?.data].reverse());
  };
  useEffect(() => {
    setCurrnetReview(reviewList.slice(indexOfFirstPage, indexOfLastPost));
  }, [indexOfFirstPage, indexOfLastPost, page, list]);

  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <StReviewList>
      <h2>작성한 후기</h2>
      {currentReview.map((item, index) => (
        <MypgReview key={index} item={item} />
      ))}
      <Paginations
        page={page}
        count={list.length}
        setPage={handlePageChange}
        postPerpage={3}
      />
    </StReviewList>
  );
};

export default ReviewList;

const StReviewList = styled.div`
  max-width: 428px;
  width: 100%;
  margin: 50px auto;

  & h2 {
    color: #bfb8b8;
    margin-left: 10px;
  }
`;
