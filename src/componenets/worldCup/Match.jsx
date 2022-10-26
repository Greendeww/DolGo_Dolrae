import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../header/Header";
import { instance } from "../../shared/Api";
import basicImg from "../../assert/image/basic.png";

const Match = () => {
  const [data, setData] = useState();
  const [display, setDisplay] = useState();
  const [winners, setWinners] = useState();

  const THEME_CODE = sessionStorage.getItem("IDEAL_THEME_CODE");
  const AREA_CODE = sessionStorage.getItem("IDEAL_AREA_CODE");
  const SIGUNGU_CODE = sessionStorage.getItem("IDEAL_SIGUNGU_CODE");
  // const THEME_NAME = sessionStorage.getItem("THEME_NAME");
  // const AREA_NAME = sessionStorage.getItem("AREA_NAME");
  // const SIGUNGU_NAME = sessionStorage.getItem("SIGUNGU_NAME");

  const getData = async () => {
    const res = await instance.post(
      `/api/place/worldcup?areaCode=${AREA_CODE}&sigunguCode=${SIGUNGU_CODE}&themes=${THEME_CODE}`
    );
    console.log(res);

    // setData(res.data);
    // setDisplay(res.data[0]);
  };

  const selectHandler = (item) => {
    console.log(item);
    setWinners([...winners, item]);
    setDisplay([data[1]]);

    if (data.length <= 2) {
      if (winners.length === 0) {
        setDisplay([data]);
      } else {
        let updatedData = [...winners, data];
        setData(updatedData);
        setDisplay(updatedData[0], updatedData[1]);
        setWinners([]);
      }
    } else if (data.length > 2) {
      setWinners([...winners, data]);
      setDisplay([data[1]]);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const List = () => {
    return display?.map((item) => {
      return (
        <div key={item.id}>
          <img
            alt=""
            src={item.image === null ? basicImg : item.image}
            value={item.title}
            onClick={() => selectHandler(item)}
          />
          <p>{item.title}</p>
        </div>
      );
    });
  };

  return (
    <StWorldCup>
      <Header />
      <Container>
        <div>{List()}</div>
      </Container>
    </StWorldCup>
  );
};

export default Match;

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
