import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { instance } from "../../shared/Api";

const Festival = () => {
  const navigate = useNavigate();

  const [festival, setFestival] = useState();

  const getEvents = async () => {
    const res = await instance.get("/api/events");
    setFestival(res.data);
  };

  useEffect(() => {
    getEvents();
  }, []);

  if (festival === undefined) {
    return;
  }

  return (
    <StFestival>
      <Title>이 달의 축제</Title>
      {/* <hr /> */}
      <FestivalList>
        {festival.map((festival) => {
          return (
            <Card
              key={festival.id}
              // onClick={() => {navigate('{festival.linkUrl}')}}
            >
              <img alt="" src={festival.imageUrl} />
              <p style={{ fontWeight: "bold" }} >{festival.title}</p>
              <p>{festival.period}</p>
            </Card>
          );
        })}
      </FestivalList>
    </StFestival>
  );
};

export default Festival;

const StFestival = styled.div`
  text-align: center;
  font-size: 37px;
  color: #79b9d3;
  height: 500px;
  padding-top: 80px;

  & hr {
    width: 260px;
    height: 4px;
    margin-top: -25px;
    background-color: #79b9d3;
    font-weight: bolder;
    border: none;
    border-radius: 30px;
  }
`;

const Title = styled.div`
  color: white;
  background: #c4e0ec;
  border-radius: 30px;
  width: 236px;
  height: 50px;
  font-weight: 900;
  font-size: 35px;
  line-height: 46px;
  margin: 30px auto;
  padding-top: 5px;
`;

const FestivalList = styled.div`
  height: 200px;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 30px;
    &:hover {
      cursor: pointer;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
    }
  }
  p {
    margin: 10px auto;
    font-size: 25px;
    color: #414141;
  }
`;
