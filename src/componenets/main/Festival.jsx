import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { instance } from "../../shared/Api";

const Festival = () => {
  const navigate = useNavigate();

  const [festival, setFestival] = useState();

  const getEvents = async () => {
    const res = await instance.get("/api/events");
    console.log(res);

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
      <h3>이 달의 축제</h3>
      <hr />
      <FestivalList>
        {festival.map((festival) => {
          return (
            <Card key={festival.id}
            // onClick={() => {navigate('{festival.linkUrl}')}}
            >
              <img src={festival.imageUrl} />
              <p>{festival.title}</p>
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
  display: block;
  text-align: center;
  font-size: 37px;
  color: #79b9d3;
  height: 750px;

  & hr {
    width: 260px;
    height: 4px;
    margin-top: -25px;
    background-color: #79b9d3;
    font-weight: bolder;
    border: none;
    border-radius: 30px;
  }

  & h3 {
    margin: 30px auto;
  }
`;

const FestivalList = styled.div`
  height: 200px;
`;

const Card = styled.div`
  img {
    width: 400px;
    height: 600px;
    &:hover {
      cursor: pointer;
    }
  }
  p {
    font-size: 20px;
    color: black;
  }
`;
