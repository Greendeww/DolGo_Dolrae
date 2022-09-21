import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { KAKAO_AUTH_URL } from "../shared/OAuth";

const Login = () => {
  const dispatch = useDispatch();

  const initialState = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState(initialState);

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    if (
      user.email === "" ||
      user.password === ""
    ) {
      alert("모든 항목을 입력해주세요.");
      e.preventDefault();
    } else {
      // await dispatch(__login(user));
      Navigate('/')
    }
  };

  // const onLoginBtnHandler = () => {
  //   if (login.email.trim() === "" || login.password.trim() === "")
  //   {return alert("이메일과 비밀번호를 입력하세요.")};
  //   if ( login.email && (sameIdList?.length === 0)) {
  //     return alert("회원가입 후 로그인이 가능합니다.")
  //   } else {
  //     // dispatch(__memberLogin(login));
  //     navigate('/');
  //     setLogin(initialState);
  //   }
  //   };

  return (
    <StLogin>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>
            <b>이메일</b>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={onChangeHandler}
              placeholder="이메일을 입력해주세요."
            />
          </label>
        </div>
        <div>
          <label>
            <b>비밀번호</b>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={onChangeHandler}
              placeholder="비밀번호를 입력해주세요."
            />
          </label>
        </div>
        <div>
            <button>로그인</button>
        </div>
      </form>

      <Social>
        <p> SNS 계정 사용하기</p>
        <div>
          <img
            src="https://contents-image.twayair.com/homepage/images/member/sns_c_kakao.png"
            alt=""
            onClick={() => {
              window.location.href = KAKAO_AUTH_URL;
            }}
          />
          <p> 카카오 </p>
        </div>
      </Social>

      <SignUp>
        <p>아직 돌고돌래 회원이 아니세요?</p>
        <Link to="/signup">
          <p>회원가입</p>
        </Link>
      </SignUp>
    </StLogin>
  );
};

export default Login;

const StLogin = styled.div`
  width: 428px;
  text-align: center;
  margin: 0 auto;
  padding: 60px;
  border: 1px solid gray;

  & div {
    margin-bottom: 10px;
  }

  & input {
    margin-left: 15px;
  }

  & button {
    background-color: #9797f5;
    color: white;
    border: none;
    width: 80px;
    margin: 20px 0;
    cursor: pointer;
  }
`;

const Social = styled.div`
  border: 1px solid gray;
  font-size: 15px;
  margin-bottom: 30px;

  & img,
  div > p {
    cursor: pointer;
  }
`;

const SignUp = styled.div`
  margin-top: 40px;
  border: 1px solid gray;
`;
