import React from "react";
import styled from "styled-components";
import Header from "../componenets/header/Header";
import Festival from "../componenets/main/Festival";
import TopTen from "../componenets/main/TopTen";

const Main = () => {
  return (
    <StMain>
      <Header />
      <Festival />
      <TopTen />
    </StMain>
  );
};

export default Main;

const StMain = styled.div`
  display: block;
  width: 428px;
  margin: 0 auto;
`;
