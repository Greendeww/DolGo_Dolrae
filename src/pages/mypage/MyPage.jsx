import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../componenets/header/Header";
import Info from "../../componenets/mypage/mypage/Info";
import LikeList from "../../componenets/mypage/mypage/LikeList";
import ReviewList from "../../componenets/mypage/mypage/ReviewList";
import { getCookie } from "../../shared/Cookie";

const MyPage = () => {
  const getToken = getCookie("ACCESS_TOKEN");
  const navigate =useNavigate()
  
  useEffect(() => {
    if(getToken === undefined){
      alert("로그인이 필요한 서비스입니다.")
      navigate('/login')
    }
  },[])

  return (
    <StMyPage>
      <Header />
      <Info />
      <LikeList />
      <ReviewList />
    </StMyPage>
  );
};

export default MyPage;

const StMyPage = styled.div`
  max-width: 428px;
  width: 100%;
  margin: 0 auto;
`;
