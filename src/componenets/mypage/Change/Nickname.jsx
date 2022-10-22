import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { instance } from "../../../shared/Api";

const Nickname = () => {
  const navigate = useNavigate();

  // localStorage로부터 가져온 "nickname"
  const nickname = localStorage.getItem("nickname");

  // input에 입력한 값을 onChange를 통해 state에 저장
  const [changeNickname, setChangeNickname] = useState({ nickname: "" });

  // 변경하기 버튼을 클릭했을 때 서버로 변경값 전송
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // input이 비어있으면 alert
    if (changeNickname.nickname === "") {
      alert("변경할 닉네임을 입력해주세요.");
      e.preventDefault();
    } else {
      // 변경여부 재확인
      if (
        window.confirm(
          `정말 「${changeNickname.nickname}」로 변경하시겠습니까?`
        )
      ) {
        // 동의하면 서버로 값 전송, storage에 저장, mypage로 이동, 변경값 alert
        const res = await instance.put(
          "/api/auth/member/updatenickname",
          changeNickname
        );
        localStorage.setItem("nickname", changeNickname.nickname);
        navigate("/mypage");
        alert(`닉네임이 「${changeNickname.nickname}」로 변경되었습니다.`);
      }
      // 동의하지 않을 시, alert
      else {
        alert("닉네임 변경이 취소되었습니다.");
      }
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
  padding-top: 150px;
  margin: 0 auto;
  max-width: 428px;
  width: 100%;

  & h2 {
    margin-left: 20px;
  }

  & div {
    display: flex;
    width: 95%;
  }

  & input {
    display: flex;
    margin: 0 auto;
    width: 80%;
    height: 52px;
    border: none;
    border-radius: 15px;
    padding-left: 15px;
  }

  & p {
    font-weight: bold;
    font-size: 23px;
    margin-top: 15px;
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
    cursor: pointer;
  }
`;
