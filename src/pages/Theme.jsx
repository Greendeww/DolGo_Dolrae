import React from "react";
import styled from "styled-components";
import Category from "../componenets/theme/Category";
import Location from "../componenets/theme/Location";
import List from "../componenets/theme/List";

const Theme = () => {
  return (
    <StTheme>
      <Category />
      <Location />
      <List />
    </StTheme>
  );
};

export default Theme;

const StTheme = styled.div`
display: block;
width: 755px;
`;
