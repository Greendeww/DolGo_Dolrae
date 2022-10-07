import React, { useEffect, useState } from 'react'
import Paginations from '../pagination/Paginations';
import axios from 'axios';
import styled from "styled-components";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Comments from './Comments';
import { _getComments } from '../../redux/modules/comment';

const Review = ({comment}) => {
const navigate = useNavigate();
const {id} = useParams();
const nickname = localStorage.getItem("nickname");
const [commentList,setCommentList] = useState([...comment].reverse())
const [currentComments,setCurrnetComments] = useState([])
const [modal, setModal] = useState(false);
const [arr, setArr] = useState([])
const [number,setNumber] = useState([])
const [page, setPage] = useState(1);
const [postPerPage] = useState(3)
const indexOfLastPost = page*postPerPage;
const indexOfFirstPage = indexOfLastPost - postPerPage

    useEffect(() => {
        // setCommentList([...comment].reverse())
        setCurrnetComments(commentList.slice(indexOfFirstPage, indexOfLastPost))
    },[indexOfFirstPage,indexOfLastPost,page,comment]);
  
    const handlePageChange = (page) => {
        setPage(page)
      }

    useEffect(() => {
      for(let i=0; i<comment.length; i++){
        arr.push(i+1)
        const set = new Set(arr)
        number.push(set)
      }
    },[])
    const close = (idx) => {
      const newComment = Array(comment.length).fill(false);
      newComment[idx] = true;
      setModal(newComment)
    };
    const noLogin = (e) => {
      e.preventDefault();
      alert('로그인이 필요한 서비스 입니다')
      navigate('/login' )
    }
  return (
    <div>
        <CommentDiv>
          <p>Review</p>
            <div>
                {currentComments.map((comment,index) => {
                return <Comments comment={comment} key={index} arr={arr} isSelected={modal[index]} handleClick={close} elementIndex={index}/>
                })}
            </div>
            <ButDiv>
            {nickname === null
            ?<FormBut onClick={noLogin}>후기작성</FormBut>
            :<FormBut onClick={() => navigate('/detail/form/'+ id)}>후기작성</FormBut>
            }
            </ButDiv>
            <p style={{color:"white"}}>공백</p>
            <Paginations
            page={page}
            count={comment.length}
            setPage={handlePageChange}
            postPerpage={[postPerPage]}
            />
        </CommentDiv>
    </div>
  )
}

export default Review
const CommentDiv = styled.div`
  border-top: 3px solid #522772;
  /* border-bottom: 3px solid #522772; */
  text-align:start;
  margin-top:10px;
  /* width:90%;
  margin: auto; */
`
const ButDiv = styled.div`
 display:flex;
 justify-content:flex-end;
 margin-top:60px;
`
const FormBut = styled.button`
cursor:pointer;
color:white;
background-color:#79B9D3;
border:0px;
height:2.5rem;
border-radius:5px;
width:100%
`