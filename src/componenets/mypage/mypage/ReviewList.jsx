import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { instance } from "../../../shared/Api";

const ReviewList = () => {
  const navigate = useNavigate();

  const [list, setList] = useState([]);

  const getList = async () => {
    const res = await instance.get("/api/auth/comment/mypage");
    console.log(res.data);
    setList(res.data);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <StReviewList>
      <h2>내가 쓴 후기</h2>
      {list.map((item, index) => (
        <Comment
          key={index}
          onClick={() => navigate(`/detail/${item.place_id}`)}
        >
          <div style={{ fontWeight: "bold" }}>{item.placeTitle}</div>
          <div>{item.title}</div>
        </Comment>
      ))}
    </StReviewList>
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
    top: 13px;
    font-size: 20px;
  }

  &:hover {
    cursor: pointer;
  }
`;
