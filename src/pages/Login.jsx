import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { KAKAO_AUTH_URL } from "../shared/OAuth";
import { logout, __login, __logout } from "../redux/modules/user";
import Header from "../componenets/header/Header";
import kakao from "../assert/header/kakao_login_medium_wide.png";
import Swal from 'sweetalert2'


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    username: "",
    password: "",
  };

  const [user, setUser] = useState(initialState);

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (user.username === "" || user.password === "") {
      alert("모든 항목을 입력해주세요.");
      e.preventDefault();
    } else {
      dispatch(__login(user));
      Navigate("/");
    }
  };
  

  return (
    <StLogin_>
      <Header />
      <StLogin>
        <form onSubmit={onSubmitHandler}>
          <Inputs>
            <Input>
              <label>
                <p>
                  <b>이메일</b>
                </p>
                <input
                  type="email"
                  name="username"
                  value={user.username}
                  onChange={onChangeHandler}
                  placeholder="이메일을 입력해주세요."
                />
              </label>
            </Input>
            <Input>
              <label>
                <p>
                  <b>비밀번호</b>
                </p>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={onChangeHandler}
                  placeholder="비밀번호를 입력해주세요."
                />
              </label>
            </Input>
          </Inputs>
          <Buttons>
            <div>
              <button>로그인</button>
            </div>

            <Social>
              <img
                src={kakao}
                onClick={() => {
                  window.location.href = KAKAO_AUTH_URL;
                }}
              />
            </Social>
          </Buttons>
        </form>

        <SignUp>
          <p>아직 돌고돌래 회원이 아니세요?</p>
          <p>
            <b onClick={() => navigate("/signup")}>회원가입 ></b>
          </p>
        </SignUp>
        {/* <button onClick={() => dispatch(__logout())}>로그아웃</button> */}
      </StLogin>
    </StLogin_>
  );
};

export default Login;

const StLogin_ = styled.div`
  width: 428px;
  margin: 0 auto;
`;

const StLogin = styled.div`
  & input {
    width: 373px;
    height: 52px;
    background-color: rgba(172, 212, 228, 0.35);
    border-radius: 15px;
    border: none;
    padding-left: 10px;
  }

  & button {
    background-color: rgba(121, 185, 211, 0.62);
    color: white;
    border: none;
    border-radius: 12px;
    width: 370px;
    height: 50px;
    cursor: pointer;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    display: block;
    margin: 0 auto;
  }
`;

const Input = styled.div`
  display: block;
  margin: 40px 20px;
`;

const Inputs = styled.div`
  margin: 100px 0;
`;

const Social = styled.div`
  & img {
    display: block;
    margin: 20px auto;
    width: 370px;
    height: 50px;
  }
`;

const Buttons = styled.div`
  margin: 100px 0;
`;

const SignUp = styled.div`
  margin: 100px 0;
  text-align: center;

  & p {
    color: #a19a9a;
  }

  & b {
    &:hover {
      cursor: pointer;
    }
  }
`;