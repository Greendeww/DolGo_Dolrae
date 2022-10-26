import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { instance } from '../../shared/Api';
import CoseList from '../../componenets/cose/CoseList';
import PaginationCose from '../../componenets/pagination/PaginationCose';
import CoseHeaderMain from '../../componenets/cose/CoseHeaderMain';



const Cose = () => {
  const mapRef = useRef()
  const navigate = useNavigate();
  const [cose, setCose] = useState([])
  const [currentCose, setCurrnetCose] = useState([]);
  const [page, setPage] = useState(1);
  const [postPerPage] = useState(5);
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPage = indexOfLastPost - postPerPage;

  const handlePageChange = (page) => {
    setPage(page);
  };
  const fetch = async () => {
    const response = await instance.get(`/api/auth/course/`); 
    setCose(response?.data?.reverse())
  };

  useEffect(() => {
    // setCommentList([...comment].reverse())
    setCurrnetCose(cose.slice(indexOfFirstPage, indexOfLastPost));
  }, [indexOfFirstPage, indexOfLastPost, page, cose]);
    // ACCESS_TOKEN이 없으면 마이페이지 접근 불가
  const getToken = sessionStorage.getItem("ACCESS_TOKEN");

  useEffect(() => {
    if(getToken === null){
      alert("로그인이 필요한 서비스입니다.")
      navigate('/login')
    }
  },[getToken])
  
    useEffect(() => {
      fetch()
    }, []);
    const initialization = (e) => {
        localStorage.removeItem("TITLE_NAME");
        localStorage.removeItem("NAME");
        localStorage.removeItem("IDs");

      };
    // select 페이지로 돌아올 시 자동으로 필터 초기화
    useEffect(() => {
        initialization();
    }, []);

    const addCose = () => {
        navigate('/cose/add')
    };

  return (
    <>
     <CoseBox>
      <CoseHeaderMain/>
        <CoseDiv>
          <h2>나만의 코스</h2>
          {currentCose.map((cose,index) =>{
            return <CoseList cose={cose} key={index}/>
          })}
        </CoseDiv>
        <PaginationCose
          page={page}
          count={cose.length}
          setPage={handlePageChange}
          postPerpage={[postPerPage]}
        />
        <ButDiv>
            <button onClick={addCose}>코스 작성하기</button>
        </ButDiv>
     </CoseBox>
    </>
  )
}

export default Cose

const CoseBox = styled.div`
    width: 100%;
    max-width: 428px;
    margin: 0 auto;
    font-family: tway;
`;

const CoseDiv = styled.div`
  padding-top:6rem;
  h2{
    text-align:center;
    color:#ffaeae;
    font-size:2rem;
  }
`
const ButDiv = styled.div`
  button{
      cursor: pointer;
      color: white;
      background-color: #ABD4E2;
      border: 0px;
      height: 2.5rem;
      border-radius: 5px;
      width: 100%;
      font-size: 20px;
      font-weight: bold;
  }
`;