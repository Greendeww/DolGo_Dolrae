import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __signUp, __emailCheck, signUp } from "../redux/modules/user";
import { useNavigate } from "react-router-dom";
import nextId from "react-id-generator";
import axios from "axios";
import { instance } from "../shared/Api";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const initialState = {
    username: "",
    password: "",
    passwordConfirm: "",
    // nickname: "",
  };

  const [user, setUser] = useState(initialState);

  const [idCheck, setIdCheck] = useState({ username: "" });
  console.log(idCheck);

  const emailCheckHandler = (e) => {
    dispatch(__emailCheck(idCheck));
  };

  const emailChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setIdCheck({ ...idCheck, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (
      user.username === "" ||
      user.password === "" ||
      user.passwordConfirm === "" ||
      user.nickname === ""
    ) {
      alert("모든 항목을 입력해주세요.");
    }

    await dispatch(signUp(user));
    setUser(initialState);

    // const { data } = await instance.post("api/member/signup", user);
    // // console.log(data);
    // if (data.success) {
    //   alert("회원가입이 완료되었습니다. 로그인 후 이용바랍니다.");
    //   navigate("/");
    // } else {
    //   window.alert(data.error.message);
    // }
    // setUser(initialState);
  };

  // 정규표현식 선언
  const emailRegex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/;

  return (
    <StSignUp>
      <form onSubmit={onSubmitHandler}>
        <ul>
          <li>
            <label>
              <b>이메일</b>
              <input
                type="username"
                name="username"
                value={user.username}
                onChange={(e) => {
                  onChangeHandler(e);
                  emailChangeHandler(e);
                }}
                placeholder="Email을 입력하세요."
              />
              <Check
                type="button"
                value="중복확인"
                onClick={emailCheckHandler}
              />
              <div>
                {user.username === "" ? null : emailRegex.test(
                    user.username
                  ) ? (
                  <p style={{ color: "green" }}>올바른 이메일 형식입니다.</p>
                ) : (
                  <p style={{ color: "red" }}>이메일 형식이 맞지 않습니다.</p>
                )}
              </div>
            </label>
          </li>
          <li>
            <label>
              <b>비밀번호</b>
              <input
                type="text"
                name="password"
                value={user.password}
                onChange={(e) => {
                  onChangeHandler(e);
                }}
                placeholder="비밀번호를 입력하세요."
              />
              {user.password === "" ? null : passwordRegex.test(
                  user.password
                ) ? (
                <p style={{ color: "green" }}>안전한 비밀번호예요!</p>
              ) : (
                <p style={{ color: "red" }}>
                  숫자, 영문자 조합으로 8자리 이상 입력하세요.
                </p>
              )}
            </label>
          </li>
          <li>
            <label>
              <b>비밀번호</b>
              <input
                type="text"
                name="passwordConfirm"
                value={user.passwordConfirm}
                onChange={onChangeHandler}
                placeholder="비밀번호를 다시 입력하세요."
              />
              <div>
                {user.passwordConfirm === "" ? null : user.password ===
                  user.passwordConfirm ? (
                  <p style={{ color: "green" }}>비밀번호가 일치합니다.</p>
                ) : (
                  <p style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</p>
                )}
              </div>
            </label>
          </li>
          {/* <li>
            <label>
              <b>닉네임</b>
              <input
                type="text"
                name="nickname"
                value={user.nickname}
                onChange={onChangeHandler}
                placeholder="닉네임을 입력하세요."
              />
            </label>
          </li> */}
        </ul>
        <Buttons>
          <input
            type="button"
            value="취소"
            onClick={() => navigate("/login")}
          />
          <input type="submit" value="가입하기" />
        </Buttons>
      </form>
    </StSignUp>
  );
};

export default SignUp;

const StSignUp = styled.div`
  width: 428px;
  text-align: center;
  margin: 0 auto;
  padding: 60px 20px;
  border: 1px solid gray;
  & li,
  ul {
    list-style: none;
  }

  & form {
    padding: 40px;
  }

  & input {
    margin: 20px 20px;
  }

  & p {
    font-size: 12px;
  }
`;

const Buttons = styled.div`
  & input {
    background-color: #9797f5;
    color: white;
    border: none;
    width: 80px;
    height: 25px;
    margin: 20px;
    cursor: pointer;
  }
`;

const Check = styled.input`
  width: 80px;
  background-color: #9797f5;
  color: white;
  border: none;
  height: 25px;
  cursor: pointer;
`;
