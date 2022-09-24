import React from "react";
import styled from "styled-components";
import gana from "../assert/theme/gana.png";
import hwangji from "../assert/theme/hwangji.jpg";
import largeRotate from "../assert/theme/icons8-rotate-32.png";
import { __getTheme } from "../redux/modules/post";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Theme1 = () => {

  const dispatch = useDispatch();

  const LS_KEY_CATEGORY = window.localStorage.getItem("LS_KEY_CATEGORY")
  const LS_KEY_DO = window.localStorage.getItem("LS_KEY_DO")
  const LS_KEY_SI = window.localStorage.getItem("LS_KEY_SI")

  const search = {
    category : LS_KEY_CATEGORY,
    do : LS_KEY_DO,
    si : LS_KEY_SI
  }

  // useEffect(() => {
  //   dispatch(__getTheme(search));
  // }, []);

  return (
    <StTheme1>
      <Title>
        <h3>관광 ‣ 강원 ‣ 춘천</h3>
      </Title>
      <Rotate />
      <div>
        <Card>
          <img src={gana} />
          <p>가나아트파크</p>
          <p>★★★★☆</p>
        </Card>

        <Card>
          <img src={hwangji} />
          <p>황지연못</p>
          <p>★★★☆☆</p>
        </Card>
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
