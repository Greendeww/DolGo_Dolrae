import React from "react";
import styled from "styled-components";
import Header from "../componenets/header/Header";
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
        const response = await getApi("/main")
        console.log(response.data[0].foodList[0])

        setTheme01([response.data[0].foodList[0], response.data[0].foodList[1], response.data[0].foodList[2]]);
        setTheme02([response.data[1].tourList[0]]);
        setTheme03([response.data[2].activityList[0]]);
        setTheme04([response.data[3].museumList[0]]);
    }


    useEffect( () => {
        
        fetchPost();

    }, []);



    if(theme01===undefined) {
        return
    }



    return (
        <Div>
            <Header></Header>
                <Body>
                    <Banner></Banner>
                    
                    <Theme01>
                        <ThemeTitle>관광지</ThemeTitle>                                       
                        <Slider {...settings}>
                            {theme01.map((item,index) => {
                                return(
                                    <div key={index}>
                                        <IMG>
                                            <Opps src={item.imageUrl}></Opps>
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

                    <Theme02> 
                        <ThemeTitle>문화시설</ThemeTitle>                                      
                        <Slider {...settings}>
                            {theme02.map((item,index) => {
                                return(
                                    <div key={index}>
                                        <IMG>
                                            <Opps src={item.imageUrl}></Opps>
                                        </IMG>
                                        <Text>
                                            <Title>{item.title}</Title>
                                            <Star>{item.star} 점 『<FaStar style={{color:"#fcc419"}}/>』</Star>
                                        </Text>
                                    </div>
                                )
                            })}
                        </Slider>
                        <More02 onClick={() => navigate('/api/place?theme=14')}>더 보기</More02>    
                    </Theme02>

                    <Theme03>    
                        <ThemeTitle>레포츠</ThemeTitle>                                   
                        <Slider {...settings}>
                            {theme03.map((item,index) => {
                                return(
                                    <div key={index}>
                                        <IMG>
                                            <Opps src={item.imageUrl}></Opps>
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

                    <Theme04>      
                        <ThemeTitle>음식점</ThemeTitle>                                 
                        <Slider {...settings}>
                            {theme04.map((item,index) => {
                                return(
                                    <div key={index}>
                                        <IMG>
                                            <Opps src={item.imageUrl}></Opps>
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

                </Body>
            <Footer></Footer>
        </Div>
    );
};

export default Main;


const ThemeTitle = styled.div `
    width: 80px;
    height: 30px;
    margin: 0px 0px 0px auto;
    border: 1px solid black;
    border-radius: 20px;
    background-color: black;
    color: white;
    text-align: center;
    line-height: 30px;
    font-size: 15px;

    position: absolute;

    left: 10px;
    top: 10px;

    z-index: 2;
`
const Opps = styled.img `
    width: 100%;
    height: 100%;    
`
const IMG = styled.div `
    width: 100%; 
    height: 300px; 
`
const Star = styled.div `
    width: 214px;
    height: 50px;
    margin: 0px 0px 0px 0px;
    background-color: dodgerblue;
    text-align: center;
    line-height: 50px;
`
const Title = styled.div `
    width: 214px;
    height: 50px;
    margin: 0px 0px 0px px;
    background-color: dodgerblue;
    text-align: center;
    line-height: 50px;
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
    height: 200px;
    border: 1px solid grey;
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
    margin: 0px 0px 0px auto;
    border: 1px solid lightgrey;
    background-color: lightgrey;
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
    margin: 0px 0px 0px auto;
    border: 1px solid lightgrey;
    background-color: lightgrey;
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
    margin: 0px 0px 0px auto;
    border: 1px solid lightgrey;
    background-color: lightgrey;
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
    margin: 0px 0px 0px auto;
    border: 1px solid lightgrey;
    background-color: lightgrey;
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
    font-size: 15px;
    margin: 0px 0px 0px 0px;

    display: flex;

    z-index: 2;
`