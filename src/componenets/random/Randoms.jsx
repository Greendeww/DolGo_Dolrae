import React from "react";
import styled from "styled-components";
import basicImg from "../../assert/image/basic.png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../header/Header";

//랜덤이미지
import img1 from "../../assert/random/img1.jpg"
import img2 from "../../assert/random/img2.jpg"
import img3 from "../../assert/random/img3.jpg"
import img4 from "../../assert/random/img4.jpg"
import img5 from "../../assert/random/img5.jpg"
import img6 from "../../assert/random/img6.jpg"
import img7 from "../../assert/random/img7.jpg"
import img8 from "../../assert/random/img8.jpg"
import img9 from "../../assert/random/img9.jpg"
import img10 from "../../assert/random/img10.jpg"
import img11 from "../../assert/random/img11.jpg"

const Randoms = () => {
  const navigate = useNavigate();

  const backgroundArr = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  ]

  const randomIndex = Math.floor(Math.random() * backgroundArr.length);
  const backgroundImg = backgroundArr[randomIndex];

  const random = (e) => {
    let timerInterval;
    Swal.fire({
      title: "지역을 선정중입니다",
      html: "잠시만 기다려주세요",
      timer: 1500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
        navigate("/rnd");
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  };


    return (
    <>
      <BoxDiv>
        <Header/>
        <Box>
            <div>
                <Img alt='logo' src={backgroundImg}/>
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
    div{
      margin-top:3rem;
      margin-bottom:5rem;
    }
`
const Img = styled.img`
  min-height:317px;
  max-height:317px;
  display: flex;
  width:100%;
  max-width: 370px;
  margin: 20px auto;
  border-radius: 15px;
`;
const ButDiv = styled.div`
  text-align: center;
  margin-bottom: 100px;
  width: 90%;
  margin: 0 auto;
`;
const RandomBut = styled.button`
  background-color: #abd4e2;
  color: white;
  border: none;
  border-radius: 12px;
  width: 370px;
  height: 50px;
  cursor: pointer;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  display: block;
  margin: 20px auto;
`;
const ButText = styled.p`
    font-weight:700;
    line-height:0.6rem;
    font-size:1rem;
`
