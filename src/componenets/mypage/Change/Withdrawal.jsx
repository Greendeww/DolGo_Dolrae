import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { instance } from "../../../shared/Api";
import { useRef } from "react";

const Withdrawal = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const memberOutRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const req = {
      memberOut: memberOutRef.current.value,
      email: username,
    };
    console.log(req);
    if (
      memberOutRef.current.value !== "회원탈퇴를 동의합니다" ||
      memberOutRef.current.value === ""
    ) {
      alert("위 문구를 올바르게 따라 작성해주세요.");
      return;
    } else {
      try {
        const res = await instance.post("/api/auth/member/memberout", req);
        alert(res.data);
        console.log(res);
        navigate(-1);
      } catch (error) {
        alert("'.'은 포함되지 않습니다.");
      }
    }
  };

  return (
    <StWithdrawal>
      <h2>회원탈퇴</h2>
      <p>회원탈퇴를 동의합니다</p>
      <input placeholder="위 문구를 따라 작성해주세요." ref={memberOutRef} />
      <button onClick={onSubmitHandler}>탈퇴하기</button>
    </StWithdrawal>
  );
};

export default Withdrawal;

const StWithdrawal = styled.div`
  margin: 20px auto;
  width: 380px;
  padding-top: 30px;
  padding-bottom: 30px;

  & p {
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 10px;
    font-size: 18px;
  }

  & input {
    width: 350px;
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
