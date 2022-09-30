import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation,Pagination} from 'swiper';
import styled from "styled-components";


const DetailImage = ({post}) => {
    console.log(post)
  return (
    <div>
        <Swiper
        modules={[Navigation,Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        pagination={{ clickable: true }}
        >   
        {post && post?.imageUrl.map((image,index) => {
          return  <SwiperSlide><Img key={index} alt='' src={image}/></SwiperSlide>
        })}
        </Swiper>
    </div>
  )
}

export default DetailImage
const Img = styled.img`
  border: 1px solid rgb(238, 238, 238);
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  margin-bottom:20px;
`