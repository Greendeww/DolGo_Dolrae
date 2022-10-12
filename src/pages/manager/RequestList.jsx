import React from "react";
import styled from "styled-components";
import Header from "../../componenets/header/Header";
import { useState, useEffect } from "react";
import { getApi } from "../../shared/Api";
import { useNavigate } from "react-router-dom";
import PaginationRequest from "../../componenets/pagination/PaginationRequest";

const RequestList = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [reviewList, setReviewList] = useState([...list].reverse());
  const [currentReview, setCurrnetReview] = useState([]);
  const [page, setPage] = useState(1);
  const [postPerPage] = useState(5);
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPage = indexOfLastPost - postPerPage;

  const getList = async () => {
    const response = await getApi("/api/auth/order");
    // console.log(response.data);
    setList(response.data);
    setReviewList([...response?.data].reverse());
    console.log(response);
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
    <StAdministrator>
      <Header />
      <Container>
        <Title>요청 목록</Title>
        {currentReview.map((item) => {
          return (
            <Contents
              key={item.id}
              onClick={() => navigate(`/request/detail/${item.id}`)}
            >
              <p>{item.createdAt.substr(0, 10)}</p>
              <p style={{ width: "170px" }}>{item.title}</p>
              {item.state === false ? (
                <p style={{ color: "red" }}> false </p>
              ) : (
                <p style={{ color: "green" }}> true </p>
              )}
            </Contents>
          );
        })}
      </Container>
      <PaginationRequest
        page={page}
        count={list.length}
        setPage={handlePageChange}
      />
    </StAdministrator>
  );
};

export default RequestList;

const StAdministrator = styled.div`
  max-width: 428px;
  width: 100%;
  margin: 0 auto;
  color: #727272;
`;

const Container = styled.div`
  padding-top: 160px;
`;

const Title = styled.div`
  font-size: 29px;
  line-height: 40px;
  text-align: center;
  color: #bfb8b8;
`;

const Contents = styled.div`
  width: 90%;
  height: 35px;
  background-color: #eef6fa;
  border-radius: 20px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  cursor: pointer;
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 10px;

  & p {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
