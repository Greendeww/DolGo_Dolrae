import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../shared/Api";
import { setCookie } from "../shared/Cookie";

const KaKaoLogin = () => {
  const navigate = useNavigate();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    kakaologin(code);
  }, []);

  const kakaologin = async (code) => {
    try {
      //백엔드로 인가코드 보내기
      const res = await instance.get(`/api/kakao/login?code=${code}`);
      console.log(res)

      // 새로고침하지 않으면 쿠키에 저장이 안 됨 ㅠ
      // setCookie("isLogin", res.headers.authorization);
      // setCookie("ACCESS_TOKEN", res.headers.authorization);
      // setCookie("REFRESH_TOKEN", res.headers.refreshtoken);

      // 로컬스토리지에 저장하면 새로고침 안 해도 저장이 되어서 변경
      localStorage.setItem("token", res.headers.authorization); 

      // window.location.reload();

      alert(res.data);

      navigate('/')


    } catch (error) {
      console.log("카카오 로그인 실패");
    }
  };

  return null;
};

export default KaKaoLogin;
