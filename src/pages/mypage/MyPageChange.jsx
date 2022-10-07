import React from "react";
import styled from "styled-components";
import Header from "../../componenets/header/Header";
import Footer from "../../componenets/footer/Footer";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { putApi } from "../../shared/Api";
import Nickname from "../../componenets/mypage/Change/Nickname";
import Password from "../../componenets/mypage/Change/Password";
import Withdrawal from "../../componenets/mypage/Change/Withdrawal";

function MyPageChange() {
  return (
    <StChange>
      <Header />
      <Nickname />
      <Password />
      <Withdrawal />
    </StChange>
  );
}

export default MyPageChange;

const StChange = styled.div`
  max-width: 428px;
  width: 100%;
  margin: 0 auto;
  background-color: #eef6fa;
  height: 1000px;
`;
