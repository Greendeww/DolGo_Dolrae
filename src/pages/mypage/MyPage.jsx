import React from "react";
import styled from "styled-components";
import Header from "../../componenets/header/Header";
import Info from "../../componenets/mypage/mypage/Info";
import LikeList from "../../componenets/mypage/mypage/LikeList";
import ReviewList from "../../componenets/mypage/mypage/ReviewList";

const MyPage = () => {
  return (
    <StMyPage>
      <Header />
      <Info />
      <LikeList />
      <ReviewList />
    </StMyPage>
  );
}

export default MyPage;

const StMyPage = styled.div`
  width: 428px;
  margin: 0 auto;
`;
