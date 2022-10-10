import userEvent from "@testing-library/user-event";
import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentModal from "./CommentModal";
import styled from "styled-components";
import { FaImage } from "react-icons/fa";

const Comments = ({ comment, arr, isSelected, handleClick, elementIndex }) => {
  // const ids = comment.length
  const { id } = useParams();
  let [modal, setModal] = useState(false);
  // const close = (idx) => {
  //   const newComment = Array(comment.length).fill(false);
  //   newComment[idx] = true;
  //   setModal(newComment)
  // };
  const number = [...arr].reverse();
  console.log(number);
  // comment.number = number
  console.log(comment.createdAt);
  const date = comment?.createdAt?.substring(2, 10);
  console.log(date);
  return (
<<<<<<< HEAD
    <> 
      {modal === false
      ?
      <CommentDiv>
        <ContentDiv onClick={() => {handleClick(elementIndex);setModal(true)}}>
        {/* {number.map((number) => {
         return <Numbers number={number}/>   
        })} */}
        <p style={{width: "9rem"}}>{date}</p>
        {comment.imageList.length === 0
        ?<span style={{cursor:"pointer", color:"#EBF8FF", fontSize:"1.5rem",lineHeight:"3.4rem"}}>
          <FaImage style={{marginTop:"1.3rem"}}/></span> 
        :<span style={{cursor:"pointer", color:"black", fontSize:"1.5rem",lineHeight:"3.4rem"}}>
          <FaImage style={{marginTop:"1.3rem"}}/></span> 
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
        <p style={{width: "9rem"}}>{date}</p>
        {comment.imageList.length === 0
        ?<span style={{cursor:"pointer", color:"#EBF8FF", fontSize:"1.5rem",lineHeight:"3.4rem"}}>
          <FaImage style={{marginTop:"1.3rem"}}/></span> 
        :<span style={{cursor:"pointer", color:"black", fontSize:"1.5rem",lineHeight:"3.4rem"}}>
          <FaImage style={{marginTop:"1rem"}}/></span> 
        }
        <PCom>{comment.title}</PCom>
      </ContentDiv>
      <div id="state">
        {modal === true
        ? <CommentModal key={comment.comment_id} comment={comment}/>
        :null
        }
      </div>
    </CommentDiv>
      }
=======
    <>
      {modal === false ? (
        <CommentDiv>
          <ContentDiv
            onClick={() => {
              handleClick(elementIndex);
              setModal(true);
            }}
          >
            {/* {number.map((number) => {
         return <Numbers number={number}/>   
        })} */}
            <p style={{ width: "9rem" }}>{date}</p>
            {comment.imageList.length === 0 ? (
              <span
                style={{
                  cursor: "pointer",
                  color: "#EBF8FF",
                  fontSize: "1.5rem",
                  lineHeight: "3.4rem",
                }}
              >
                <FaImage />
              </span>
            ) : (
              <span
                style={{
                  cursor: "pointer",
                  color: "black",
                  fontSize: "1.5rem",
                  lineHeight: "3.4rem",
                }}
              >
                <FaImage style={{ marginTop: "1rem" }} />
              </span>
            )}
            <PCom>{comment.title}</PCom>
            {/* <p>닉네임</p> */}
          </ContentDiv>
          <div style={{ cursor: "pointer" }} id="state">
            {modal === true ? (
              <CommentModal key={comment.comment_id} comment={comment} />
            ) : null}
          </div>
        </CommentDiv>
      ) : (
        <CommentDiv>
          <ContentDiv
            onClick={() => {
              handleClick(elementIndex);
              setModal(false);
            }}
          >
            <p style={{ width: "9rem" }}>{date}</p>
            {comment.imageList.length === 0 ? (
              <span
                style={{
                  cursor: "pointer",
                  color: "#EBF8FF",
                  fontSize: "1.5rem",
                  lineHeight: "3.4rem",
                }}
              >
                <FaImage />
              </span>
            ) : (
              <span
                style={{
                  cursor: "pointer",
                  color: "black",
                  fontSize: "1.5rem",
                  lineHeight: "3.4rem",
                }}
              >
                <FaImage style={{ marginTop: "1rem" }} />
              </span>
            )}
            <PCom>{comment.title}</PCom>
          </ContentDiv>
          <div style={{ cursor: "pointer" }} id="state">
            {modal === true ? (
              <CommentModal key={comment.comment_id} comment={comment} />
            ) : null}
          </div>
        </CommentDiv>
      )}
>>>>>>> 884b2218cf86fa79c5a8028602d4770bb132f4bc
    </>
  );
};

export default Comments;

const PCom = styled.p`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const CommentDiv = styled.div`
  /* display:flex; */
  /* cursor:pointer;
  margin-top:10px;
  text-align:center; */
<<<<<<< HEAD
  background-color:#EBF8FF;
=======
  background-color: #eef6fa;
>>>>>>> 884b2218cf86fa79c5a8028602d4770bb132f4bc
  /* border:5px solid #EBF8FF; */
  border-radius: 20px;
  margin-top: 0.8rem;
`;
const ContentDiv = styled.div`
  width: 95%;
  display: flex;
  cursor: pointer;
  margin-top: 10px;
  text-align: center;
  align-items: center;
  margin: 0px auto;
`;
