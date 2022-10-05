import React, { useState, useSelector } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __signUp, __emailCheck, signUp } from "../../redux/modules/user";
import { useNavigate } from "react-router-dom";
import Header from "../../componenets/header/Header";
import { __submitCode } from "../../redux/modules/user";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    username: "",
    password: "",
    passwordConfirm: "",
  };

  const [user, setUser] = useState(initialState);

  // 이메일 인증을 위한 데이터
  const [emailCheck, setEmailCheck] = useState({ username: "" });

  const emailChangeHandler = (e) => {
    setEmailCheck({ username: e.target.value });
  };

  // 이메일 인증버튼 클릭 여부
  const [confirmClick, setConfirmClick] = useState(false);

  // 이메일 인증코드
  const [code, setCode] = useState({ code: "" });
  console.log(code);

  const codeChangeHandler = (e) => {
    setCode({ code: e.target.value });
  };

  const codeSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(__submitCode(code));
  };

  // input에 입력한 값을 state로 저장
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // email 중복확인을 위한 handler
  const emailCheckHandler = (e) => {
    e.preventDefault();
    if (user.username === "" || emailRegex.test(user.username) === false) {
      alert("올바른 이메일을 입력해주세요.");
    } else {
      setConfirmClick(true);
      dispatch(__emailCheck(emailCheck));
    }
  };

  console.log(confirmClick);

  // const  emailOk  = useSelector((state) => state.user.emailOk);
  // console.log(emailOk);

  // 회원가입 정보를 전송하기 위한 handler
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (confirmClick === false) {
      alert("이메일 인증을 해주세요.");
      return false;
    }
    // else if (
    //         emailOk === "false"
    // ){
    //   alert("인증코드가 올바르지 않습니다.");
    //   return false;
    // }
    else if (
      user.username === "" ||
      user.password === "" ||
      user.passwordConfirm === ""
    ) {
      alert("모든 항목을 입력해주세요.");
      return false;
    }

    await dispatch(signUp(user));
    setUser(initialState);
    navigate("/login");

    // const { data } = await instance.post("api/member/signup", user);
    // // console.log(data);
    // if (data.success) {
    //   alert("회원가입이 완료되었습니다. 로그인 후 이용바랍니다.");    //   navigate("/");
    // } else {
    //   window.alert(data.error.message);
    // }
    // setUser(initialState);
  };

  // 이메일, 비밀번호 정규표현식
  const emailRegex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/;

  return (
    <StSignUp>
      <Header />
      <form onSubmit={onSubmitHandler}>
        <Email>
          <label>
            <div>
              <b>이메일</b>
            </div>
            <div>
              <input
                type="username"
                name="username"
                value={user.username}
                onChange={(e) => {
                  onChangeHandler(e);
                  emailChangeHandler(e);
                }}
                placeholder="이메일을 입력해주세요."
              />
              <button onClick={emailCheckHandler}>인증하기</button>
            </div>
            <div>
              {user.username === "" ? null : emailRegex.test(user.username) ? (
                <p style={{ color: "green" }}>올바른 이메일 형식입니다.</p>
              ) : (
                <p style={{ color: "red" }}>이메일 형식이 맞지 않습니다.</p>
              )}
            </div>
            {confirmClick === false ? null : (
              <EmailConfirm>
                <input
                  placeholder="인증번호를 입력해주세요."
                  name="code"
                  value={code.code}
                  onChange={(e) => {
                    codeChangeHandler(e);
                  }}
                />
                <button onClick={codeSubmitHandler}>확인</button>
              </EmailConfirm>
            )}
          </label>
        </Email>
        <Password>
          <label>
            <div>
              <b>비밀번호</b>
            </div>
            <div>
              <input
                type="text"
                name="password"
                value={user.password}
                onChange={(e) => {
                  onChangeHandler(e);
                }}
                placeholder="숫자, 영문자를 혼용하여 8자리 이상 입력해주세요."
              />
            </div>
            <div>
              {user.password === "" ? null : passwordRegex.test(
                  user.password
                ) ? (
                <p style={{ color: "green" }}>안전한 비밀번호예요!</p>
              ) : (
                <p style={{ color: "red" }}>
                  숫자, 영문자 조합으로 8자리 이상 입력하세요.
                </p>
              )}
            </div>
          </label>
        </Password>
        <PasswordConfirm>
          <input
            type="text"
            name="passwordConfirm"
            value={user.passwordConfirm}
            onChange={onChangeHandler}
            placeholder="비밀번호를 다시 입력해주세요."
          />
          <div>
            {user.passwordConfirm === "" ? null : user.password ===
              user.passwordConfirm ? (
              <p style={{ color: "green" }}>비밀번호가 일치합니다.</p>
            ) : (
              <p style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</p>
            )}
          </div>
        </PasswordConfirm>
        <Buttons>
          <Submit type="submit" value="가입하기" />
          <Cancel
            type="button"
            value="취소"
            onClick={() => navigate("/login")}
          />
        </Buttons>
      </form>
    </StSignUp>
  );
};

export default SignUp;

const StSignUp = styled.div`
  width: 428px;
  height: 926px;
  text-align: center;
  margin: 0 auto;

  & form {
    margin-top: 100px;
  }

  & p {
    margin: 15px auto 15px 20px;
  }
`;

const Email = styled.div`
  display: block;
  margin: 40px 20px;

  & div {
    display: flex;
    gap: 10px;
  }

  & input {
    width: 373px;
    height: 52px;
    background-color: rgba(172, 212, 228, 0.35);
    border-radius: 15px;
    border: none;
    padding-left: 10px;
    margin-top: 20px;
  }

  & button {
    background-color: rgba(121, 185, 211, 0.62);
    color: white;
    border: none;
    border-radius: 12px;
    width: 83px;
    height: 50px;
    cursor: pointer;
    font-weight: 700;
    line-height: 24px;
    display: block;
    margin: 0 auto;
    margin-top: 20px;
  }
`;

const EmailConfirm = styled.div`
  margin-top: -15px;
`;

const Password = styled.div`
  display: block;
  margin: 40px 20px;

  & div {
    display: flex;
    margin-bottom: 20px;
  }

  & p {
    margin-bottom: -10px;
  }

  & input {
    width: 373px;
    height: 52px;
    background-color: rgba(172, 212, 228, 0.35);
    border-radius: 15px;
    border: none;
    padding-left: 10px;
    margin-bottom: -20px;
  }
`;

const PasswordConfirm = styled.div`
  & input {
    width: 373px;
    height: 52px;
    background-color: rgba(172, 212, 228, 0.35);
    border-radius: 15px;
    border: none;
    padding-left: 10px;
    margin-top: -15px;
  }

  & p {
    margin-bottom: -20px;
    text-align: left;
    margin-left: 40px;
  }
`;

const Buttons = styled.div`
  margin-top: 80px;

  & input {
    margin: 20px auto;
  }
`;

const Submit = styled.input`
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
`;

const Cancel = styled.input`
  background-color: white;
  color: rgba(121, 185, 211, 0.62);
  border: 3px solid rgba(121, 185, 211, 0.62);
  border-radius: 12px;
  width: 370px;
  height: 50px;
  cursor: pointer;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  display: block;
  margin: 0 auto;
`;
