import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { logout } from "../../redux/modules/user";
import { useDispatch } from "react-redux";

const Category = () => {
  const categories = [
    {
      name: "관광",
      value: "tour",
    },
    {
      name: "관람",
      value: "museum",
    },
    {
      name: "액티비티",
      value: "activity",
    },
    {
      name: "식도락",
      value: "food",
    },
  ];

  const [category, setCategory] = useState("");

  const LS_KEY_CATEGORY = "LS_KEY_CATEGORY";

  const makeCategories = () => {
    return categories.map((item, idx) => (
      <div
        key={idx}
        className={
          item.value === category ? "category-child selected" : "category-child"
        }
        onClick={() => {
          setCategory(item.value);
          localStorage.setItem(LS_KEY_CATEGORY, item.value);
        }}
      >
        {item.name}
      </div>
    ));
  };

  const init = () => {
    let data = localStorage.getItem(LS_KEY_CATEGORY);
    if (data !== null) setCategory(data);
  };

  useEffect(init, []);

  return (
    <StCategory>
      <div className="category-set">{makeCategories()}</div>
    </StCategory>
  );
};

export default Category;

const StCategory = styled.div`
  width: 428px;

  & div {
    cursor: pointer;
  }
`;
