import React, { useRef } from 'react'
import {useDispatch} from 'react-redux'
import { _deleteComment } from '../../redux/modules/comment';
import { FaStar } from 'react-icons/fa';
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import Star from '../star/Star';

const CommentModal = ({close,comment}) => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const node = useRef();
  
  return (
    <>
      <div style={{borderBottom:"1px solid black"}}>
        <div>
          <div> 
            <p>{comment.title}</p>
            <p>{comment.content}</p>
            <div>
            <Star key={comment.comment_id} comment={comment}/>
            <button>수정하기</button>
            <button>삭제하기</button>
            {/* <button onClick={() => dispatch(_deleteComment(comment))}>삭제하기</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommentModal

