import React from "react";
import styled from "styled-components";
import Header01 from "../componenets/header/Header01";
import Footer from "../componenets/footer/Footer";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { getApi } from "../shared/Api";

import { FaStar } from 'react-icons/fa';



const Main = () => {
    
    const navigate = useNavigate();
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };



    const [ theme01, setTheme01 ] = useState([]);
    const [ theme02, setTheme02 ] = useState([]);
    const [ theme03, setTheme03 ] = useState([]);
    const [ theme04, setTheme04 ] = useState([]);

    const fetchPost = async () => {
        const response = await getApi("/api/place/rank")
        console.log(response.data.foodList)

        setTheme01(response.data.foodList);
        setTheme02(response.data.tourList);
        setTheme03(response.data.activityList);
        setTheme04(response.data.museumList);
    }


    useEffect( () => {
        
        fetchPost();

    }, []);

    

    if(theme01===undefined) {
        return
    }



    return (
        <Div>
            <Header01></Header01>
                <Body>
                    <Banner>TOP 10</Banner>
                    

                    <Theme02>
                        <ThemeTitle>관광</ThemeTitle>                                      
                        <Slider {...settings}>
                            {theme02.map((item,index) => {
                                return(
                                    <div key={index}>
                                        <IMG>
                                            <Opps src={item.image}></Opps>
                                        </IMG>
                                        <Text>
                                            <Title>{item.title}</Title>
                                            <Star>『<FaStar style={{color:"#fcc419"}}/>』 {item.star}  점</Star>
                                        </Text>
                                    </div>
                                )
                            })}
                        </Slider>
                        <More02 onClick={() => navigate('/api/place?theme=14')}>더 보기</More02>    
                    </Theme02>


                    <Theme04>      
                        <ThemeTitle>관람</ThemeTitle>                                 
                        <Slider {...settings}>
                            {theme04.map((item,index) => {
                                return(
                                    <div key={index}>
                                        <IMG>
                                            <Opps src={item.image}></Opps>
                                        </IMG>
                                        <Text>
                                            <Title>{item.title}</Title>
                                            <Star>{item.star} 점 『<FaStar style={{color:"#fcc419"}}/>』</Star>
                                        </Text>
                                    </div>
                                )
                            })}
                        </Slider>
                        <More04 onClick={() => navigate('/api/place?theme=39')}>더 보기</More04>    
                    </Theme04>


                    <Theme03>    
                        <ThemeTitle>액티비티</ThemeTitle>                                   
                        <Slider {...settings}>
                            {theme03.map((item,index) => {
                                return(
                                    <div key={index}>
                                        <IMG>
                                            <Opps src={item.image}></Opps>
                                        </IMG>
                                        <Text>
                                            <Title>{item.title}</Title>
                                            <Star>{item.star} 점 『<FaStar style={{color:"#fcc419"}}/>』</Star>
                                        </Text>
                                    </div>
                                )
                            })}
                        </Slider>
                        <More03 onClick={() => navigate('/api/place?theme=28')}>더 보기</More03>    
                    </Theme03>


                    <Theme01>
                        <ThemeTitle>식도락</ThemeTitle>                                       
                        <Slider {...settings}>
                            {theme01.map((item,index) => {
                                return(
                                    <div key={index}>
                                        <IMG>
                                            <Opps src={item.image}></Opps>
                                        </IMG>
                                        <Text>
                                            <Title>{item.title}</Title>
                                            <Star>{item.star} 점 『<FaStar style={{color:"#fcc419"}}/>』</Star>
                                        </Text>
                                    </div>
                                )
                            })}
                        </Slider>
                        <More01 onClick={() => navigate('/api/place?theme=12')}>더 보기</More01>   
                    </Theme01>


                </Body>
            <Footer></Footer>
        </Div>
    );
};

export default Main;


const ThemeTitle = styled.div `
    width: 428px;
    height: 42px;
    margin: 30px 0px 0px 0px;
    
    color: white;
    text-align: center;
    line-height: 30px;
    font-size: 15px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 42px;

    color: #FFAEAE;

    left: 10px;
    top: 10px;

    z-index: 2;
`
const Opps = styled.img `
    width: 80%;
    height: 80%;
    border-radius: 30px;
    margin: 30px auto auto auto;
`
const IMG = styled.div `
    width: 100%; 
    height: 300px;
    
`
const Star = styled.div `
    width: 214px;
    height: 50px;
    margin: 0px 0px 0px 0px;
    background-color: #79B9D3;
    text-align: center;
    line-height: 50px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    
    color: #FFFFFF;

`
const Title = styled.div ` 
    width: 214px;
    height: 50px;
    margin: 0px 0px 0px 0px;
    background-color: #79B9D3;
    text-align: center;
    line-height: 50px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    
    color: #FFFFFF;
`
const Div = styled.div `
    width: 428px;
    height: 800px;
    margin: 0px auto 0px auto;  
`
const Body = styled.div `
    
`
const Banner = styled.div `
    width: 428px;
    height: 100px;
    border: 1px solid grey;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 100px;
    text-align: center;

    color: #ACD4E4;

`
const Theme01 = styled.div `
    width: 428px;
    
    border: 1px solid grey;
    text-align: center;
    line-height: 100px;
    font-size: 15px;
    
    position: relative;
`
const Theme02 = styled.div `
    width: 428px;
        
    border: 1px solid grey;
    text-align: center;
    line-height: 100px;
    font-size: 15px;

    position: relative;
`
const Theme03 = styled.div `
    width: 428px;
        
    border: 1px solid grey;
    text-align: center;
    line-height: 100px;
    font-size: 15px;

    position: relative;
`
const Theme04 = styled.div `
    width: 428px;
        
    border: 1px solid grey;
    text-align: center;
    line-height: 100px;
    font-size: 15px;

    position: relative;
`
const More01 = styled.div `
    width: 80px;
    height: 30px;
    margin: 5px 5px 0px auto;
    border: 1px solid black;
    border-radius: 10px;
    background-color: black;
    color: white;
    text-align: center;
    line-height: 30px;
    font-size: 15px;

    position: absolute;

    right: 0;
    top: 0;

    z-index: 2;
    
    &:hover {
        border: 1px solid gold;
        background: gold;
        color: black;
      }
`
const More02 = styled.div `
    width: 80px;
    height: 30px;
    margin: 5px 5px 0px auto;
    border: 1px solid black;
    border-radius: 10px;
    background-color: black;
    color: white;
    text-align: center;
    line-height: 30px;
    font-size: 15px;

    position: absolute;

    right: 0;
    top: 0;

    z-index: 2;

    &:hover {
        border: 1px solid gold;
        background: gold;
        color: black;
    }
`
const More03 = styled.div `
    width: 80px;
    height: 30px;
    margin: 5px 5px 0px auto;
    border: 1px solid black;
    border-radius: 10px;
    background-color: black;
    color: white;
    text-align: center;
    line-height: 30px;
    font-size: 15px;

    position: absolute;

    right: 0;
    top: 0;

    z-index: 2;

    &:hover {
        border: 1px solid gold;
        background: gold;
        color: black;
    }
`
const More04 = styled.div `
    width: 80px;
    height: 30px;
    margin: 5px 5px 0px auto;
    border: 1px solid black;
    border-radius: 10px;
    background-color: black;
    color: white;
    text-align: center;
    line-height: 30px;
    font-size: 15px;

    position: absolute;

    right: 0;
    top: 0;

    z-index: 2;

    &:hover {
        border: 1px solid gold;
        background: gold;
        color: black;
    }
`
const Text = styled.div `
    width: 428px;
    height: 100px;
    line-height: 100px;
    font-size: 13px;
    margin: 0px 0px 0px 0px;

    display: flex;

    z-index: 2;
`