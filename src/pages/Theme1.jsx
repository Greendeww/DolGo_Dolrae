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

  const THEME_CODE = window.localStorage.getItem("THEME_CODE");
  const THEME_NAME = window.localStorage.getItem("THEME_NAME");
  const AREA_CODE = window.localStorage.getItem("AREA_CODE");
  const AREA_NAME = window.localStorage.getItem("AREA_NAME");
  const SIGUNGU_CODE = window.localStorage.getItem("SIGUNGU_CODE");
  const SIGUNGU_NAME = window.localStorage.getItem("SIGUNGU_NAME");

  const search = {
    themeCode: THEME_CODE,
    themeName: THEME_NAME,
    areaCode: AREA_CODE,
    areaName: AREA_NAME,
    sigunguCode: SIGUNGU_CODE,
    sigunguName: SIGUNGU_NAME,
  };

  const { List } = useSelector((state) => state.themeList);

  useEffect(() => {
    dispatch(__getTheme(search));
  }, []);

  return (
    <StTheme1>
      <Title>
        <h3>
          {THEME_NAME} ‣ {AREA_NAME} ‣ {SIGUNGU_NAME}
        </h3>
      </Title>
      <Rotate />
      <div>
        {List.map((list) => (
          <Card
          key={list.id}>
            <img src={list.image} />
            <p>{list.title}</p>
            <p>★★★★☆</p>
          </Card>
        ))}
      </div>
    </StTheme1>
    // <StTheme1>
    //   <Title>
    //     <h3>관광 ‣ 강원 ‣ 춘천</h3>
    //   </Title>
    //   <Rotate />
    //   <div>
    //     <Card>
    //       <img src={gana} />
    //       <p>가나아트파크</p>
    //       <p>★★★★☆</p>
    //     </Card>

    //     <Card>
    //       <img src={hwangji} />
    //       <p>황지연못</p>
    //       <p>★★★☆☆</p>
    //     </Card>
    //   </div>
    // </StTheme1>
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
