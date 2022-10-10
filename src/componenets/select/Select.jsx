import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import css from "../../css/select.css";
import { __getTheme } from "../../redux/modules/theme";

const List = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const THEME_CODE = "THEME_CODE";
  const THEME_NAME = "THEME_NAME";
  const AREA_CODE = "AREA_CODE";
  const AREA_NAME = "AREA_NAME";
  const SIGUNGU_CODE = "SIGUNGU_CODE";
  const SIGUNGU_NAME = "SIGUNGU_NAME";

  const [selectedTheme, setSelectedTheme] = useState("");
  const [selectedDo, setSelectedDo] = useState("");
  const [selectedSi, setSelectedSi] = useState("");

  // 테마 목록
  const categories = [
    {
      name: "관광",
      value: 12,
    },
    {
      name: "관람",
      value: 14,
    },
    {
      name: "액티비티",
      value: 28,
    },
    {
      name: "식도락",
      value: 39,
    },
  ];

  // 테마 생성
  const makeCategories = () => {
    return categories.map((item, idx) => (
      <div
        key={idx}
        className={
          item.value === selectedTheme
            ? "category-child selected"
            : "category-child"
        }
        onClick={() => {
          setSelectedTheme(item.value);
          localStorage.setItem(THEME_CODE, item.value);
          localStorage.setItem(THEME_NAME, item.name);
        }}
      >
        {item.name}
      </div>
    ));
  };

  // const init = () => {
  //   let data = localStorage.getItem(THEME_CODE);
  //   if (data !== null) setSelectedTheme(data);
  // };

  // useEffect(init, []);

  // 필터 초기화
  const initialization = (e) => {
    // e.preventDefault();
    localStorage.removeItem("THEME_CODE");
    localStorage.removeItem("THEME_NAME");
    localStorage.removeItem("AREA_CODE");
    localStorage.removeItem("AREA_NAME");
    localStorage.removeItem("SIGUNGU_CODE");
    localStorage.removeItem("SIGUNGU_NAME");

    setSelectedTheme("");
    setSelectedDo("");
    setSelectedSi("");
  };

  // 서버로 보내줄 값 ( 선택한 테마, 지역 )
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

  // 지역별 name, value
  const doList = [
    { name: "전체", value: 0 },
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

  // 세부 지역별 해당 do, name, value
  const siList = [
    { do: "전체", name: "전체", value: 0 },
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

  // 지역 생성
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
          setSelectedSi("");
          localStorage.setItem(AREA_CODE, item.value);
          localStorage.setItem(AREA_NAME, item.name);
          localStorage.removeItem(SIGUNGU_CODE);
          localStorage.removeItem(SIGUNGU_NAME);
        }}
      >
        {item.name}
      </div>
    ));
  };

  // 세부 지역 생성
  const DetailLocation = () => {
    return siList.map((item, idx) =>
      item.do === GET_AREA_NAME ? (
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

  // select 페이지로 돌아올 시 자동으로 필터 초기화
  useEffect(() => {
    initialization();
  }, []);

  return (
    <St>
      <StCategory>
        <Title>
          <p>테마</p>
          <button onClick={initialization}>필터 초기화 ↺</button>
        </Title>
        <Category>
          <div className="category-set">{makeCategories()}</div>
        </Category>
      </StCategory>
      <StLocation>
        <StList>
          <p>지역</p>
          <Locations className="location-set">{Location()}</Locations>
        </StList>
        <StList>
          <p>세부지역</p>
          <Locations className="location-set">
            {DetailLocation()}
          </Locations>
        </StList>
        <CompleteButton>
          <button
            onClick={() => {
              if (
                GET_THEME_NAME === null ||
                GET_AREA_NAME === null ||
                GET_SIGUNGU_NAME === null
              ) {
                alert("모든 항목을 선택해주세요.");
                return;
              } else {
                dispatch(__getTheme(search));
                navigate("/list");
              }
            }}
          >
            선택완료
          </button>
        </CompleteButton>
      </StLocation>
    </St>
  );
};

export default List;

const St = styled.div`
  max-width: 428px;
  width: 100%;
  padding-top: 80px;
`;

const StCategory = styled.div`
  margin: 30px auto;
  & p {
    font-size: 25px;
    line-height: 40px;
    color: #bfb8b8;
    margin-left: 30px;
  }
`;

const Category = styled.div`
  margin-top: 25px;
  cursor: pointer;
  & div {
    gap: 30px;
  }
`;

const Title = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;

  & button {
    background: #ffc0c0;
    border: none;
    border-radius: 12px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
  }
`;

const StLocation = styled.div`
  & button {
    background-color: #ffc0c0;
    color: white;
    border: none;
    border-radius: 12px;
    width: 95%;
    height: 50px;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    line-height: 24px;
    display: block;
    margin: 50px auto;
  }
`;

const StList = styled.div`
  width: 100%;
  margin-top: 50px;
  & p {
    font-style: normal;
    font-size: 25px;
    line-height: 40px;
    color: #bfb8b8;
    margin: 20px;
    margin-left: 30px;
  }
`;

const CompleteButton = styled.div`
  display: flex;
  padding-bottom: 20px;
  margin: 0 auto;
`;

const Locations = styled.div`
width: 85%;
`;