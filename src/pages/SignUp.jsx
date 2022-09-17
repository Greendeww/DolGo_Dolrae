import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __signUp, __emailCheck } from "../redux/modules/user";

const SignUp = () => {
  const dispatch = useDispatch();

  const initialState = {
    email: "",
    password: "",
    passwordConfirm: "",
    nickname: "",
  };

  const [user, setUser] = useState(initialState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(__signUp(user));
  };

  const onIdCheckHandler = (e) => {
    e.preventDefault();
    dispatch(__emailCheck(user.email));
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <ul>
        <li>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={onChangeHandler}
              placeholder="Email을 입력하세요."
              required
            />{" "}
            <input 
            type="button"
            onClick={onIdCheckHandler}
            />
          </label>
        </li>
        <li>
          <label>
            PW
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={onChangeHandler}
              placeholder="비밀번호를 입력하세요."
              required
            />
          </label>
        </li>
        <li>
          <label>
            PW 확인
            <input
              type="password"
              name="passwordConfirm"
              value={user.passwordConfirm}
              onChange={onChangeHandler}
              placeholder="비밀번호를 다시 입력하세요."
              required
            />
          </label>
        </li>
        <li>
          <label>
            Nickname
            <input
              type="text"
              name="nickname"
              value={user.nickname}
              onChange={onChangeHandler}
              placeholder="닉네임을 입력하세요."
              required
            />
          </label>
        </li>
      </ul>
      <button>이전으로</button>
      <button>가입하기</button>
    </form>
  );
};

export default SignUp;
