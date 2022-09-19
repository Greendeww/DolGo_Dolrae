/* global kakao */
import React from 'react'
import styled from "styled-components";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination} from 'swiper';
import { useEffect,useState } from 'react';
import { Map, MapMarker } from "react-kakao-maps-sdk";
import DetailForm from '../componenets/details/DetailForm';
import Comments from '../componenets/details/Comments';
import { useDispatch } from 'react-redux';
import { onLikePost } from '../redux/modules/post';
import { useParams, Link } from 'react-router-dom';

const Detail = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false)
  const [formOpen,setFormOpen] = useState(false)
  const close = () => {
    setFormOpen(false);
  }
  const {kakao} = window

  const onLike = async (event) => {
    event.preventDefault();
    dispatch(onLikePost(id));
  };
  
  return (
    <>
    <div>
      <Box>
        <Cover>
          <div>
          <ImgCover>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation
                pagination={{ clickable: true }}
                >
                <SwiperSlide><Img alt='' src='data:image/jpeg;base64,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'/></SwiperSlide>
                {/* <SwiperSlide><Img alt='' src={data.imgUrl}/></SwiperSlide> */}
                {/* {data.immap((data) => (
                  <div key={data.id}>
                      <SwiperSlide><Img alt='' src={data.image}/></SwiperSlide>
                  </div>
                  ))} */}
            </Swiper>
          </ImgCover>
          </div>
        </Cover>
        <Title>
          <div>
            <span>이름</span> 
            <span>경복궁</span>   
          </div>
          <div>
            <span onClick={onLike}>♥ 찜하기</span> 
          </div>
          </Title> 
          <Location>
            <p>주소</p>
            <p>서울특별시 경복로 경복길</p>
            <MapDiv>
              <Map
                center={{ lat: 33.5563, lng: 126.79581 }}
                style={{ width: "100%", height: "360px" }}
              >
              <MapMarker // 인포윈도우를 생성하고 지도에 표시합니다
                position={{
                  // 인포윈도우가 표시될 위치입니다
                  lat: 33.5563,
                  lng: 126.79581,
                }}
              /> 
              </Map>
            </MapDiv>
          </Location>
          <DescDiv>
            <p>설명</p>
            <p>서울특별시 경복로 경복길서울특별시 경복로 경복길서울특별시 경복로 경복길
            서울특별시 경복로 경복길서울특별시 경복로 경복길서울특별시 경복로 경복길
            서울특별시 경복로 경복길서울특별시 경복로 경복길서울특별시 경복로 경복길
            서울특별시 경복로 경복길서울특별시 경복로 경복길서울특별시 경복로 경복길
            서울특별시 경복로 경복길서울특별시 경복로 경복길
            </p>
          </DescDiv>
          <div>
            <a href = {`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=${id}`}>
              <img alt='' src='https://www.siksinhot.com/static2/images/mobile/bg_site_img01.gif'/>
            </a>
            <a href = {`https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&sq=&o=&q=${id}`}>
              <img alt='' src='https://www.siksinhot.com/static2/images/mobile/bg_site_img02.gif'/>
            </a>
            <a href = {`https://www.google.com/search?q=${id}`}>
              <img alt='' src='https://www.siksinhot.com/static2/images/mobile/bg_site_img03.gif'/>
            </a>
          </div>
          {formOpen === true
          ?<DetailForm close={close}/>
          :null}
          <CommentDiv>
              <p>후기</p>
              <button onClick={() => {setFormOpen(true);console.log("작동")}}>후기작성</button>
              {/* <div>
                  {Comment.map((comment) => {
                    return <Comments title={title}/>
                  })}
              </div> */}
          </CommentDiv>
      </Box>
    </div>
    </>
  )
}

export default Detail

const Box = styled.div`
  width: 100%;
  max-width:1100px;
  margin: 0 auto;
`;
const Cover = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    /* background: rgb(249, 249, 249); */
    padding-top: 40px;
    width:1100px;
    margin: 0 auto;
    margin-bottom:60px;
`
const ImgCover = styled.div`
    flex-shrink: 0;
    width: 800px;
    height: 600px;
    min-width:420px;
    min-height:420px;
    justify-content:center;
    align-items:center;
    /* padding-right:200px; */
`
const Img = styled.img`
    border: 1px solid rgb(238, 238, 238);
    position: relative;
    width: 100%;
    height: 100%;
`
const Title = styled.div`
  margin:0px 150px 0px 150px;
  justify-content:space-between;
  display:flex;
`
const Location = styled.div`
  width:100%;
  justify-content:center;
  align-items:center;
`
const MapDiv =styled.div`
  width: 60%;
  height: 100%;
  justify-content:center;
  align-items:center;
  margin:0 auto;
`
const DescDiv = styled.div`
  width:80%;
  justify-content:center;
  align-items:center;
  margin:0 auto;
`
const CommentDiv = styled.div`
  border-top: 1px solid rgb(204, 204, 204);
  text-align:start;
`