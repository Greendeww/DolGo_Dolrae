import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __getTheme } from "../../redux/modules/theme";
import css from "../../css/select.css";
import Header from "../header/Header";
import Swal from "sweetalert2";

const RndLocation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const AREA_CODE = "AREA_CODE";
  const AREA_NAME = "AREA_NAME";
  const SIGUNGU_CODE = "SIGUNGU_CODE";
  const SIGUNGU_NAME = "SIGUNGU_NAME";

  const GET_THEME_CODE = window.localStorage.getItem("THEME_CODE");
  const GET_THEME_NAME = window.localStorage.getItem("THEME_NAME");
  const GET_AREA_CODE = window.localStorage.getItem("AREA_CODE");
  const GET_AREA_NAME = window.localStorage.getItem("AREA_NAME");
  const GET_SIGUNGU_CODE = window.localStorage.getItem("SIGUNGU_CODE");
  const GET_SIGUNGU_NAME = window.localStorage.getItem("SIGUNGU_NAME");

  const search = {
    themeCode: GET_THEME_CODE,
    themeName: GET_THEME_NAME,
    areaCode: GET_AREA_CODE,
    areaName: GET_AREA_NAME,
    sigunguCode: GET_SIGUNGU_CODE,
    sigunguName: GET_SIGUNGU_NAME,
  };

  const [selectedDo, setSelectedDo] = useState("");
  const [selectedSi, setSelectedSi] = useState("");

  const doList = [
    { name: "서울", value: 1 },
    { name: "인천", value: 2 },
    { name: "대전", value: 3 },
    { name: "대구", value: 4 },
    { name: "광주", value: 5 },
    { name: "부산", value: 6 },
    { name: "울산", value: 7 },
    { name: "세종", value: 8 },
    { name: "경기", value: 31 },
    { name: "강원", value: 32 },
    { name: "충북", value: 33 },
    { name: "충남", value: 34 },
    { name: "경북", value: 35 },
    { name: "경남", value: 36 },
    { name: "전북", value: 37 },
    { name: "전남", value: 38 },
    { name: "제주", value: 39 },
  ];

  const siList = [
    { do: "서울", name: "전체", value: 0 },
    { do: "인천", name: "전체", value: 0 },
    { do: "대전", name: "전체", value: 0 },
    { do: "대구", name: "전체", value: 0 },
    { do: "광주", name: "전체", value: 0 },
    { do: "부산", name: "전체", value: 0 },
    { do: "울산", name: "전체", value: 0 },
    { do: "세종", name: "전체", value: 0 },
    { do: "경기", name: "전체", value: 0 },
    { do: "경기", name: "가평", value: 1 },
    { do: "경기", name: "고양", value: 2 },
    { do: "경기", name: "과천", value: 3 },
    { do: "경기", name: "광명", value: 4 },
    { do: "경기", name: "광주", value: 5 },
    { do: "경기", name: "구리", value: 6 },
    { do: "경기", name: "군포", value: 7 },
    { do: "경기", name: "김포", value: 8 },
    { do: "경기", name: "남양주", value: 9 },
    { do: "경기", name: "동두천", value: 10 },
    { do: "경기", name: "부천", value: 11 },
    { do: "경기", name: "성남", value: 12 },
    { do: "경기", name: "수원", value: 13 },
    { do: "경기", name: "시흥", value: 14 },
    { do: "경기", name: "안산", value: 15 },
    { do: "경기", name: "안성", value: 16 },
    { do: "경기", name: "안양", value: 17 },
    { do: "경기", name: "양주", value: 18 },
    { do: "경기", name: "양평", value: 19 },
    { do: "경기", name: "여주", value: 20 },
    { do: "경기", name: "연천", value: 21 },
    { do: "경기", name: "오산", value: 22 },
    { do: "경기", name: "용인", value: 23 },
    { do: "경기", name: "의왕", value: 24 },
    { do: "경기", name: "의정부", value: 25 },
    { do: "경기", name: "이천", value: 26 },
    { do: "경기", name: "파주", value: 27 },
    { do: "경기", name: "평택", value: 28 },
    { do: "경기", name: "포천", value: 29 },
    { do: "경기", name: "하남", value: 30 },
    { do: "경기", name: "화성", value: 31 },
    { do: "강원", name: "전체", value: 0 },
    { do: "강원", name: "강릉", value: 1 },
    { do: "강원", name: "고성", value: 2 },
    { do: "강원", name: "동해", value: 3 },
    { do: "강원", name: "삼척", value: 4 },
    { do: "강원", name: "속초", value: 5 },
    { do: "강원", name: "양구", value: 6 },
    { do: "강원", name: "양양", value: 7 },
    { do: "강원", name: "영월", value: 8 },
    { do: "강원", name: "원주", value: 9 },
    { do: "강원", name: "인제", value: 10 },
    { do: "강원", name: "정선", value: 11 },
    { do: "강원", name: "철원", value: 12 },
    { do: "강원", name: "춘천", value: 13 },
    { do: "강원", name: "태백", value: 14 },
    { do: "강원", name: "평창", value: 15 },
    { do: "강원", name: "홍천", value: 16 },
    { do: "강원", name: "화천", value: 17 },
    { do: "강원", name: "횡성", value: 18 },
    { do: "충북", name: "전체", value: 0 },
    { do: "충북", name: "괴산", value: 1 },
    { do: "충북", name: "단양", value: 2 },
    { do: "충북", name: "보은", value: 3 },
    { do: "충북", name: "영동", value: 4 },
    { do: "충북", name: "옥천", value: 5 },
    { do: "충북", name: "음성", value: 6 },
    { do: "충북", name: "제천", value: 7 },
    { do: "충북", name: "증평", value: 8 },
    { do: "충북", name: "진천", value: 9 },
    { do: "충북", name: "청원", value: 10 },
    { do: "충북", name: "청주", value: 11 },
    { do: "충북", name: "충주", value: 12 },
    { do: "충남", name: "전체", value: 0 },
    { do: "충남", name: "계룡", value: 16 },
    { do: "충남", name: "공주", value: 1 },
    { do: "충남", name: "금산", value: 2 },
    { do: "충남", name: "논산", value: 3 },
    { do: "충남", name: "당진", value: 4 },
    { do: "충남", name: "보령", value: 5 },
    { do: "충남", name: "부여", value: 6 },
    { do: "충남", name: "서산", value: 7 },
    { do: "충남", name: "서천", value: 8 },
    { do: "충남", name: "아산", value: 9 },
    { do: "충남", name: "예산", value: 11 },
    { do: "충남", name: "천안", value: 12 },
    { do: "충남", name: "청양", value: 13 },
    { do: "충남", name: "태안", value: 14 },
    { do: "충남", name: "홍성", value: 15 },
    { do: "경북", name: "전체", value: 0 },
    { do: "경북", name: "경산", value: 1 },
    { do: "경북", name: "경주", value: 2 },
    { do: "경북", name: "고령", value: 3 },
    { do: "경북", name: "구미", value: 4 },
    { do: "경북", name: "군위", value: 5 },
    { do: "경북", name: "김천", value: 6 },
    { do: "경북", name: "문경", value: 7 },
    { do: "경북", name: "봉화", value: 8 },
    { do: "경북", name: "상주", value: 9 },
    { do: "경북", name: "성주", value: 10 },
    { do: "경북", name: "안동", value: 11 },
    { do: "경북", name: "영덕", value: 12 },
    { do: "경북", name: "영양", value: 13 },
    { do: "경북", name: "영주", value: 14 },
    { do: "경북", name: "영천", value: 15 },
    { do: "경북", name: "예천", value: 16 },
    { do: "경북", name: "울릉", value: 17 },
    { do: "경북", name: "울진", value: 18 },
    { do: "경북", name: "의성", value: 19 },
    { do: "경북", name: "청도", value: 20 },
    { do: "경북", name: "청송", value: 21 },
    { do: "경북", name: "칠곡", value: 22 },
    { do: "경북", name: "포항", value: 23 },
    { do: "경남", name: "전체", value: 0 },
    { do: "경남", name: "거제", value: 1 },
    { do: "경남", name: "거창", value: 2 },
    { do: "경남", name: "고성", value: 3 },
    { do: "경남", name: "김해", value: 4 },
    { do: "경남", name: "남해", value: 5 },
    { do: "경남", name: "마산", value: 6 },
    { do: "경남", name: "밀양", value: 7 },
    { do: "경남", name: "사천", value: 8 },
    { do: "경남", name: "산청", value: 9 },
    { do: "경남", name: "양산", value: 10 },
    { do: "경남", name: "의령", value: 11 },
    { do: "경남", name: "진주", value: 12 },
    { do: "경남", name: "진해", value: 13 },
    { do: "경남", name: "창녕", value: 14 },
    { do: "경남", name: "창원", value: 15 },
    { do: "경남", name: "통영", value: 16 },
    { do: "경남", name: "하동", value: 17 },
    { do: "경남", name: "함안", value: 18 },
    { do: "경남", name: "함양", value: 19 },
    { do: "경남", name: "합천", value: 20 },
    { do: "전북", name: "전체", value: 0 },
    { do: "전북", name: "고창", value: 1 },
    { do: "전북", name: "군산", value: 2 },
    { do: "전북", name: "김제", value: 3 },
    { do: "전북", name: "남원", value: 4 },
    { do: "전북", name: "모주", value: 5 },
    { do: "전북", name: "부안", value: 6 },
    { do: "전북", name: "순창", value: 7 },
    { do: "전북", name: "완주", value: 8 },
    { do: "전북", name: "익산", value: 9 },
    { do: "전북", name: "임실", value: 10 },
    { do: "전북", name: "장수", value: 11 },
    { do: "전북", name: "전주", value: 12 },
    { do: "전북", name: "정읍", value: 13 },
    { do: "전북", name: "진안", value: 14 },
    { do: "전남", name: "전체", value: 0 },
    { do: "전남", name: "강진", value: 1 },
    { do: "전남", name: "고흥", value: 2 },
    { do: "전남", name: "곡성", value: 3 },
    { do: "전남", name: "광양", value: 4 },
    { do: "전남", name: "구례", value: 5 },
    { do: "전남", name: "나주", value: 6 },
    { do: "전남", name: "담양", value: 7 },
    { do: "전남", name: "목포", value: 8 },
    { do: "전남", name: "무안", value: 9 },
    { do: "전남", name: "보성", value: 10 },
    { do: "전남", name: "순천", value: 11 },
    { do: "전남", name: "신안", value: 12 },
    { do: "전남", name: "여수", value: 13 },
    { do: "전남", name: "영광", value: 14 },
    { do: "전남", name: "영암", value: 15 },
    { do: "전남", name: "완도", value: 16 },
    { do: "전남", name: "장성", value: 17 },
    { do: "전남", name: "장흥", value: 18 },
    { do: "전남", name: "진도", value: 19 },
    { do: "전남", name: "함평", value: 20 },
    { do: "전남", name: "해남", value: 21 },
    { do: "전남", name: "화순", value: 22 },
    { do: "제주", name: "전체", value: 0 },
    { do: "제주", name: "서귀포", value: 3 },
    { do: "제주", name: "제주", value: 4 },
  ];

  const Location = () => {
    return doList.map((item, idx) => (
      <div
        key={idx}
        className={
          item.value === selectedDo
            ? "location-child selected"
            : "location-child"
        }
        onClick={() => {
          setSelectedDo(item.value);
          localStorage.setItem(AREA_CODE, item.value);
          localStorage.setItem(AREA_NAME, item.name);
        }}
      >
        {item.name}
      </div>
    ));
  };
  const DetailLocation = () => {
    return siList.map((item, idx) =>
      item.do == GET_AREA_NAME ? (
        <div
          key={idx}
          className={
            item.value === selectedSi
              ? "location-child selected"
              : "location-child"
          }
          onClick={() => {
            setSelectedSi(item.value);
            localStorage.setItem(SIGUNGU_CODE, item.value);
            localStorage.setItem(SIGUNGU_NAME, item.name);
          }}
        >
          {item.name}
        </div>
      ) : null
    );
  };

  const onRandom = (e) => {
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
        dispatch(__getTheme(search));
        navigate(
          "/rndselect/" +
            localStorage.getItem(SIGUNGU_CODE) +
            "/" +
            localStorage.getItem(AREA_CODE)
        );
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
    console.log("작동");
  };
  return (
    <StRnd>
      <Header />
      <RndDiv>
        <St>
          <StList>
            <p>지역</p>
            <div className="location-set">{Location()}</div>
          </StList>
          <StList>
            <p>세부지역</p>
            <div className="location-set">{DetailLocation()}</div>
          </StList>
          <button
            onClick={() => {
              if (GET_AREA_NAME === null || GET_SIGUNGU_NAME === null) {
                alert("모든 항목을 선택해주세요.");
              } else {
                onRandom();
              }
            }}
          >
            선택완료
          </button>
        </St>
        <BackBut onClick={() => navigate("/random")}>뒤로가기</BackBut>
      </RndDiv>
    </StRnd>
  );
};

export default RndLocation;

const StRnd = styled.div`
  max-width: 428px;
  width: 100%;
  margin: 0 auto;
`;

const RndDiv = styled.div`
  padding-top: 60px;
`;
const St = styled.div`
  & button {
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
    margin: 40px auto;
  }
`;
const BackBut = styled.button`
  background-color: #ffc0c0;
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
  margin: 50px auto;
  margin-top: -20px;
`;
const StList = styled.div`
  width: 428px;
  margin-top: 40px;
  & p {
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 60px;
    color: #bfb8b8;
    margin-left: 40px;
    margin-bottom: 20px;
  }
`;
