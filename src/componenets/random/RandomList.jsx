import React from 'react'
import { instance } from '../../shared/Api';
import styled from "styled-components";
import { useState } from 'react';
import { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';

const RandomList = () => {
    // const [random, setRandom] = useState();
    // const fetch = async () => {
    //     const response = await instance.get(`/api/auth/place/random`); 
    //     console.log(response.data)
    //     setRandom(response.data)
    //     }
    // useEffect(() => {
    //     fetch()
    // }, []);


    return (
     <>
     <Box>
       <LocDiv>
         <PTitle>이번엔 <SpanRandom>춘천</SpanRandom> 어때요?</PTitle>
       </LocDiv>
       <TemaDiv>
         <TemaBox>
            <TemaP>
                <TemaName>관광</TemaName>
            </TemaP>
            <TemaImgBox>
                <TemaImg alt='' src='http://tong.visitkorea.or.kr/cms/resource/74/2648674_image2_1.jpg'/>
                <TemaDesc>
                    <div style={{display:"flex"}}>
                        <TemaTilte>월영교</TemaTilte>
                        <TemaStar>
                            <FaStar style={{color:"#fcc419",marginLeft:"0.5rem", marginRight:"0.3rem"}}/>
                            <div>
                                <span style={{fontWeight:"600"}}>4</span>
                                <span style={{color:"#8f8f8f"}}>/5</span>
                            </div>
                        </TemaStar>
                    </div>
                    <TemaHeart>♥</TemaHeart> 
                </TemaDesc>
            </TemaImgBox>
         </TemaBox>
         <TemaBox>
            <TemaP>
                <TemaName>관람</TemaName>
            </TemaP>
            <TemaImgBox>
                <TemaImg alt='' src='http://tong.visitkorea.or.kr/cms/resource/74/2648674_image2_1.jpg'/>
                <TemaDesc>
                    <div style={{display:"flex"}}>
                        <TemaTilte>월영교</TemaTilte>
                        <TemaStar>
                            <FaStar style={{color:"#fcc419",marginLeft:"0.5rem", marginRight:"0.3rem"}}/>
                            <div>
                                <span style={{fontWeight:"600"}}>4</span>
                                <span style={{color:"#8f8f8f"}}>/5</span>
                            </div>
                        </TemaStar>
                    </div>
                    <TemaHeart>♥</TemaHeart> 
                </TemaDesc>
            </TemaImgBox>
         </TemaBox>
         <TemaBox>
            <TemaP>
                <TemaName>액티비티</TemaName>
            </TemaP>
            <TemaImgBox>
                <TemaImg alt='' src='http://tong.visitkorea.or.kr/cms/resource/74/2648674_image2_1.jpg'/>
                <TemaDesc>
                    <div style={{display:"flex"}}>
                        <TemaTilte>월영교</TemaTilte>
                        <TemaStar>
                            <FaStar style={{color:"#fcc419",marginLeft:"0.5rem", marginRight:"0.3rem"}}/>
                            <div>
                                <span style={{fontWeight:"600"}}>4</span>
                                <span style={{color:"#8f8f8f"}}>/5</span>
                            </div>
                        </TemaStar>
                    </div>
                    <TemaHeart>♥</TemaHeart> 
                </TemaDesc>
            </TemaImgBox>
         </TemaBox>
         <TemaBox>
            <TemaP>
                <TemaName>식도락</TemaName>
            </TemaP>
            <TemaImgBox>
                <TemaImg alt='' src='http://tong.visitkorea.or.kr/cms/resource/74/2648674_image2_1.jpg'/>
                <TemaDesc>
                    <div style={{display:"flex"}}>
                        <TemaTilte>월영교</TemaTilte>
                        <TemaStar>
                            <FaStar style={{color:"#fcc419",marginLeft:"0.5rem", marginRight:"0.3rem"}}/>
                            <div>
                                <span style={{fontWeight:"600"}}>4</span>
                                <span style={{color:"#8f8f8f"}}>/5</span>
                            </div>
                        </TemaStar>
                    </div>
                    <TemaHeart>♥</TemaHeart> 
                </TemaDesc>
            </TemaImgBox>
         </TemaBox>
       </TemaDiv>
     </Box>
    </>
    )
    }

export default RandomList

const Box = styled.div`
    width: 100%;
    max-width:428px;
    margin: 0 auto;
    border:2px solid #79B9D3;
    line-height:40px;
    height:100%;
`;
const LocDiv = styled.div`
    padding-top:30px;
    text-align:center;
    color: #BFB8B8;
    padding-bottom:50px;
`;
const PTitle = styled.p`
    font-size:2.2rem;
`;
const SpanRandom = styled.span`
    font-size:3rem;
    font-weight:700;
    line-height:54.5px;
    color: #ACD4E4;
`;
const TemaDiv = styled.div`
  flex-shrink: 0;
  width:80%;
  justify-content:center;
  align-items:center;
  margin: 0 auto;
`;
const TemaBox = styled.div`
    width:100%;
    padding-bottom:30px;
`;
const TemaP = styled.div`
    display:flex;
    justify-content:space-between;
    padding-bottom:5px;
`;
const TemaName = styled.span`
    font-size:1.6rem;
    line-height:42.3px;
    color: #ffaeae;;
    font-weight:700;
`
const TemaHeart = styled.span`
    font-size: 2.1rem;
    line-height:0.8rem;
    cursor:pointer;
    color:#FF8585;
`
const TemaImgBox = styled.div`
  flex-shrink: 0;
  max-width:428px;
  width:100%;
  justify-content:center;
  align-items:center;
  margin: 0 auto;
`
const TemaImg = styled.img`
    width:100%;
    border-radius:20px;
`
const TemaDesc = styled.div`
    width:90%;
    text-align:start;
    margin: 0 auto;
    display:flex;
    justify-content:space-between;
`
const TemaTilte = styled.span`
    font-weight:700;
    font-size:1.1rem;
    line-height:1.3rem;
`
const TemaStar = styled.span`
    font-size:1.1rem;
    display:flex;
    line-height:1.1rem;
`