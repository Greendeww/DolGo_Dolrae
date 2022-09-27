import React, { useRef, useState } from 'react'
import {useDispatch} from 'react-redux'
import { _deleteComment } from '../../redux/modules/comment';
import { useNavigate, useParams } from 'react-router-dom';
import Star from '../star/Star';
import DetailRevise from './DetailRevise';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation,Pagination} from 'swiper';
import styled from "styled-components";

const CommentModal = ({comment}) => {
  console.log(comment)
  const [modalOn, setModalOn] = useState(false);
  const navigate = useNavigate();
  
  const handleModal = () => {
    setModalOn(false);
  };
  const {id} = useParams();
  const dispatch = useDispatch();
  const node = useRef();
  
  return (
    <>
      <ComDiv key={comment.comment_id}>
        <div>
          <div> 
            <div style={{display:"flex",alignItems:"center"}}>
              {/* <p>{comment.title}</p> */}
            </div>
            {/* <Swiper
              modules={[Navigation,Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              navigation
              pagination={{ clickable: true }}
              >   
               {comment.imageList.map((image,index) => {
                return <SwiperSlide><img key={index} style={{width:"300px",borderRadius:"20px"}} alt='' src={image}/></SwiperSlide>
              })}
            </Swiper> */}
            <div style={{  textAlign:"center"}}>
              {comment.imageList.map((image,index) => {
                return <DetailImg key={index} alt='' src={image}/>
              })}
            </div>
            <Star key={comment.comment_id} comment={comment}/>
            <p>{comment.content}</p>
            <div style={{display:"flex", justifyContent:"center" }}>
            <ReviseBut onClick={() =>navigate('/detail/update/'+comment.place_id+'/'+comment.comment_id)}>수정하기</ReviseBut>
            <DelBut onClick={() => dispatch(_deleteComment(comment))}>삭제하기</DelBut>
            </div>
          </div>
        </div>
      </ComDiv>
    </>
  )
}

export default CommentModal

const ComDiv = styled.div`
  padding-bottom:2rem;
  margin:0rem 1rem 0rem 1rem;
`
const ReviseBut = styled.button`
  cursor:pointer;
  font-weight:600;
  color:#79B9D3;
  background-color:white;
  border:3px solid #79B9D3;
  height:2.5rem;
  margin-right:0.5rem;
  border-radius:5px;
  line-height:2.1rem;
  /* margin-left:1rem; */
  width:100%;
`
const DelBut = styled.button`
  cursor:pointer;
  color:white;
  background-color:#79B9D3;
  border:0px;
  height:2.5rem;
  border-radius:5px;
  line-height:2.5rem;
  /* margin-right:1rem; */
  width:100%;
`
const DetailImg = styled.img`
  width:300px;
  border-radius:20px;
  margin-top:1rem;
  /* border: 1px solid rgb(195, 194, 204); */
`