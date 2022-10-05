import React, { useState, useEffect } from "react";
import styled from "styled-components";
import css from "../../css/select.css";
import { logout } from "../../redux/modules/user";
import { useDispatch } from "react-redux";

const Category = () => {
  const categories = [
    {
      name: "관광",
      value: 12,
    },
    {
      name: "관람",
      value: 14,
    },
    {
      name: "액티비티",
      value: 28,
    },
    {
      name: "식도락",
      value: 39,
    },
  ];

  const [category, setCategory] = useState("");

  const THEME_CODE = "THEME_CODE";
  const THEME_NAME = "THEME_NAME";

  const makeCategories = () => {
    return categories.map((item, idx) => (
      <div
        key={idx}
        className={
          item.value === category ? "category-child selected" : "category-child"
        }
        onClick={() => {
          setCategory(item.value);
          localStorage.setItem(THEME_CODE, item.value);
          localStorage.setItem(THEME_NAME, item.name);
        }}
      >
        {item.name}
      </div>
    ));
  };

  const init = () => {
    let data = localStorage.getItem(THEME_CODE);
    if (data !== null) setCategory(data);
  };

  useEffect(init, []);

  return (
    <St>
      <p>테마</p>
      <StCategory>
        <div className="category-set">{makeCategories()}</div>
      </StCategory>
    </St>
  );
};

export default Category;

const St = styled.div`
 & p {
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 40px;
    color: #BFB8B8;
    margin-left: 20px;
  }

`;

const StCategory = styled.div`
  width: 428px;
  & div {
    cursor: pointer;
  }
`;
