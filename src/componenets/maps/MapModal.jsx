import React from 'react'
import { useNavigate } from 'react-router-dom'
import dolphin from "../../assert/detail/dolphin_test.png";
import { Map, MapMarker,MarkerClusterer, useMap, } from "react-kakao-maps-sdk";
import styled from "styled-components";
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import ThemeList from '../theme/ThemeList'

const MapModal = ({pos, close, setIsOpen}) => {
    console.log(pos)
    const modalRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        document.addEventListener('mousedown', clickModalOutside)

        return () => {
            document.removeEventListener('mousedown', clickModalOutside);
        }
    })

    const clickModalOutside = event => {
        if( !modalRef.current.contains(event.target)){
            close();
        }
    };

    return (
        <>
            <DescDiv ref={modalRef}>
                {pos.image === null
                ?<NoneImg alt='mapsImage' src={dolphin}/>
                :<Img alt='mapsImage' src={pos.image}/> 
                }
                <TotalDiv>
                    <div style={{ padding: "5px", color: "#000" }}>
                        <TitleDIv>
                            <TitleB>{pos.title}</TitleB>
                        </TitleDIv>
                        <StarDiv>
                            <TemaP><ThemeList post={pos}/></TemaP>
                            <FaStar style={{color:"#fcc419"}}/>
                            <StarP>{pos.star}</StarP>
                        </StarDiv>
                        <MapBut onClick={() => navigate('/detail/'+pos.id)}>상세보기</MapBut>
                    </div>
                </TotalDiv>
            <DeleteDiv>
                <DeleteImg
                alt="close"
                width="30px"
                height="30px"
                src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
                style={{
                    cursor: "pointer",
                    textAlign:"end",
                    // position:"absolute"
                    // marginLeft:"3rem"
                }}
                onClick={close}
                    />
            </DeleteDiv>
            </DescDiv>
        </>
    )
}

export default MapModal
const DescDiv = styled.div`
  display:flex;
  width:99%;
  max-width:428px;
  border: 2px solid #79B9D3;
  margin:0 auto;
  /* max-height:8.7rem; */
`
const Img = styled.img`
  width:100%;
  max-width:10rem;
  height:8.7rem;
`
const NoneImg =styled.img`
  width:100%;
  max-width:10rem;
  height:8.7rem;
`
const TotalDiv =styled.div`
    width:98%;
    padding-top:1rem;
    /* display:flex; */
`
const TitleDIv = styled.div`
    margin-top:0.8rem;
    width:100%;
    display:flex;
    margin-bottom:0.3rem;
`
const TitleB = styled.p`
    font-weight:700;
    font-size:1.25rem;
    color:#79B9D3;
`
const TemaP = styled.p`
    color:#8f8f8f;
    font-size:0.9rem;
    line-height:1rem;
    margin-right:0.5rem;
`
const StarDiv = styled.div`
    display:flex;
    margin-bottom:0.7rem;
    align-items:center;
`
const StarP = styled.p`
    margin-top:0.2rem;
    line-height:1.2rem;
    margin-left:0.2rem;
    font-weight:600;
`
const DeleteDiv = styled.div`
    display:flex;
    justify-content:flex-end;
    text-align:end;  
`
const DeleteImg = styled.img`
    
`
const MapBut = styled.button`
    cursor:pointer;
    color:white;
    background-color:#79B9D3;
    border:0px;
    height:2.5rem;
    border-radius:5px;
    line-height:2.5rem;
    /* margin-right:1rem; */
    width:50%;
    /* margin-top:1rem; */
`