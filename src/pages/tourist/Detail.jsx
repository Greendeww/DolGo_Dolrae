/* global kakao */
import React, { useCallback } from 'react'
import styled from "styled-components";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import { useEffect,useState } from 'react';
import { Map, MapMarker } from "react-kakao-maps-sdk";
import DetailForm from '../../componenets/details/DetailForm';
import { useDispatch, useSelector } from 'react-redux';
import { onLikeDetail, _getDetail} from '../../redux/modules/post';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { _getComments } from '../../redux/modules/comment';
import Review from '../../componenets/details/Review';
import DetailImage from '../../componenets/details/DetailImage';
import { instance } from '../../shared/Api';
import StarDetail from '../../componenets/star/StarDetail';
import Like from '../../componenets/like/Like';

const Detail = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const dispatch = useDispatch();
  const [formOpen,setFormOpen] = useState(false)
  const [posts, setPosts] = useState("")
  const [commentList,setCommentList] = useState([])
  const [currentComments,setCurrnetComments] = useState([])
  const [page, setPage] = useState(1);
  const [postPerPage] = useState(5)
  const [number, setNumber] = useState(1)
  const indexOfLastPost = page*postPerPage;
  const indexOfFirstPage = indexOfLastPost - postPerPage
  console.log(posts)
  console.log(id)
  const close = () => {
    setFormOpen(false);
  }
  const fetch = async () => {
    const response = await instance.get(`/api/place/${id}`); 
    console.log(response.data)
    setPosts(response.data)
  }

  const {isLoading, error,comment} = useSelector((state) => state.comment)
  console.log(comment)

  useEffect(() => {
      dispatch(_getComments(id));
      fetch()
  }, []);

  useEffect(() => {
      setCommentList([...comment].reverse())
      setCurrnetComments(commentList.slice(indexOfFirstPage, indexOfLastPost))
  },[indexOfFirstPage,indexOfLastPost,page,comment]);

  if (isLoading) {
    return <div>로딩중....</div>;
  }
  
  if(error) {
    return <div>{error.message}</div>;
  }

  const handlePageChange = (page) => {
    setPage(page)
  }

  // const onLike = async (event) => {
  //   event.preventDefault();
  //   dispatch(onLikeDetail(id));
  // };
  
  return (
    <>
    <div>
      <Box>
        <Cover>
          <ImgDiv>
          <ImgCover>
             <DetailImage post={posts} key={posts.id}/>
             <div style={{display:"flex", justifyContent:"space-between"}}>
              <span styel={{}}>{posts.title}</span> 
              <Like id={id}></Like>
             </div>
             {posts.star}
             <div style={{display:"flex", paddingTop:"10px"}}>
               <StarDetail posts={posts}/>
               <span style={{fontWeight:"600"}}>{posts.star}</span>
               <span style={{color:"#8f8f8f"}}>/5</span>
             </div>
          </ImgCover>
          </ImgDiv>
        </Cover>
        <Title>
          </Title> 
          <Location>
            <div style={{justifyContent:"center"}}>
            <p style={{color:"#BFB8B8",fontSize:"1.3rem"}}>위치</p>
            <p style={{fontWeight:"600"}}>{posts.address}</p>
            </div>
            <MapDiv>
              <Map
                center={{ lat: posts?.mapY, lng: posts?.mapX }}
                style={{ width: "100%", height: "300px" ,borderRadius: "20px"}}
              >
              <MapMarker // 인포윈도우를 생성하고 지도에 표시합니다
                position={{
                  // 인포윈도우가 표시될 위치입니다
                  lat: posts?.mapY,
                  lng: posts?.mapX,
                }}
              /> 
              </Map>
            </MapDiv>
          </Location>
          <DescDiv>
            <p style={{color:"#BFB8B8",fontSize:"1.3rem"}}>설명</p>
            <p>가평 레일바이크는 가평역을 출발해 북한강 철교, 계절 따라 그 모습을 달리하는 느티나무터널, 영화 &lt;편지&gt;의 촬영지 경강역에서 회차, 가평역으로 돌아오는 왕복코스다. 북한강을 가로지르는 높이 30m의 아찔한 북한강 철교를 따라  폐달을 밟다 보면 한적한 시골마을과, 푸른 빛깔의 아름다운 강변이 번 갈아가면서 눈앞에 펼쳐진다.
            </p>
          </DescDiv>
          <SearchDate>
            <SearchP>더 알아보기</SearchP>
            <SearchDiv>
              <ALink href = {`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=${posts.title}`}>
                <ImgLink alt='' src='https://www.siksinhot.com/static2/images/mobile/bg_site_img01.gif'/>
              </ALink>
              <ALink href = {`https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&sq=&o=&q=${posts.title}`}>
                <ImgLink alt='' src='https://www.siksinhot.com/static2/images/mobile/bg_site_img02.gif'/>
              </ALink>
              <ALink href = {`https://www.google.com/search?q=${posts.title}`}>
                <ImgLink alt='' src='https://www.siksinhot.com/static2/images/mobile/bg_site_img03.gif'/>
              </ALink>
            </SearchDiv>
          </SearchDate>
          {formOpen === true
          ?<DetailForm close={close}/>
          :null}
          <Review comment={comment} number={number}/>
          <h1 style={{color:"white"}}>공백</h1>
      </Box>
    </div>
    </>
  )
}

export default Detail

const Box = styled.div`
  width: 100%;
  max-width:428px;
  margin: 0 auto;
  border:2px solid #79B9D3;
`;
const Cover = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  /* background: rgb(249, 249, 249); */
  padding-top: 40px;
  margin: 0 auto;
  margin-bottom:20px;
`
const ImgDiv =styled.div`
  background-color:#EBF8FF;
  padding: 20px 0px 20px;
`
const ImgCover = styled.div`
  flex-shrink: 0;
  width:90%;
  max-width: 428px;
  justify-content:center;
  align-items:center;
  margin: 0 auto;
`
// const Img = styled.img`
//   border: 1px solid rgb(238, 238, 238);
//   position: relative;
//   width: 100%;
//   height: 100%;
// `
const Title = styled.div`
  margin:0 auto;
  width:100%;
  justify-content:space-between;
  display:flex;
`
const Location = styled.div`
  margin: 0 auto;
  width:100%;
  justify-content:center;
  align-items:center;
  padding-top:30px;
`
const MapDiv =styled.div`
  width: 100%;
  justify-content:center;
  align-items:center;
  margin:0 auto;
`
const DescDiv = styled.div`
  width:100%;
  justify-content:center;
  align-items:center;
  margin:0 auto;
  padding-top:50px;
`
const SearchDate = styled.div`
  margin-top:50px;
`
const SearchP = styled.p`
  color:#BFB8B8;
  font-size:1.3rem;
  margin-bottom:20px;
`
const SearchDiv = styled.div`
  display:flex;
  justify-content:flex-start
`
const ALink = styled.a`
  width:6rem;
  height:40px;
`
const ImgLink = styled.img`
 width:100%;
 height:100%;
`
// const CommentDiv = styled.div`
//   border-top: 3px solid #522772;
//   border-bottom: 3px solid #522772;
//   text-align:start;
//   margin-top:10px;
// `
// const FormBut = styled.div`
//  display:flex;
//  justify-content:flex-end;
//  margin-top:60px;
// `