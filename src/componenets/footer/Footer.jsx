import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Div>
      <Text>·</Text>
      <Text>
        [ 대한민국의 여행지 공유 사이트 ]
      </Text>
      <Text>·</Text>
      <Text>
        [ 제공 ] 스파르타 코딩클럽  이노베이션강원 1조
      </Text>
      <Text>·</Text>
      <Text>
        관광지  ·  문화시설  ·  레저스포츠  ·  음식점 
      </Text>
      <Text>·</Text>
    </Div>
  );
};

export default Footer;

const Div = styled.div `
  width: 428px;
  height: 100px;
  border: 1px solid #79B9D3;
  background-color: #79B9D3;
  
`
const Text = styled.div `
  color: white;
  font-size: 10px;
  text-align: center;
`