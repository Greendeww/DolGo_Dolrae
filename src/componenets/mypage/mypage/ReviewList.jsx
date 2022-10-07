import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { instance } from "../../../shared/Api";
import Paginations from "../../pagination/Paginations";
import MypgReview from "./MypgReview";


const ReviewList = () => {
  const navigate = useNavigate();

  const [list, setList] = useState([]);
  const [reviewList,setReviewList] = useState([...list].reverse())
  const [currentReview,setCurrnetReview] = useState([])
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState(1);
  const [postPerPage] = useState(3)
  const indexOfLastPost = page*postPerPage;
  const indexOfFirstPage = indexOfLastPost - postPerPage

  const getList = async () => {
    const res = await instance.get("/api/auth/comment/mypage");
    console.log(res.data);
    setList(res.data);
    setReviewList([...res?.data].reverse())
  };
  useEffect(() => {
    setCurrnetReview(reviewList.slice(indexOfFirstPage, indexOfLastPost))
  },[indexOfFirstPage,indexOfLastPost,page,list]);

  const handlePageChange = (page) => {
      setPage(page)
    }

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
    <StReviewList>
      <h2>내가 쓴 후기</h2>
      {currentReview.map((item, index) => (
        <MypgReview key={index} item={item}/>
      ))}
      <Paginations
        page={page}
        count={list.length}
        setPage={handlePageChange}
        postPerpage={3}
        />
    </StReviewList>
    </>
  );
};

export default ReviewList;

const StReviewList = styled.div`
  & h2 {
    color: #bfb8b8;
  }
`;

const Comment = styled.div`
  width: 410px;
  height: 60px;
  margin: 20px auto;
  background: #eef6fa;
  border-radius: 15px;
  display: flex;
  gap: 30px;

  & div {
    align-items: center;
    position: relative;
    left: 15px;
    top: 17px;
    font-size: 20px;
  }

  &:hover {
    cursor: pointer;
  }
`;
const CommetnList =styled.div`
  width: 410px;
  height: 60px;
  margin: 20px auto;
  background: #eef6fa;
  border-radius: 15px;
  display: flex;
  gap: 30px;
`