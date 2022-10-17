import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../../shared/Api";
import { setCookie } from "../../shared/Cookie";

const KaKaoLogin = () => {
  const navigate = useNavigate();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  useEffect(() => {
    kakaologin(code);
  }, []);

  const kakaologin = async (code) => {
    try {
      //백엔드로 인가코드 보내기
      const res = await instance.get(`/api/kakao/login?code=${code}`);
      console.log(res);

      setCookie("token", res.headers.authorization);
      localStorage.setItem("ACCESS_TOKEN", res.headers.authorization);
      localStorage.setItem("REFRESH_TOKEN", res.headers.refreshtoken);
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("nickname", res.data.nickname);
      localStorage.setItem("role", res.data.role);

      // setCookie("isLogin", res.headers.authorization);
      // setCookie("REFRESH_TOKEN", res.headers.refreshtoken);

      // notice();
      alert(`${res.data.nickname}님 환영합니다.`);
      navigate("/");


    } catch (error) {
      console.log("카카오 로그인 실패");
    }
  };

  return null;
};

export default KaKaoLogin;