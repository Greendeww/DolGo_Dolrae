import React from "react";
import styled from "styled-components";
import { __getTheme } from "../redux/modules/theme";
import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Header from "../componenets/header/Header";

const Theme1 = () => {
  const dispatch = useDispatch();

  const THEME_NAME = window.localStorage.getItem("THEME_NAME");
  const AREA_NAME = window.localStorage.getItem("AREA_NAME");
  const SIGUNGU_NAME = window.localStorage.getItem("SIGUNGU_NAME");

  const { list } = useSelector((state) => state.theme);

  console.log(list);

  return (
    <StTheme1>
      <Header />
      <Title>
        <div>
          <p>{THEME_NAME}</p>
        </div>
        <p>‣</p>
        <div>
          <p>{AREA_NAME}</p>
        </div>
        <p>‣</p>
        <div>
          <p>{SIGUNGU_NAME}</p>
        </div>
      </Title>
      <div>
        {list.map((list) => (
          <Card key={list.id}>
            <div>
              <Img src={list.image} />
            </div>
            <Name>
              {list.title} ⭐ {list.star}
            </Name>
          </Card>
        ))}
      </div>
    </StTheme1>
  );
};

export default Theme1;

const StTheme1 = styled.div`
  width: 428px;
  margin: 0 auto;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0;

  & div {
    width: 89px;
    height: 43px;
    background-color: #c4e0ec;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    margin: auto 15px;
  }

  & p {
    color: #ffc0c0;
    font-weight: 700;
    font-size: 40px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  & div > p {
    display: flex;
    justify-content: center;
    margin-block-start: 8px;
    margin-block-end: 0;
    color: #ffffff;
    font-weight: 700;
    font-size: 22px;
    text-shadow: none;
  }
`;

const Card = styled.div`
  text-align: center;
  & div {
    height: 235px;
    box-shadow: inset 0 -30px 70px #2e2e2e;
  }
`;

const Img = styled.img`
  position: relative;
  width: 100%;
  height: 234px;
  z-index: -1;
`;

const Name = styled.p`
  position: relative;
  top: -55px;
  text-align: initial;
  margin-left: 20px;
  color: #ffffff;
  font-size: 23px;
  font-weight: bold;
  line-height: 33px;
  margin-block-end: 0;
  margin-block-start: 0;
`;
