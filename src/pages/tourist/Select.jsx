import React from "react";
import styled from "styled-components";
import Header from "../../componenets/header/Header";
import Category from "../../componenets/select/Category";
import Location from "../../componenets/select/Location";

const Select = () => {
  return (
    <StSelect>
      <Header />
      <Category />
      <Location />
    </StSelect>
  );
};

export default Select;

const StSelect = styled.div`
  margin: 0 auto;
  max-width: 428px;
  width: 100%;
`;
