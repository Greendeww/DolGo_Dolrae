import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { instance } from "../../../shared/Api";

const Nickname = () => {
  const navigate = useNavigate();
  const nickname = localStorage.getItem("nickname");

  const [changeNickname, setChangeNickname] = useState({ nickname: "" });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (changeNickname.nickname === "") {
      alert("변경할 닉네임을 입력해주세요.");
      e.preventDefault();
    } else {
      const res = await instance.put(
        "/api/auth/member/updatenickname",
        changeNickname
      );
      // console.log(res)
      localStorage.setItem("nickname", changeNickname.nickname);
      navigate("/mypage");
    }
  };

  return (
    <StNickname>
      <h2>닉네임 변경</h2>
      <div>
        <input
          placeholder={nickname}
          name="nickname"
          value={changeNickname.nickname}
          onChange={(e) => setChangeNickname({ nickname: e.target.value })}
        />
        <p>님</p>
      </div>
      <button onClick={onSubmitHandler}>변경하기</button>
    </StNickname>
  );
};

export default Nickname;

const StNickname = styled.div`
  padding-top: 100px;
  margin: 0 auto;
  width: 380px;

  & div {
    display: flex;
  }

  & input {
    display: flex;
    margin: 0 auto;
    width: 320px;
    height: 52px;
    border: none;
    border-radius: 15px;
    padding-left: 15px;
  }

  & p {
    font-weight: 900;
    font-size: 23px;
    /* margin-left: 15px; */
    margin-top: 10px;
    padding-right: 5px;
  }

  & button {
    display: flex;
    margin: 0 auto;
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
