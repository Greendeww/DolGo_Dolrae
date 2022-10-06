import React from 'react'
import styled from "styled-components";
import Header from '../header/Header';
import dolphin from "../../assert/detail/dolphin_test.png";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

const Randoms = () => {
    const navigate = useNavigate();

    const random = (e) => {
        let timerInterval
        Swal.fire({
            title: '지역을 선정중입니다',
            html: '잠시만 기다려주세요',
            timer: 1500,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
              const b = Swal.getHtmlContainer().querySelector('b')
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
              navigate('/rnd')
            }
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log('I was closed by the timer')
            }
          })
    }

    return (
    <>
      <BoxDiv>
        <Header/>
        <Box>
            <div>
                <Img alt='logo' src={dolphin}/>
            </div>
            <ButDiv>
                <RandomBut><ButText onClick={() => random()}>랜덤</ButText></RandomBut>
                <RandomBut><ButText onClick={()=>navigate('/rndlocation')}>지역 선택</ButText></RandomBut>
            </ButDiv>
        </Box>
      </BoxDiv>
    </>
    )
}

export default Randoms
const BoxDiv = styled.div`
    width: 100%;
    max-width:428px;
    margin: 0 auto;
`;
const Box = styled.div`
    width: 100%;
    max-width:428px;
    margin: 0 auto;
    padding-top:4.5rem;
`;
const Img = styled.img`
    width:100%;
`
const ButDiv = styled.div`
    text-align:center;
    padding-top:60px;
    margin-bottom:100px;
    width:90%;
    margin: 0 auto;
`
const RandomBut = styled.button`
    cursor:pointer;
    color:white;
    background-color:#79B9D3;
    border:0px;
    height:2.5rem;
    border-radius:5px;
    width:100%;
    margin-top:1rem;
`;
const ButText = styled.p`
    font-weight:700;
    line-height:0.6rem;
    font-size:1rem;
`