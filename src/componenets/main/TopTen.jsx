import React from "react";
import { useState, useEffect } from "react";
import { getApi } from "../../shared/Api";
import styled from "styled-components";
import LOGO from "../../assert/logo/Logo.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopTen = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [foodList, setFoodList] = useState();
  const [tourList, setTourList] = useState();
  const [activityList, setActivityList] = useState();
  const [museumList, setMuseumList] = useState();

  const fetchPost = async () => {
    const response = await getApi("/api/place/rank");

    setFoodList(response.data.tourList);
    setTourList(response.data.museumList);
    setActivityList(response.data.activityList);
    setMuseumList(response.data.foodList);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  if (foodList === undefined) {
    return;
  }

  return (
    <StTopTen>
      <h3>TOP 10</h3>
      <hr />
      <Theme>
        <h4>관광</h4>
        <Slider {...settings}>
          {foodList.map((item, index) => {
            return (
              <Card key={index}>
                <div>
                  {item.image === null ? (
                    <IMG alt="" src={LOGO} />
                  ) : (
                    <IMG alt="" src={item.image} />
                  )}
                </div>
                <Name>
                  {item.title} ⭐ {item.star}
                </Name>
              </Card>
            );
          })}
        </Slider>
      </Theme>
      <Theme>
        <h4>관람</h4>
        <Slider {...settings}>
          {tourList.map((item, index) => {
            return (
              <Card key={index}>
                <div>
                  {item.image === null ? (
                    <IMG alt="" src={LOGO} />
                  ) : (
                    <IMG alt="" src={item.image} />
                  )}
                </div>
                <Name>
                  {item.title} ⭐ {item.star}
                </Name>
              </Card>
            );
          })}
        </Slider>
      </Theme>
      <Theme>
        <h4>액티비티</h4>
        <Slider {...settings}>
          {activityList.map((item, index) => {
            return (
              <Card key={index}>
                <div>
                  {item.image === null ? (
                    <IMG alt="" src={LOGO} />
                  ) : (
                    <IMG alt="" src={item.image} />
                  )}
                </div>
                <Name>
                  {item.title} ⭐ {item.star}
                </Name>
              </Card>
            );
          })}
        </Slider>
      </Theme>
      <Theme>
        <h4>식도락</h4>
        <Slider {...settings}>
          {museumList.map((item, index) => {
            return (
              <Card key={index}>
                <div>
                  {item.image === null ? (
                    <IMG alt="" src={LOGO} />
                  ) : (
                    <IMG alt="" src={item.image} />
                  )}
                </div>
                <Name>
                  {item.title} ⭐ {item.star}
                </Name>
              </Card>
            );
          })}
        </Slider>
      </Theme>
    </StTopTen>
  );
};

export default TopTen;

const StTopTen = styled.div`
  text-align: center;
  font-size: 40px;
  color: #79b9d3;

  & hr {
    width: 180px;
    height: 3px;
    margin-top: -25px;
    background-color: #79b9d3;
    border: none;
    border-radius: 30px;
  }

  & h3 {
    margin: 30px auto;
  }

  & h4 {
    font-size: 35px;
    color: #ffaeae;
    margin: 0;
  }
`;

const Card = styled.div`

`;

const IMG = styled.img`
  width: 95%;
  height: 250px;
  background-color: rgba(121, 185, 211, 0.5);
  margin: 0% auto auto auto;
  border-radius: 30px;
`;

const Theme = styled.div`
  width: 428px;
  text-align: center;
  line-height: 100px;
  font-size: 15px;
  position: relative;
`;

const Name = styled.div`
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
