import React from "react";
import styled from "styled-components";
import Header from "../componenets/header/Header";
import Footer from "../componenets/footer/Footer";
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getApi } from "../shared/Api";
import { FaStar } from 'react-icons/fa';
import LOGO from "../assert/logo/Logo.png"


const Main = () => {
    
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
        // console.log(response.data.foodList);
        console.log(response.data.foodList);
        setTheme01([response.data.tourList[0],response.data.tourList[1],response.data.tourList[2],response.data.tourList[3],response.data.tourList[4],response.data.tourList[5],response.data.tourList[6],response.data.tourList[7],response.data.tourList[8],response.data.tourList[9]]);
        setTheme02([response.data.museumList[0],response.data.museumList[1],response.data.museumList[2],response.data.museumList[3],response.data.museumList[4],response.data.museumList[5],response.data.museumList[6],response.data.museumList[7],response.data.museumList[8],response.data.museumList[9]]);
        setTheme03([response.data.activityList[0],response.data.activityList[1],response.data.activityList[2],response.data.activityList[3],response.data.activityList[4],response.data.activityList[5],response.data.activityList[6],response.data.activityList[7],response.data.activityList[8],response.data.activityList[9]]);
        setTheme04([response.data.foodList[0],response.data.foodList[1],response.data.foodList[2],response.data.foodList[3],response.data.foodList[4],response.data.foodList[5],response.data.foodList[6],response.data.foodList[7],response.data.foodList[8],response.data.foodList[9]]);
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
                    <Festival>이 달의 축제</Festival>
                    <Banner></Banner>
                    <Top10>TOP 10</Top10>
                    <Theme01>
                        <ThemeTitle>관광지</ThemeTitle>                                       
                        <Slider {...settings}>
                            {theme01.map((item,index) => {
                                return(
                                    <div key={index}>
                                        <IMG>
                                            {item.image === null
                                            ?<Opps alt='' src={LOGO}/>
                                            :<Opps alt='' src={item.image}/>                                                                                                                               
                                            }
                                        </IMG>
                                        <Text>
                                            <Title>{item.title}</Title>
                                            <Star>{item.star} 점 『<FaStar style={{color:"#fcc419"}}/>』</Star>
                                        </Text>
                                    </div>
                                )
                            })}
                        </Slider>
                          
                    </Theme01>

                    <Theme02> 
                        <ThemeTitle>문화시설</ThemeTitle>                                      
                        <Slider {...settings}>
                            {theme02.map((item,index) => {
                                return(
                                    <div key={index}>
                                        <IMG>
                                            {item.image === null
                                            ?<Opps alt='' src={LOGO}/>
                                            :<Opps alt='' src={item.image}/>
                                            }
                                        </IMG>
                                        <Text>
                                            <Title>{item.title}</Title>
                                            <Star>{item.star} 점 『<FaStar style={{color:"#fcc419"}}/>』</Star>
                                        </Text>
                                    </div>
                                )
                            })}
                        </Slider>
                            
                    </Theme02>

                    <Theme03>    
                        <ThemeTitle>레포츠</ThemeTitle>                                   
                        <Slider {...settings}>
                            {theme03.map((item,index) => {
                                return(
                                    <div key={index}>
                                        <IMG>
                                            {item.image === null
                                            ?<Opps alt='' src={LOGO}/>
                                            :<Opps alt='' src={item.image}/>
                                            }
                                        </IMG>
                                        <Text>
                                            <Title>{item.title}</Title>
                                            <Star>{item.star} 점 『<FaStar style={{color:"#fcc419"}}/>』</Star>
                                        </Text>
                                    </div>
                                )
                            })}
                        </Slider>
                            
                    </Theme03>

                    <Theme04>      
                        <ThemeTitle>음식점</ThemeTitle>                                 
                        <Slider {...settings}>
                            {theme04.map((item,index) => {
                                return(
                                    <div key={index}>
                                        <IMG>
                                            {item.image === null
                                            ?<Opps alt='' src={LOGO}/>
                                            :<Opps alt='' src={item.image}/>
                                            }
                                        </IMG>
                                        <Text>
                                            <Title>{item.title}</Title>
                                            <Star>{item.star} 점 『<FaStar style={{color:"#fcc419"}}/>』</Star>
                                        </Text>
                                    </div>
                                )
                            })}
                        </Slider>
                            
                    </Theme04>

                </Body>
            <Footer></Footer>
        </Div>
    );
};

export default Main;


const ThemeTitle = styled.div `
    font-family: 'Inter';   
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 150px;
    letter-spacing: -0.05em;

    width: 428px;
    height: 150px;

    color: #FFAEAE;

    z-index: 2;
`
const Opps = styled.img `
    width: 85%;
    height: 85%;
    background-color: rgba(121, 185, 211, 0.5);

    margin: 0% auto auto auto;

    border-radius: 30px;
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
`
const Title = styled.div `
    width: 214px;
    height: 50px;
    margin: 0px 0px 0px px;
    background-color: #79B9D3;
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
const Festival = styled.div `
    width: 428px;
    height: 150px;
    border: 1px solid #79B9D3;

    text-align: center;
    line-height: 150px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size: 40px;

    color: #79B9D3;
`
const Banner = styled.div `
    width: 428px;
    height: 200px;
    border: 1px solid #79B9D3;
`
const Top10 = styled.div `
    width: 428px;
    height: 150px;
    border: 1px solid #79B9D3;

    text-align: center;
    line-height: 150px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    
    color: #79B9D3;
`
const Theme01 = styled.div `
    width: 428px;
    
    border: 1px solid #79B9D3;
    text-align: center;
    line-height: 100px;
    font-size: 15px;
    
    position: relative;
`
const Theme02 = styled.div `
    width: 428px;
        
    border: 1px solid #79B9D3;
    text-align: center;
    line-height: 100px;
    font-size: 15px;

    position: relative;
`
const Theme03 = styled.div `
    width: 428px;
        
    border: 1px solid #79B9D3;
    text-align: center;
    line-height: 100px;
    font-size: 15px;

    position: relative;
`
const Theme04 = styled.div `
    width: 428px;
        
    border: 1px solid #79B9D3;
    text-align: center;
    line-height: 100px;
    font-size: 15px;

    position: relative;
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