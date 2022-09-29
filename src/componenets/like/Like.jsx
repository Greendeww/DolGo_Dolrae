import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { onLikeDetail } from '../../redux/modules/post';
import styled from "styled-components";
import { instance } from '../../shared/Api';
import { useEffect } from 'react';

const Like = ({id}) => {
    const dispatch = useDispatch();
    const [like, setLike] = useState(false);
    
    const fetch = async () => {
        const response = await instance.get(`/api/place/like/${id}`); 
        console.log(response.data)
        setLike(response.data)
      }
    useEffect(() => {
        fetch()
    },[])
    const likeClick = (e) => {
        e.preventDefault();
        if(like === true){
            setLike(false)
            dispatch(onLikeDetail(id))
        }else{
            setLike(true)
            dispatch(onLikeDetail(id))
        }
    }
  return (
    <>
         <div> 
        {like === true
        ? <Liked onClick={likeClick}>♥</Liked> 
        : <UnLiked onClick={likeClick}>♡</UnLiked> 
        }
        {/* <p>3</p> */}
        </div>
    </>
  )
}

export default Like

const Liked = styled.span`
    cursor:pointer;
    color:#FF8585; 
    font-size:2.1rem;
    line-height:1rem;
`
const UnLiked = styled.span`
    cursor:pointer;
    color:black; 
    font-size:2.1rem;
    line-height:1rem;
`