import React, { useRef, useEffect, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import basicImg from "../../assert/image/basic.png";
import ModalPortal from '../modal/ModalPortal';
import CoseModal from './CoseModal';

const CoseDetail = ({cose,index,length}) => {
    const scrollRef = useRef();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false)
    const close = () => {
      setIsOpen(false)
    };
  // ACCESS_TOKEN이 없으면 마이페이지 접근 불가
  const getToken = sessionStorage.getItem("ACCESS_TOKEN");

  useEffect(() => {
    if(getToken === null){
      alert("로그인이 필요한 서비스입니다.")
      navigate('/login')
    }
  },[getToken]);
  
    //모달창 열렸을 때 스크롤 맨 아래로
    useEffect(() => {
      window.scrollTo({ top: 3000, behavior: "smooth" });
    }, [isOpen])
    return (
    <>
        <CoseBox>
            <TitleDiv key={index}>
                {index+1 === length
                ?
                <CoseBox>
                <LastCoseDiv>
                    <p onClick={() => setIsOpen(true)}>{cose.title}</p>
                </LastCoseDiv>
                </CoseBox>
                :<CoseBox>
                <CoseDiv>
                    <p onClick={() => setIsOpen(true)}>{cose.title}</p>
                </CoseDiv>
                <p style={{paddingTop:"0.1rem",textAlign:"center"}}>▼</p>
                </CoseBox>
                }
            </TitleDiv>
        </CoseBox>
        <div ref={scrollRef}/>
        <ModalPortal>
        {isOpen && (
          <CoseModal pos={cose} close={close} /> 
        )}
        </ModalPortal>
    </>
    )
}

export default CoseDetail

const CoseBox = styled.div`
  width: 100%;
  max-width: 428px;
  font-family: bold;
`;

const TitleDiv = styled.div`
  width:80%;
  display:flex;
  margin: 5px auto;
`;
const CoseDiv = styled.div`
  height:30px;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  border:3px solid #abd4e2;
  border-radius:10px;
  margin-left:-0.2rem;
  p{
    cursor: pointer;
    &:hover{
      color:#abd4e2;
    }
  }
`;

const LastCoseDiv = styled.div` 
  height:30px;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  border:3px solid #abd4e2;
  border-radius:10px;
  margin-left:-0.2rem;
  p{
    cursor: pointer;
    &:hover{
      color:#abd4e2;
    }
  }
`