import React from "react";
import styled from "styled-components";

const Category = () => {
  return (
    <StCategory>
      <button>관광</button>
      <button>관람</button>
      <button>액티비티</button>
      <button>식도락</button>
    </StCategory>
  );
};

export default Category;

const StCategory = styled.div`
  width: 320px;
  margin: 20px auto;

  & button {
    margin: auto 13px;
    background-color: white;
    cursor: pointer;
  }
`;
