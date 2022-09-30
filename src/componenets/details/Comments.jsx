import userEvent from '@testing-library/user-event';
import React, {useState, useRef, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import CommentModal from './CommentModal';
import styled from "styled-components";


const Comments = ({comment,arr,isSelected, handleClick, elementIndex}) => {
  console.log(arr)
  console.log(comment)
  const ids = comment.length
  const {id} = useParams();
  let [modal, setModal] = useState(false);
  // const close = (idx) => {
  //   const newComment = Array(comment.length).fill(false);
  //   newComment[idx] = true;
  //   setModal(newComment)
  // };
  const number = [...arr].reverse()
  // comment.number = number
  console.log(comment.number)
  return (
    <> 
      
      {modal === false
      ?
      <CommentDiv>
        <ContentDiv onClick={() => {handleClick(elementIndex);setModal(true)}}>
        <p style={{width: "6rem"}}>{comment.comment_id}</p>
        {comment.imageList.length === 0
        ?<span style={{cursor:"pointer", color:"#EBF8FF", fontSize:"30px",lineHeight:"3.4rem"}}>♥</span> 
        :<span style={{cursor:"pointer", color:"#FF8585", fontSize:"30px",lineHeight:"3.4rem"}}>♥</span> 
        }
        <PCom >{comment.title}</PCom>
        {/* <p>닉네임</p> */}
        </ContentDiv>
        <div style={{cursor:"pointer"}} id="state">
          {modal === true
          ? <CommentModal key ={comment.comment_id} comment={comment} />
          :null
          }
        </div>
      </CommentDiv>
      :<CommentDiv>
       <ContentDiv onClick={() => {handleClick(elementIndex);setModal(false)}}>
        <p style={{width: "6rem"}}>{comment.comment_id}</p>
        {comment.imageList.length === 0
        ?<span style={{cursor:"pointer", color:"#EBF8FF", fontSize:"30px",lineHeight:"3.4rem"}}>♥</span> 
        :<span style={{cursor:"pointer", color:"#FF8585", fontSize:"30px",lineHeight:"3.4rem"}}>♥</span> 
        }
        <PCom>{comment.title}</PCom>
      </ContentDiv>
      <div style={{cursor:"pointer"}} id="state">
        {modal === true
        ? <CommentModal key={comment.comment_id} comment={comment}/>
        :null
        }
      </div>
    </CommentDiv>
      }
    </>
  )
}

export default Comments

const PCom = styled.p`
  width:100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
const CommentDiv = styled.div`
  /* display:flex; */
  /* cursor:pointer;
  margin-top:10px;
  text-align:center; */
  background-color:#EBF8FF;
  /* border:5px solid #EBF8FF; */
  border-radius:20px;
`
const ContentDiv = styled.div`
  display:flex;
  cursor:pointer;
  margin-top:10px;
  text-align:center;
  align-items:center;
`;