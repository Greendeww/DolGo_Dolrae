import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { onLikeDetail, onLikeGet } from '../../redux/modules/post';
import styled from "styled-components";
import { instance } from '../../shared/Api';
import { useEffect } from 'react';

const Like = ({id}) => {
    console.log(id)
    const dispatch = useDispatch();
    const [like, setLike] = useState(false);

        const fetch = async (e) => {
            if(id === undefined){
                return 
            }else{
                const response = await instance.get(`/api/place/like/${id}`); 
                setLike(response?.data)
                console.log("작동")
            }
        }   

    // const fetch = async (e) => {
    //     const response = await instance.get(`/api/place/like/${id}`); 
    //     setLike(response?.data)
    // }
    useEffect(() => {
        fetch()
    },[id])
    // const {isLoading, error} = useSelector((state) => state)
    // console.log(useSelector((state) => state))

    // useEffect(() => {
    //     dispatch(onLikeGet(id));
    // }, []);

    // if (isLoading) {
    //     return <div>로딩중....</div>;
    // }
    
    // if(error) {
    //     return <div>{error.message}</div>;
    // }

    const likeClick = (e) => {
        e.preventDefault();
        if(like === true){
            setLike(false)
            dispatch(onLikeDetail(id))
            // window.location.reload()
        }else{
            setLike(true)
            dispatch(onLikeDetail(id))
            // window.location.reload()
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