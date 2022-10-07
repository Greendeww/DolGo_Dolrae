import React from "react";
import styled from "styled-components";
import basicImg from "../../assert/image/basic.png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Randoms = () => {
  const navigate = useNavigate();

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

<<<<<<< HEAD
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
=======
  return (
    <Box>
      <div>
        <Img alt="logo" src={basicImg} />
      </div>
      <ButDiv>
        <RandomBut onClick={() => random()}>전체 랜덤</RandomBut>
        <RandomBut onClick={() => navigate("/rndlocation")}>
          지역 선택해서 랜덤
        </RandomBut>
      </ButDiv>
    </Box>
  );
};

export default Randoms;

const Box = styled.div`
  width: 100%;
  max-width: 428px;
  margin: 0 auto;
  padding-top: 80px;
>>>>>>> 7b0ae381ba0d74f30401f8191c284921692acc97
`;
const Img = styled.img`
  display: flex;
  width: 400px;
  margin: 70px auto;
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
