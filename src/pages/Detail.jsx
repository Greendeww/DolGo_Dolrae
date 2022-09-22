/* global kakao */
import React from 'react'
import styled from "styled-components";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation} from 'swiper';
import { useEffect,useState } from 'react';
import { Map, MapMarker } from "react-kakao-maps-sdk";
import DetailForm from '../componenets/details/DetailForm';
import Comments from '../componenets/details/Comments';
import { useDispatch, useSelector } from 'react-redux';
import { onLikePost } from '../redux/modules/post';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { _getComments } from '../redux/modules/comment';
import Pagination from "react-js-pagination";
import '../css/paging.css'


const Detail = () => {
  const navigate = useNavigate();
  const {kakao} = window
  const {id} = useParams();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false)
  const [formOpen,setFormOpen] = useState(false)
  const [page, setPage] = useState(1);
  
  const close = () => {
    setFormOpen(false);
  }
  const {isLoading, error,comment} = useSelector((state) => state.comment)
  console.log(comment)

  useEffect(() => {
    dispatch(_getComments(id));
  }, []);

  if (isLoading) {
    return <div>로딩중....</div>;
  }

  if(error) {
    return <div>{error.message}</div>;
  }

  const handlePageChange = (page) => {
    setPage(page);
  };


  const onLike = async (event) => {
    event.preventDefault();
    dispatch(onLikePost(id));
  };
  
  return (
    <>
    <div>
      <Box>
        <Cover>
          <div>
          <ImgCover>
            <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation
                pagination={{ clickable: true }}
                >
                <SwiperSlide><Img alt='' src='http://tong.visitkorea.or.kr/cms/resource/87/2361087_image2_1.jpg'/></SwiperSlide>
                {/* <SwiperSlide><Img alt='' src={data.imgUrl}/></SwiperSlide> */}
                {/* {data.immap((data) => (
                  <div key={data.id}>
                      <SwiperSlide><Img alt='' src={data.image}/></SwiperSlide>
                  </div>
                  ))} */}
            </Swiper>
          </ImgCover>
          </div>
        </Cover>
        <Title>
          <div>
            <span>이름:</span> 
            <span>가평레일바이크</span>   
          </div>
          <div>
            <span style={{cursor:"pointer"}}onClick={onLike}>♥ 찜하기</span> 
          </div>
          </Title> 
          <Location>
            <div  style={{justifyContent:"center"}}>
            <p>주소</p>
            <p>경기도 가평군 가평읍 장터길 14</p>
            </div>
            <MapDiv>
              <Map
                center={{ lat: 37.8290223933, lng: 127.5158755988 }}
                style={{ width: "100%", height: "360px" }}
              >
              <MapMarker // 인포윈도우를 생성하고 지도에 표시합니다
                position={{
                  // 인포윈도우가 표시될 위치입니다
                  lat: 37.8290223933,
                  lng: 127.5158755988,
                }}
              /> 
              </Map>
            </MapDiv>
          </Location>
          <DescDiv>
            <p>설명</p>
            <p>가평 레일바이크는 가평역을 출발해 북한강 철교, 계절 따라 그 모습을 달리하는 느티나무터널, 영화 &lt;편지&gt;의 촬영지 경강역에서 회차, 가평역으로 돌아오는 왕복코스다. 북한강을 가로지르는 높이 30m의 아찔한 북한강 철교를 따라  폐달을 밟다 보면 한적한 시골마을과, 푸른 빛깔의 아름다운 강변이 번 갈아가면서 눈앞에 펼쳐진다.
            </p>
          </DescDiv>
          <div style={{display:"flex", justifyContent:"flex-start"}}>
            <ALink href = {`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=${id}`}>
              <ImgLink alt='' src='https://www.siksinhot.com/static2/images/mobile/bg_site_img01.gif'/>
            </ALink>
            <ALink href = {`https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&sq=&o=&q=${id}`}>
              <ImgLink alt='' src='https://www.siksinhot.com/static2/images/mobile/bg_site_img02.gif'/>
            </ALink>
            <ALink href = {`https://www.google.com/search?q=${id}`}>
              <ImgLink alt='' src='https://www.siksinhot.com/static2/images/mobile/bg_site_img03.gif'/>
            </ALink>
          </div>
          {formOpen === true
          ?<DetailForm close={close}/>
          :null}
          <CommentDiv>
              <p>Review</p>
              <div style={{display:"flex",textAlign:"center"}}>
                <span style={{width: "6rem"}}>번호</span>
                <span style={{width:"100%"}}>내용</span>
              </div>
              <div>
                  {comment.map((comment) => {
                    return <Comments comment={comment} key={comment.comment_id}/>
                  })}
                   <Pagination
                    activePage={page}
                    itemsCountPerPage={10}
                    totalItemsCount={450}
                    pageRangeDisplayed={5}
                    prevPageText={"‹"}
                    nextPageText={"›"}
                    onChange={handlePageChange}
                  />
              </div>
              <p style={{color:"white"}}>공백</p>
              </CommentDiv>
              <FormBut>
                <button style={{cursor:"pointer",color:"white",backgroundColor:"#5f0080",border:"0px",height:"2.5rem"}} onClick={() => navigate('/detail/form/'+ id)}>후기작성</button>
              </FormBut>
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
  /* border-left:2px solid black;
  border-right:2px solid black */
`;
const Cover = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  /* background: rgb(249, 249, 249); */
  padding-top: 40px;
  margin: 0 auto;
  margin-bottom:60px;
`
const ImgCover = styled.div`
  flex-shrink: 0;
  width:90%;
  max-width: 380px;
  justify-content:center;
  align-items:center;
  margin: 0 auto;
`
const Img = styled.img`
  border: 1px solid rgb(238, 238, 238);
  position: relative;
  width: 100%;
  height: 100%;
`
const Title = styled.div`
  margin:0 auto;
  width:90%;
  justify-content:space-between;
  display:flex;
`
const Location = styled.div`
  margin: 0 auto;
  width:90%;
  justify-content:center;
  align-items:center;
`
const MapDiv =styled.div`
  width: 100%;
  justify-content:center;
  align-items:center;
  margin:0 auto;
`
const DescDiv = styled.div`
  width:90%;
  justify-content:center;
  align-items:center;
  margin:0 auto;
`
const ALink = styled.a`
  width:85px;
  height:35px;
`
const ImgLink = styled.img`
 width:100%;
 height:100%;
`
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