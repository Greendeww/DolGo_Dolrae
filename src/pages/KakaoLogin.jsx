import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { instance } from "../../shared/Api";



const KaKaoLogin = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");
  console.log(code)

  // useEffect( () => {
  //   kakaologin(code)   
  // }, []);

  // const kakaologin = async (_code) => {
  //       try {
  //           const res = await instance.get(`api/member/kakao?code=${_code}`)   //백엔드로 인가코드 보내기
            
  //           localStorage.setItem("ACCESS_TOKEN", res.headers.Authorization);
  //           localStorage.setItem("REFRESHTOKEN", res.headers.Refreshtoken);
  //           console.log(res);
  //           alert('로그인 되었습니다.');                   
  //           navigate('/');          
  //         } catch (error) {
  //           console.log("카카오 로그인 실패")
  //       }
  //   }
  
  return null;
};

export default KaKaoLogin;