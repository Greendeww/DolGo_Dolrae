import React from "react";
import styled from "styled-components";
import Header from "../../componenets/header/Header";
import Category from "../../componenets/select/Select";

const Select = () => {
  return (
    <StSelect>
      <Header />
      <Category />
    </StSelect>
  );
};

export default Select;

const StSelect = styled.div`
  max-width: 428px;
  width: 100%;
  margin: 0 auto;
`;
