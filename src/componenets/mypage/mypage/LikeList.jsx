import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { instance } from "../../../shared/Api";
import Like from '../../like/Like';

const LikeList = () => {
  const navigate = useNavigate();

  const [list, setList] = useState([]);

  const getList = async () => {
    const res = await instance.get("/api/auth/place/mypage");
    console.log(res.data);
    setList(res.data);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <StLikeList>
      <h2>찜 목록</h2>
      <div>
        {list.map((item) => (
          <div key={item.id}>
            <img
              alt=""
              src={item.image}
              onClick={() => navigate(`/detail/${item.id}`)}
            />
            <Title>
              <p>{item.title}</p>
              <span><Like id={item.id}/></span>
            </Title>
          </div>
        ))}
      </div>
    </StLikeList>
  );
};

export default LikeList;

const StLikeList = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  & h2 {
    color: #bfb8b8;
  }

  & img {
    width: 100%;
    height: 300px;
    &:hover {
      cursor: pointer;
    }
  }

  & div > div {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  display: flex;
  font-weight: 900;
  font-size: 23px;
  justify-content: space-between;
  margin-top: 15px;
  position: relative;
  left: 15px;

  & span {
    font-weight: 700;
    font-size: 40px;
    color: #ff8585;
    position: relative;
    top: -5px;
    right: 15px;

    &:hover {
      cursor: pointer;
    }
  }
`;
