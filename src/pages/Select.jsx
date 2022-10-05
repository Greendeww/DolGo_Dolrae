import React from "react";
import styled from "styled-components";
import Header from "../componenets/header/Header";
import Category from "../componenets/select/Category";
import Location from "../componenets/select/Location";

const Theme = () => {
  return (
    <StTheme>
      <Header/>
      <Category />
      <Location />
    </StTheme>
  );
};

export default Theme;

const StTheme = styled.div`
width: 428px;
margin: 0 auto;
`;
