import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __signUp, __emailCheck } from "../redux/modules/user";
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

  // const {users} = useSelector((state) => state.user.nickname);
  // const nicknameList = users.nickname

  const initialState = {
    email: "",
    password: "",
    passwordConfirm: "",
    nickname: "",
  };

  const [user, setUser] = useState(initialState);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (
      user.email === "" ||
      user.password === "" ||
      user.passwordConfirm === "" ||
      user.nickname === ""
    ) {
      alert("모든 항목을 입력해주세요.");
    }

    // await dispatch(__signUp(user))

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
  const emailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const passwordRegex = /^(?=.*[a-zA-z])(?=.*[0-9]).{8,32}$/;

  return (
    <StSignUp>
      <form onSubmit={onSubmitHandler}>
        <ul>
          <li>
            <label>
              <b>이메일</b>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={(e) => {
                  onChangeHandler(e);
                }}
                placeholder="Email을 입력하세요."
              />
              <div>
                {user.email === "" ? null : emailRegex.test(user.email) ? (
                  <p style={{ color: "green" }}>올바른 이메일 형식입니다.</p>
                ) : (
                  <p style={{ color: "red" }}>이메일 형식이 맞지 않습니다.</p>
                )}
              </div>
              {/* <input 
            type="button" 
            value="중복확인" 
            onClick={onIdCheckHandler} /> */}
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
                  숫자, 영문자, 특수문자 조합으로 8자리 이상 입력하세요.
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
          <li>
            <label>
              <b>닉네임</b>
              <input
                type="text"
                name="nickname"
                value={user.nickname}
                onChange={onChangeHandler}
                placeholder="닉네임을 입력하세요."
              />
              {/* <div>
                {user.nickname === "" ? null : nicknameList.find(
                    (nickname) => nickname === user.nickname
                  ) ? (
                  <p style={{ color: "red" }}>이미 존재하는 닉네임입니다.</p>
                ) : (
                  <p style={{ color: "green" }}>사용 가능한 닉네임입니다.</p>
                )}
              </div> */}
            </label>
          </li>
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
  padding: 60px;
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
