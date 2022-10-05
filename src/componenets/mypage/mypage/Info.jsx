import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Info = () => {
  const navigate = useNavigate();

  const username = localStorage.getItem("username");
  const nickname = localStorage.getItem("nickname");

  return (
    <StInfo>
      <Email>
        <div>
          <h2>이메일</h2>
          <button onClick={() => navigate("/mypage/change")}>
            내 정보 변경
          </button>
        </div>
        <p>{username}</p>
      </Email>
      <Nickname>
        <h2>닉네임</h2>
        <div>
          <p>{nickname}</p>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>님</p>
        </div>
      </Nickname>
    </StInfo>
  );
};

export default Info;

const StInfo = styled.div`
  position: relative;
  top: 70px;
  height: 250px;
  background-color: #eef6fa;
  padding: 20px 30px;

  & button {
    width: 150px;
    height: 40px;
    background-color: #abd4e2;
    color: white;
    border-radius: 15px;
    border: none;
    font-weight: 700;
    font-size: 21px;
    margin-top: 15px;

    &:hover {
      cursor: pointer;
      background-color: #ffc0c0;
      border: none;
    }
  }
`;

const Email = styled.div`
  & div {
    display: flex;
    justify-content: space-between;
  }
`;

const Nickname = styled.div`
  margin-top: 50px;
  & div {
    display: flex;
    justify-content: space-between;
  }
`;
