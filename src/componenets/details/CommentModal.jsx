import React, { useRef, useState } from 'react'
import {useDispatch} from 'react-redux'
import { _deleteComment } from '../../redux/modules/comment';
import { FaStar } from 'react-icons/fa';
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import ModalPortal from '../modal/ModalPortal';
import Modal from '../modal/Modal';
import Star from '../star/Star';
import DetailRevise from './DetailRevise';

const CommentModal = ({close,comment}) => {
  const [modalOn, setModalOn] = useState(false);

  const handleModal = () => {
    setModalOn(false);
  };
  console.log(comment)
  const {id} = useParams();
  const dispatch = useDispatch();
  const node = useRef();
  
  return (
    <>
      {modalOn === true
      ? <DetailRevise comment={comment} handleModal={handleModal}/>
      :null
      }
      <div key={comment.comment_id} style={{borderBottom:"1px solid black"}}>
        <div>
          <div > 
            <p>{comment.title}</p>
            <p>{comment.content}</p>
            <div style={{  textAlign:"center"}}>
              {comment.imageList.map((image) => {
                return <img style={{width:"300px"}} alt='' src={image.imageUrl}/>
              })}
            </div>
            <div>
            <Star key={comment.comment_id} comment={comment}/>
            <button onClick={() =>{setModalOn(true)}}>수정하기</button>
            {/* <button>삭제하기</button> */}
            <button onClick={() => dispatch(_deleteComment(comment))}>삭제하기</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommentModal

