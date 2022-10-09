import React from 'react'
import { useState } from 'react';
import styled from "styled-components";
import ReviewModal from './ReviewModal';


const MypgReview = ({item}) => {
    const [modal, setModal] = useState(false);

    return (
      <>
        {modal === false
        ?
        <>     
        <Comment
            onClick={() => setModal(true)}
        >
            <div style={{ fontWeight: "bold" }}><p>{item.placeTitle}</p></div>
            <div><p>{item.title}</p></div>
        </Comment>
        {modal === true
        ? <ReviewModal key ={item.comment_id} item={item} />
        :null
        }
        </>     
        :  
        <>
        <Comment
            onClick={() => setModal(false)}
        >
            <div style={{ fontWeight: "bold" }}><p>{item.placeTitle}</p></div>
            <div><p>{item.title}</p></div>
        </Comment>
        {modal === true
        ? <ReviewModal key ={item.comment_id} item={item} />
        :null
        }
        </>        
        }
      </>
    )
}

export default MypgReview

const Comment = styled.div`
  width: 410px;
  height: 60px;
  margin: 20px auto;
  background: #eef6fa;
  border-radius: 15px;
  display: flex;
  gap: 30px;

  & div {
    align-items: center;
    position: relative;
    left: 15px;
    top: 17px;
    font-size: 20px;
    width:45%;
    p{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width:100%;
  }
  }

  &:hover {
    cursor: pointer;
  }

`;
const CommetnList =styled.div`
  width: 410px;
  height: 60px;
  margin: 20px auto;
  background: #eef6fa;
  border-radius: 15px;
  display: flex;
  gap: 30px;
  `