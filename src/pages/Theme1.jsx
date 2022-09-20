import React from "react";
import styled from "styled-components";
import gana from "../assert/gana.png";
import hwangji from "../assert/hwangji.jpg";

const Theme1 = () => {
  return (
    <StTheme1>
      <div>
        <h3>관광 ‣ 강원 ‣ 춘천</h3>
      </div>
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
    width: 200px;
    height: 200px;
    margin-top: 20px;
    border-radius: 10px;
  }
`;

const Card = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  width: 300px;
  margin: 20px auto;
  text-align: center;
`;
