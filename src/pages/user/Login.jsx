import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { KAKAO_AUTH_URL } from "../../shared/OAuth";
import Header from "../../componenets/header/Header";
import kakao from "../../assert/login/kakao_login_medium_wide.png";
import Swal from "sweetalert2";
import { instance } from "../../shared/Api";
import { useRef } from "react";
import { setCookie } from "../../shared/Cookie";

const Login = () => {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // console.log(usernameRef.current.value)
    const user = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    // console.log(user);
    if (usernameRef.current.value === "" || passwordRef.current.value === "") {
      alert("모든 항목을 입력해주세요.");
      return;
    } else {
      try {
        const response = await instance.post("/api/member/login", user);
        setCookie("ACCESS_TOKEN", response.headers.authorization, 0.5);
        setCookie("REFRESH_TOKEN", response.headers.refreshtoken, 0.5);

        localStorage.setItem("ACCESS_TOKEN", response.headers.authorization);
        localStorage.setItem("REFRESH_TOKEN", response.headers.refreshtoken);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("nickname", response.data.nickname);

        alert(`${response.data.nickname}님 환영합니다.`);
        navigate(-1);
      } catch (error) {
        alert("이메일 또는 비밀번호를 확인해주세요.");
      }
    }
  };

  return (
    <St>
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
                  type="text"
                  placeholder="이메일을 입력해주세요."
                  ref={usernameRef}
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
                  placeholder="비밀번호를 입력해주세요."
                  ref={passwordRef}
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
                alt=""
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
            <b onClick={() => navigate("/signup")}>회원가입 ＞</b>
          </p>
        </SignUp>
      </StLogin>
    </St>
  );
};

export default Login;

const St = styled.div`
  max-width: 428px;
  width: 100%;
  margin: auto;
`;

const StLogin = styled.div`
  vertical-align: middle;
  padding-top: 120px;

  & p {
    margin-bottom: 10px;
  }
  & input {
    width: 98%;
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
    width: 95%;
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
    width: 95%;
    height: 50px;

    &:hover {
      cursor: pointer;
    }
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
    cursor: pointer;
  }
`;
