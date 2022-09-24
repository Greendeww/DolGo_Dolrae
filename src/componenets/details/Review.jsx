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
const dispatch = useDispatch();
const [formOpen,setFormOpen] = useState(false)
const [commentList,setCommentList] = useState([...comment].reverse())
const [currentComments,setCurrnetComments] = useState([])
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
        console.log(set)
        number.push(set)
      }
    },[])
    
    // comment.number = number
    console.log(comment.number)
  return (
    <div>
        <CommentDiv>
        <p>Review</p>
            <div style={{display:"flex",textAlign:"center"}}>
            <span style={{width: "6rem"}}>번호</span>
            <span style={{width:"100%"}}>내용</span>
            </div>
            <div>
                {currentComments.map((comment,index) => {
                return <Comments comment={comment} index={index} arr={arr} key={comment.comment_id}/>
                })}
            </div>
            <FormBut>
            <button style={{cursor:"pointer",color:"white",backgroundColor:"#5f0080",border:"0px",height:"2.5rem"}} onClick={() => navigate('/detail/form/'+ id)}>후기작성</button>
            </FormBut>
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
  border-bottom: 3px solid #522772;
  text-align:start;
  margin-top:10px;
`
const FormBut = styled.div`
 display:flex;
 justify-content:flex-end;
 margin-top:60px;
`