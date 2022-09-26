import React from "react";
import styled from "styled-components";
import gana from "../assert/theme/gana.png";
import hwangji from "../assert/theme/hwangji.jpg";
import largeRotate from "../assert/theme/icons8-rotate-32.png";
import { __getTheme } from "../redux/modules/theme";
import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Theme1 = () => {
  const dispatch = useDispatch();

  const THEME_NAME = window.localStorage.getItem("THEME_NAME");
  const AREA_NAME = window.localStorage.getItem("AREA_NAME");
  const SIGUNGU_NAME = window.localStorage.getItem("SIGUNGU_NAME");

  const { list } = useSelector((state) => state.theme);

  console.log(list)

  return (
    <StTheme1>
      <Title>
        <h3>
          {THEME_NAME} ‣ {AREA_NAME} ‣ {SIGUNGU_NAME}
        </h3>
      </Title>
      <Rotate />
      <div>
        {list.map((list) => (
          <Card
          key={list.id}>
            <img src={list.image} />
            <p>{list.title}</p>
            <p>★★★★☆</p>
          </Card>
        ))}
      </div>
    </StTheme1>
  );
};

export default Theme1;

const StTheme1 = styled.div`
  width: 428px;
  border: 1px solid gray;
  padding: 20px;
  margin: 0 auto;

  & img {
    width: 300px;
    height: 200px;
    margin-top: 20px;
    border-radius: 10px;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  width: 300px;
  margin: 20px auto;
  text-align: center;
`;

const Rotate = styled.div`
  background-image: url(${largeRotate});
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  margin: 0 auto;
`;
