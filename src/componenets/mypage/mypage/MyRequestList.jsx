import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { instance } from "../../../shared/Api";
import Paginations from "../../pagination/Paginations";

const MyRequestList = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [request, setRequet] = useState([...list].reverse());
  const [currentRequest, setCurrnetRequest] = useState([]);
  const [page, setPage] = useState(1);
  const [postPerPage] = useState(3);
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPage = indexOfLastPost - postPerPage;

  const getList = async () => {
    // const res = await instance.get("/api/auth/comment/mypage");
    // console.log(res.data);
    // setList(res.data);
    // setRequet([...res?.data].reverse());
  };
  useEffect(() => {
    setCurrnetRequest(request.slice(indexOfFirstPage, indexOfLastPost));
  }, [indexOfFirstPage, indexOfLastPost, page, list]);

  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <StRequestList>
      <h2>요청한 글</h2>
      {currentRequest.map((request, idx) => (
        <Request
          key={idx}
          onClick={() => {
            navigate(``);
          }}
        >
          <p>{request.placeTitle}</p>
        </Request>
      ))}
      <Paginations
        page={page}
        count={list.length}
        setPage={handlePageChange}
        postPerpage={3}
      />
    </StRequestList>
  );
};

export default MyRequestList;

const StRequestList = styled.div`
  max-width: 428px;
  width: 100%;
  margin: 50px auto;
  padding-top: 10px;

  & h2 {
    color: #bfb8b8;
    margin-left: 10px;
  }
`;

const Request = styled.div`
  width: 90%;
  height: 55px;
  margin: 20px auto;
  background: #eef6fa;
  border-radius: 15px;
  gap: 15px;
  cursor: pointer;
  display: flex;

  & p {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 90%;
    font-size: 18px;
    height: 18px;
    font-weight: bold;
    padding-left: 10px;
    align-items: center;
    position: relative;
    left: 15px;
    top: 17px;
  }
`;
