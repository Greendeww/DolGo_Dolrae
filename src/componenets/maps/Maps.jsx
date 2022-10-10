import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Map, MapMarker,MarkerClusterer, useMap, } from "react-kakao-maps-sdk";
import { useNavigate } from 'react-router-dom';
import { instance } from '../../shared/Api';
import MapInfo from './MapInfo';
import styled from "styled-components";
import Header from '../header/Header';

const Maps = () => {
const navigate = useNavigate();
const [positions, setPositions] = useState([]);
const [isOpen, setIsOpen] = useState(false)
// const fetch = async () => {
//     const response = await axios.get(`http://localhost:3001/positions`); 
//     setPositions(response.data)
//   }
//   useEffect(() => {
//     fetch()
//   }, []);
  const fetch = async () => {
    const response = await instance.get(`/api/auth/place/mypage`); 
    setPositions(response.data)
  }
  useEffect(() => {
    fetch()
  }, []);
  
  return (
    <>
    <MapDiv>
      <Header/>
      <MapBox>
      {/* <h1 style={{textAligin:"center",alginItmes:"center"}}>지도</h1> */}
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 36.2683,
          lng: 127.6358,
        }}
        style={{
          // 지도의 크기
          maxWidth:"428px",
          width: "100%",
          height: "450px",
          margin:"0 auto"
        }}
        level={13} // 지도의 확대 레벨
      >
        <MarkerClusterer
          averageCenter={false} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
          minLevel={12} // 클러스터 할 최소 지도 레벨
        >
           {positions.map((pos,index) => {
             return <MapInfo pos={pos} key={index}/>
           })}
        </MarkerClusterer>
      </Map>
      </MapBox>
    </MapDiv>
    </>
  )
}

export default Maps

const MapDiv = styled.div`
  max-width:428px;
  width:100%;
  margin:0 auto;
`
const MapBox = styled.div`
  max-width:428px;
  width:100%;
  margin-top:7.5rem;
`