import React, { useRef, useState } from 'react'
import {useDispatch} from 'react-redux'
import { _deleteComment } from '../../redux/modules/comment';
import { FaStar } from 'react-icons/fa';
import styled from "styled-components";
import { useNavigate, useParams } from 'react-router-dom';
import ModalPortal from '../modal/ModalPortal';
import Modal from '../modal/Modal';
import Star from '../star/Star';
import DetailRevise from './DetailRevise';

const CommentModal = ({close,comment}) => {
  const [modalOn, setModalOn] = useState(false);
  const navigate = useNavigate();
  
  const handleModal = () => {
    setModalOn(false);
  };
  console.log(comment)
  const {id} = useParams();
  const dispatch = useDispatch();
  const node = useRef();
  
  return (
    <>
      <div key={comment.comment_id} style={{borderTop:"1px solid rgb(195, 194, 204)"}}>
        <div>
          <div style={{marginLeft:"20px"}} > 
            <div style={{display:"flex",alignItems:"center"}}>
              <p>{comment.title}</p>
              <Star key={comment.comment_id} comment={comment}/>
            </div>
            <p>{comment.content}</p>
            <div style={{  textAlign:"center"}}>
              {comment.imageList.map((image,index) => {
                return <img key={index} style={{width:"300px",borderRadius:"20px"}} alt='' src={image.imageUrl}/>
              })}
            </div>
            <div style={{display:"flex", justifyContent:"flex-end" }}>
            <button style={{cursor:"pointer",color:"white",backgroundColor:"#5f0080",border:"0px",height:"2rem",marginRight:"0.5rem",borderRadius:"5px",lineHeight:"2rem"}} onClick={() =>navigate('/detail/update/'+comment.place_id+'/'+comment.comment_id)}>수정하기</button>
            <button style={{cursor:"pointer",color:"white",backgroundColor:"#5f0080",border:"0px",height:"2rem",borderRadius:"5px",lineHeight:"2rem"}} onClick={() => dispatch(_deleteComment(comment))}>삭제하기</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommentModal

