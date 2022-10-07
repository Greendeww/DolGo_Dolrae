<<<<<<< HEAD
import React, { useRef, useState } from 'react'
import {useDispatch} from 'react-redux'
import { _deleteComment } from '../../redux/modules/comment';
import { useNavigate, useParams } from 'react-router-dom';
import Star from '../star/Star';
import DetailRevise from './DetailRevise';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
=======
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { _deleteComment } from "../../redux/modules/comment";
import { useNavigate, useParams } from "react-router-dom";
import Star from "../star/Star";
import DetailRevise from "./DetailRevise";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper";
>>>>>>> 2a94b6ea2b8ad9b23a736c3482abc959172708d3
import styled from "styled-components";
import ModalPortal from "../modal/ModalPortal";
import Modal from "../modal/Modal";

const CommentModal = ({ comment }) => {
  console.log(comment);
  const [modalOn, setModalOn] = useState(false);
  const nickname = localStorage.getItem("nickname");
  console.log(modalOn);
  const navigate = useNavigate();

  const handleModal = () => {
    setModalOn(false);
  };
  const deleteModal = () => {
<<<<<<< HEAD
    setModalOn(true)
  }
  
  return (
    <>
      <ComDiv key={comment.comment_id}>
        <BoxDiv>
          <div> 
            <div style={{display:"flex",alignItems:"center"}}>
            </div>
            <div style={{  textAlign:"center"}}>
              {comment.imageList.map((image,index) => {
                return <DetailImg key={index} alt='' src={image}/>
              })}
            </div>
            <Star key={comment.comment_id} comment={comment}/>
            <p>{comment.content}</p>
            {nickname === comment.nickname
            ?<ButtonDiv>
              <ReviseBut onClick={() =>navigate('/detail/update/'+comment.place_id+'/'+comment.comment_id)}>수정하기</ReviseBut>
              <DelBut onClick={deleteModal}>삭제하기</DelBut>
=======
    setModalOn(true);
  };
  const dispatch = useDispatch();

  return (
    <>
      <ComDiv key={comment.comment_id}>
        <div>
          <div>
            <div style={{ display: "flex", alignItems: "center" }}></div>
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
            <div style={{ textAlign: "center" }}>
              {comment.imageList.map((image, index) => {
                return <DetailImg key={index} alt="" src={image} />;
              })}
            </div>
            <Star key={comment.comment_id} comment={comment} />
            <p style={{ marginTop: "10px"}}>{comment.content}</p>
            <ButtonDiv>
              <ReviseBut
                onClick={() =>
                  navigate(
                    "/detail/update/" +
                      comment.place_id +
                      "/" +
                      comment.comment_id
                  )
                }
                style={{ fontWeight: "bold" }}
              >
                수정하기
              </ReviseBut>
              <DelBut onClick={deleteModal} style={{ fontWeight: "bold" }}>
                삭제하기
              </DelBut>
>>>>>>> 2a94b6ea2b8ad9b23a736c3482abc959172708d3
            </ButtonDiv>
            :null
            }
            <ModalPortal>
              {modalOn && <Modal onClose={handleModal} comment={comment} />}
            </ModalPortal>
          </div>
        </BoxDiv>
      </ComDiv>
    </>
  );
};

export default CommentModal;

const ComDiv = styled.div`
<<<<<<< HEAD
  width:95%;
  padding-bottom:2rem;
  margin:0 auto;
`
const BoxDiv = styled.div`
    margin:0rem 1rem 0rem 1rem;
`
=======
  padding-bottom: 2rem;
  margin: 0rem 1rem 0rem 1rem;
`;
>>>>>>> 2a94b6ea2b8ad9b23a736c3482abc959172708d3
const ReviseBut = styled.button`
  cursor: pointer;
  font-weight: 600;
  color: #ABD4E2;
  background-color: white;
  border: 2px solid #ABD4E2;
  height: 2.5rem;
  margin-right: 0.5rem;
  border-radius: 5px;
  line-height: 2.1rem;
  /* margin-left:1rem; */
  width: 100%;
`;
const DelBut = styled.button`
  cursor: pointer;
  color: white;
  background-color: #ABD4E2;
  border: 0px;
  height: 2.5rem;
  border-radius: 5px;
  line-height: 2.5rem;
  /* margin-right:1rem; */
  width: 100%;
`;
const DetailImg = styled.img`
  width: 300px;
  border-radius: 20px;
  margin-top: 1rem;
  /* border: 1px solid rgb(195, 194, 204); */
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
