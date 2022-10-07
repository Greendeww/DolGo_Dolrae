import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { instance } from "../../../shared/Api";

const Withdrawal = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const [req, setReq] = useState({
    username: username,
    content: "",
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (req.content !== "회원탈퇴를 동의합니다." || req.content === "") {
      alert("위 문구를 올바르게 따라 작성해주세요.");
      e.preventDefault();
    } else {
      const res = await instance.put("/api/auth/member/withdrawal", req);
      console.log(res);
      navigate("-1");
    }
  };

  return (
    <StWithdrawal>
      <h2>회원탈퇴</h2>
      <p>회원탈퇴를 동의합니다.</p>
      <input
        placeholder="위 문구를 따라 작성해주세요."
        name="content"
        value={req.content}
        onChange={(e) => {
          setReq({ ...req, content: e.target.value });
        }}
      />
      <button onClick={onSubmitHandler}>탈퇴하기</button>
    </StWithdrawal>
  );
};

export default Withdrawal;

const StWithdrawal = styled.div`
  max-width: 428px;
  width: 100%;
  margin: 50px 30px;
  padding-top: 10px;

  & p {
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 10px;
    font-size: 18px;
  }

  & input {
    width: 343px;
    height: 52px;
    border: none;
    border-radius: 15px;
    padding-left: 15px;
  }

  & div {
    display: flex;
  }

  & button {
    display: flex;
    width: 127px;
    height: 43px;
    font-weight: 700;
    font-size: 23px;
    color: white;
    background: #ffc0c0;
    border: none;
    border-radius: 15px;
    margin: 30px auto;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
    }
  }
`;
