import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import { Map, MapMarker,MarkerClusterer, useMap, } from "react-kakao-maps-sdk";
import { useNavigate } from 'react-router-dom';
import dolphin from "../../assert/detail/dolphin_test.png";
import styled from "styled-components";
import MapModal from './MapModal';

const MapInfo = ({pos}) => {
  const navigate=useNavigate();
  const map = useMap()
  console.log(pos)
  const [isOpen, setIsOpen] = useState(false)
  const close = () => {
    setIsOpen(false)
  }
  
  
  const EventMarkerContainer = ({ position, content }) => {
    const map = useMap()
    const [isVisible, setIsVisible] = useState(false)
    
    return (
      
      <MapMarker
        position={position} // 마커를 표시할 위치
        // @ts-ignore
        onClick={(marker) => {map.panTo(marker.getPosition());setIsOpen(true)}}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
        clickable={true}
      >
        {isVisible && content}
      </MapMarker>
    )
  }
  return (
    <>    
        <EventMarkerContainer
        key={`${pos.lat}-${pos.lng}`}
        position={{
          lat: pos.mapY,
          lng: pos.mapX,
        }}
        content={pos.title}
        onClick={(marker) => {map.panTo(marker.getPosition());setIsOpen(true)}}
      >
      </EventMarkerContainer>  
      {isOpen && (
        <MapModal pos={pos} close={close}/> 
      )} 
    </>
  )
}

export default MapInfo

// const DescDiv = styled.div`
//   display:flex;
//   width:60%;
//   max-width:16rem;
//   height:100px;
// `
// const Img = styled.img`
//   max-width:6rem;
// `