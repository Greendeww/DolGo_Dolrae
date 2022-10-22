import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { instance } from "../../shared/Api";
import basic from "../../assert/image/basic.png";
import Header from "../header/Header";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/modules/ideal";

const WorldCup = () => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState([]);

  const { isLoading, error, list } = useSelector((state) => state.ideal);
  console.log(list)

  const selectHandler = (e) => {
    e.preventDefault();
    select.push(e.target.value);
  };

  useEffect(() => {
    if (sessionStorage.getItem("ideal") === null) {
      dispatch(getData());
    }
  }, []);

  if (isLoading) {
    return <div>로딩중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <StWorldCup>
      <Header />
      <Container>
        {
          list[4]?.map((list, idx) => (
            <div key={idx}>
              <img
                alt=""
                src={list.image}
                value={list.title}
                onClick={selectHandler}
              />
              <p>{list.title}</p>
            </div>
          ))}
      </Container>
    </StWorldCup>
  );
};

export default WorldCup;

const StWorldCup = styled.div`
  margin: 0 auto;
  max-width: 428px;
  width: 100%;
`;

const Container = styled.div`
  padding-top: 140px;
  & img {
    width: 100%;
  }
`;
