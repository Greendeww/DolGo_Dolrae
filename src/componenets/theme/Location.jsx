import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import check from "../../assert/theme/check.png";
import { getCookie } from "../../shared/Cookie";

const List = () => {
  const navigate = useNavigate();
  const LS_KEY_DO = "LS_KEY_DO";
  const LS_KEY_SI = "LS_KEY_SI";

  const [seoul, setSeoul] = useState(false);
  const [inCheon, setInCheon] = useState(false);
  const [daeJeon, setDaeJeon] = useState(false);
  const [daeGu, setDaeGu] = useState(false);
  const [gwangJu, setGwangJu] = useState(false);
  const [buSan, setBusan] = useState(false);
  const [ulSan, setUlSan] = useState(false);
  const [seJong, setSeJong] = useState(false);
  const [gyeongGi, setGyeongGi] = useState(false);
  const [gangWon, setGangWon] = useState(false);
  const [chungBuk, setChungBuk] = useState(false);
  const [chungNam, setChungNam] = useState(false);
  const [gyeongBuk, setGyeongBuk] = useState(false);
  const [gyeongNam, setGyeongNam] = useState(false);
  const [jeonBuk, setJeonBuk] = useState(false);
  const [jeonNam, setJeonNam] = useState(false);
  const [jeJu, setJeJu] = useState(false);

  const seoulHandler = () => {
    setSeoul(!seoul);
  };

  const inCheonHandler = () => {
    setInCheon(!inCheon);
  };

  const daeJeonHandler = () => {
    setDaeJeon(!daeJeon);
  };

  const daeGuHandler = () => {
    setDaeGu(!daeGu);
  };

  const gwangJuHandler = () => {
    setGwangJu(!gwangJu);
  };

  const buSanHandler = () => {
    setBusan(!buSan);
  };

  const ulSanHandler = () => {
    setUlSan(!ulSan);
  };

  const seJongHandler = () => {
    setSeJong(!seJong);
  };

  const gyeongGiHandler = () => {
    setGyeongGi(!gyeongGi);
  };

  const gangWonHandler = () => {
    setGangWon(!gangWon);
  };

  const chungBukHandler = () => {
    setChungBuk(!chungBuk);
  };

  const chungNamHandler = () => {
    setChungNam(!chungNam);
  };

  const gyeongBukHandler = () => {
    setGyeongBuk(!gyeongBuk);
  };

  const gyeongNamHandler = () => {
    setGyeongNam(!gyeongNam);
  };

  const jeonBukHandler = () => {
    setJeonBuk(!jeonBuk);
  };

  const jeonNamHandler = () => {
    setJeonNam(!jeonNam);
  };

  const jeJuHandler = () => {
    setJeJu(!jeJu);
  };

  const doList = [
    {
      name: "서울",
      value: 1,
    },
    {
      name: "인천",
      value: 2,
    },
    {
      name: "대전",
      value: 3,
    },
    {
      name: "대구",
      value: 4,
    },
    {
      name: "광주",
      value: 5,
    },
    {
      name: "부산",
      value: 6,
    },
    {
      name: "울산",
      value: 7,
    },
    {
      name: "세종",
      value: 8,
    },
    {
      name: "경기",
      value: 31,
    },
    {
      name: "강원",
      value: 32,
    },
    {
      name: "충청북도",
      value: 33,
    },
    {
      name: "충청남도",
      value: 34,
    },
    {
      name: "경상북도",
      value: 35,
    },
    {
      name: "경상남도",
      value: 36,
    },
    {
      name: "전라북도",
      value: 37,
    },
    {
      name: "전라남도",
      value: 38,
    },
    {
      name: "제주",
      value: 39,
      siGunGu: [
        {
          name: "서귀포",
          value: 3,
        },
        {
          name: "제주",
          value: 4,
        },
      ],
    },
  ];

  const siList = [
    {
      name: "가평",
      value: 1,
    },
    {
      name: "고양",
      value: 2,
    },
    {
      name: "과천",
      value: 3,
    },
    {
      name: "광명",
      value: 4,
    },
    {
      name: "광주",
      value: 5,
    },
    {
      name: "구리",
      value: 6,
    },
    {
      name: "군포",
      value: 7,
    },
    {
      name: "김포",
      value: 8,
    },
    {
      name: "남양주",
      value: 9,
    },
    {
      name: "동두천",
      value: 10,
    },
    {
      name: "부천",
      value: 11,
    },
    {
      name: "성남",
      value: 12,
    },
    {
      name: "수원",
      value: 13,
    },
    {
      name: "시흥",
      value: 14,
    },
    {
      name: "안산",
      value: 15,
    },
    {
      name: "안성",
      value: 16,
    },
    {
      name: "안양",
      value: 17,
    },
    {
      name: "양주",
      value: 18,
    },
    {
      name: "양평",
      value: 19,
    },
    {
      name: "여주",
      value: 20,
    },
    {
      name: "연천",
      value: 21,
    },
    {
      name: "오산",
      value: 22,
    },
    {
      name: "용인",
      value: 23,
    },
    {
      name: "의왕",
      value: 24,
    },
    {
      name: "의정부",
      value: 25,
    },
    {
      name: "이천",
      value: 26,
    },
    {
      name: "파주",
      value: 27,
    },
    {
      name: "평택",
      value: 28,
    },
    {
      name: "포천",
      value: 29,
    },
    {
      name: "하남",
      value: 30,
    },
    {
      name: "화성",
      value: 31,
    },
  ];

  const gyeongGiList = [
    {
      name: "가평",
      value: 1,
    },
    {
      name: "고양",
      value: 2,
    },
    {
      name: "과천",
      value: 3,
    },
    {
      name: "광명",
      value: 4,
    },
    {
      name: "광주",
      value: 5,
    },
    {
      name: "구리",
      value: 6,
    },
    {
      name: "군포",
      value: 7,
    },
    {
      name: "김포",
      value: 8,
    },
    {
      name: "남양주",
      value: 9,
    },
    {
      name: "동두천",
      value: 10,
    },
    {
      name: "부천",
      value: 11,
    },
    {
      name: "성남",
      value: 12,
    },
    {
      name: "수원",
      value: 13,
    },
    {
      name: "시흥",
      value: 14,
    },
    {
      name: "안산",
      value: 15,
    },
    {
      name: "안성",
      value: 16,
    },
    {
      name: "안양",
      value: 17,
    },
    {
      name: "양주",
      value: 18,
    },
    {
      name: "양평",
      value: 19,
    },
    {
      name: "여주",
      value: 20,
    },
    {
      name: "연천",
      value: 21,
    },
    {
      name: "오산",
      value: 22,
    },
    {
      name: "용인",
      value: 23,
    },
    {
      name: "의왕",
      value: 24,
    },
    {
      name: "의정부",
      value: 25,
    },
    {
      name: "이천",
      value: 26,
    },
    {
      name: "파주",
      value: 27,
    },
    {
      name: "평택",
      value: 28,
    },
    {
      name: "포천",
      value: 29,
    },
    {
      name: "하남",
      value: 30,
    },
    {
      name: "화성",
      value: 31,
    },
  ];

  const gangWonList = [
    {
      name: "강릉",
      value: 1,
    },
    {
      name: "고성",
      value: 2,
    },
    {
      name: "동해",
      value: 3,
    },
    {
      name: "삼척",
      value: 4,
    },
    {
      name: "속초",
      value: 5,
    },
    {
      name: "양구",
      value: 6,
    },
    {
      name: "양양",
      value: 7,
    },
    {
      name: "영월",
      value: 8,
    },
    {
      name: "원주",
      value: 9,
    },
    {
      name: "인제",
      value: 10,
    },
    {
      name: "정선",
      value: 11,
    },
    {
      name: "철원",
      value: 12,
    },
    {
      name: "춘천",
      value: 13,
    },
    {
      name: "태백",
      value: 14,
    },
    {
      name: "평창",
      value: 15,
    },
    {
      name: "홍천",
      value: 16,
    },
    {
      name: "화천",
      value: 17,
    },
    {
      name: "횡성",
      value: 18,
    },
  ];

  const ChungBokList = [
    {
      name: "괴산",
      value: 1,
    },
    {
      name: "단양",
      value: 2,
    },
    {
      name: "보은",
      value: 3,
    },
    {
      name: "영동",
      value: 4,
    },
    {
      name: "옥천",
      value: 5,
    },
    {
      name: "음성",
      value: 6,
    },
    {
      name: "제천",
      value: 7,
    },
    {
      name: "증평",
      value: 8,
    },
    {
      name: "진천",
      value: 9,
    },
    {
      name: "청원",
      value: 10,
    },
    {
      name: "청주",
      value: 11,
    },
    {
      name: "충주",
      value: 12,
    },
  ];

  const ChungNamList = [
    {
      name: "계룡",
      value: 1,
    },
    {
      name: "공주",
      value: 2,
    },
    {
      name: "금산",
      value: 3,
    },
    {
      name: "논산",
      value: 4,
    },
    {
      name: "당진",
      value: 5,
    },
    {
      name: "보령",
      value: 6,
    },
    {
      name: "부여",
      value: 7,
    },
    {
      name: "서산",
      value: 8,
    },
    {
      name: "서천",
      value: 9,
    },
    {
      name: "아산",
      value: 10,
    },
    {
      name: "예산",
      value: 11,
    },
    {
      name: "천안",
      value: 12,
    },
    {
      name: "청양",
      value: 13,
    },
    {
      name: "태안",
      value: 14,
    },
    {
      name: "홍성",
      value: 15,
    },
  ];

  const gyeongBukList = [
    {
      name: "경산",
      value: 1,
    },
    {
      name: "경주",
      value: 2,
    },
    {
      name: "고령",
      value: 3,
    },
    {
      name: "구미",
      value: 4,
    },
    {
      name: "군위",
      value: 5,
    },
    {
      name: "김천",
      value: 6,
    },
    {
      name: "문경",
      value: 7,
    },
    {
      name: "봉화",
      value: 8,
    },
    {
      name: "상주",
      value: 9,
    },
    {
      name: "성주",
      value: 10,
    },
    {
      name: "안동",
      value: 11,
    },
    {
      name: "영덕",
      value: 12,
    },
    {
      name: "영양",
      value: 13,
    },
    {
      name: "영주",
      value: 14,
    },
    {
      name: "영천",
      value: 15,
    },
    {
      name: "예천",
      value: 16,
    },
    {
      name: "울릉",
      value: 17,
    },
    {
      name: "울진",
      value: 18,
    },
    {
      name: "의성",
      value: 19,
    },
    {
      name: "청도",
      value: 20,
    },
    {
      name: "청송",
      value: 21,
    },
    {
      name: "칠곡",
      value: 22,
    },
    {
      name: "포항",
      value: 23,
    },
  ];

  const gyeongNamList = [
    {
      name: "거제",
      value: 1,
    },
    {
      name: "거창",
      value: 2,
    },
    {
      name: "고성",
      value: 3,
    },
    {
      name: "김해",
      value: 4,
    },
    {
      name: "남해",
      value: 5,
    },
    {
      name: "마산",
      value: 6,
    },
    {
      name: "밀양",
      value: 7,
    },
    {
      name: "사천",
      value: 8,
    },
    {
      name: "산청",
      value: 9,
    },
    {
      name: "양산",
      value: 10,
    },
    {
      name: "의령",
      value: 11,
    },
    {
      name: "진주",
      value: 12,
    },
    {
      name: "진해",
      value: 13,
    },
    {
      name: "창녕",
      value: 14,
    },
    {
      name: "창원",
      value: 15,
    },
    {
      name: "통영",
      value: 16,
    },
    {
      name: "하동",
      value: 17,
    },
    {
      name: "함안",
      value: 18,
    },
    {
      name: "함양",
      value: 19,
    },
    {
      name: "합천",
      value: 20,
    },
  ];

  const jeonBukList = [
    {
      name: "고창",
      value: 1,
    },
    {
      name: "군산",
      value: 2,
    },
    {
      name: "김제",
      value: 3,
    },
    {
      name: "남원",
      value: 4,
    },
    {
      name: "모주",
      value: 5,
    },
    {
      name: "부안",
      value: 6,
    },
    {
      name: "순창",
      value: 7,
    },
    {
      name: "완주",
      value: 8,
    },
    {
      name: "익산",
      value: 9,
    },
    {
      name: "임실",
      value: 10,
    },
    {
      name: "장수",
      value: 11,
    },
    {
      name: "전주",
      value: 12,
    },
    {
      name: "정읍",
      value: 13,
    },
    {
      name: "진안",
      value: 14,
    },
  ];

  const jeonNamList = [
    {
      name: "강진",
      value: 1,
    },
    {
      name: "고흥",
      value: 2,
    },
    {
      name: "곡성",
      value: 3,
    },
    {
      name: "광양",
      value: 4,
    },
    {
      name: "구례",
      value: 5,
    },
    {
      name: "나주",
      value: 6,
    },
    {
      name: "담양",
      value: 7,
    },
    {
      name: "목포",
      value: 8,
    },
    {
      name: "무안",
      value: 9,
    },
    {
      name: "보성",
      value: 10,
    },
    {
      name: "순천",
      value: 11,
    },
    {
      name: "신안",
      value: 12,
    },
    {
      name: "여수",
      value: 13,
    },
    {
      name: "영광",
      value: 14,
    },
    {
      name: "영암",
      value: 15,
    },
    {
      name: "완도",
      value: 16,
    },
    {
      name: "장성",
      value: 17,
    },

    {
      name: "장흥",
      value: 18,
    },
    {
      name: "진도",
      value: 19,
    },
    {
      name: "함평",
      value: 20,
    },
    {
      name: "해남",
      value: 21,
    },
    {
      name: "화순",
      value: 22,
    },
  ];

  const jeJuList = [
    {
      name: "서귀포",
      value: 3,
    },
    {
      name: "제주",
      value: 4,
    },
  ];

  const selectDo = () => {
    return doList.map((item, idx) => (
      <Do
        key={idx}
        onClick={() => {
          localStorage.setItem(LS_KEY_DO, item.value);
        }}
      >
        {item.name}
      </Do>
    ));
  };

  const selectSi = () => {
    return siList.map((item, idx) => (
      <Si
        key={idx}
        onClick={() => {
          localStorage.setItem(LS_KEY_SI, item.value);
        }}
      >
        {item.name}
      </Si>
    ));
  };

  return (
    <div>
      <StList>
        <div>{selectDo()}</div>
      </StList>
      <div>{selectSi()}</div>
      <button onClick={() => navigate("/theme1")}>다음으로</button>
    </div>

    // <StList>
    //   <div>
    //     <Do value="1" onClick={seoulHandler}>
    //       서울
    //     </Do>
    //     <Si>
    //       {seoul ? (
    //         <ul>
    //           <li value="0">전체</li>
    //         </ul>
    //       ) : null}
    //     </Si>
    //     </div>
    //   <div>
    //     <Do value="2" onClick={inCheonHandler}>
    //       인천
    //     </Do>
    //     <Si>
    //       {inCheon ? (
    //         <ul>
    //           <li value="1">전체</li>
    //         </ul>
    //       ) : null}
    //     </Si>
    //   </div>
    //   <div>
    //     <Do value="3" onClick={daeJeonHandler}>
    //       대전
    //     </Do>
    //     <Si>
    //       {daeJeon ? (
    //         <ul>
    //           <li value="0">전체</li>
    //         </ul>
    //       ) : null}
    //     </Si>
    //   </div>
    //   <div>
    //     <Do value="4" onClick={daeGuHandler}>
    //       대구
    //     </Do>
    //     <Si>
    //       {daeGu ? (
    //         <ul>
    //           <li value="0">전체</li>
    //         </ul>
    //       ) : null}
    //     </Si>
    //   </div>
    //   <div>
    //     <Do value="5" onClick={gwangJuHandler}>
    //       광주
    //     </Do>
    //     <Si>
    //       {gwangJu ? (
    //         <ul>
    //           <li value="0">전체</li>
    //         </ul>
    //       ) : null}
    //     </Si>
    //   </div>
    //   <div>
    //     <Do value="6" onClick={buSanHandler}>
    //       부산
    //     </Do>
    //     <Si>
    //       {buSan ? (
    //         <ul>
    //           <li value="0">전체</li>
    //         </ul>
    //       ) : null}
    //     </Si>
    //   </div>
    //   <div>
    //     <Do value="7" onClick={ulSanHandler}>
    //       울산
    //     </Do>
    //     <Si>
    //       {ulSan ? (
    //         <ul>
    //           <li value="0">전체</li>
    //         </ul>
    //       ) : null}
    //     </Si>
    //   </div>
    //   <div>
    //     <Do value="8" onClick={seJongHandler}>
    //       세종
    //     </Do>
    //     <Si>
    //       {seJong ? (
    //         <ul>
    //           <li value="0">전체</li>
    //         </ul>
    //       ) : null}
    //     </Si>
    //   </div>
    //   <div>
    //     <Do value="31" onClick={gyeongGiHandler}>
    //       경기
    //     </Do>
    //     <Si>
    //       {gyeongGi ? (
    //         <ul>
    //           <li value="0">전체</li>
    //           <li value="1">가평</li>
    //           <li value="2">고양</li>
    //           <li value="3">과천</li>
    //           <li value="4">광명</li>
    //           <li value="5">광주</li>
    //           <li value="6">구리</li>
    //           <li value="7">군포</li>
    //           <li value="8">김포</li>
    //           <li value="9">남양주</li>
    //           <li value="10">동두천</li>
    //           <li value="11">부천</li>
    //           <li value="12">성남</li>
    //           <li value="13">수원</li>
    //           <li value="14">시흥</li>
    //           <li value="15">안산</li>
    //           <li value="16">안성</li>
    //           <li value="17">안양</li>
    //           <li value="18">양주</li>
    //           <li value="19">양평</li>
    //           <li value="20">여주</li>
    //           <li value="21">연천</li>
    //           <li value="22">오산</li>
    //           <li value="23">용인</li>
    //           <li value="24">의왕</li>
    //           <li value="25">의정부</li>
    //           <li value="26">이천</li>
    //           <li value="27">파주</li>
    //           <li value="28">평택</li>
    //           <li value="29">포천</li>
    //           <li value="30">하남</li>
    //           <li value="31">화성</li>
    //         </ul>
    //       ) : null}
    //     </Si>
    //   </div>
    //   <div>
    //     <Do value="32" onClick={gangWonHandler}>
    //       강원
    //     </Do>
    //     <Si>
    //       {gangWon ? (
    //         <ul>
    //           <li value="0">전체</li>
    //           <li value="1">강릉</li>
    //           <li value="2">고성</li>
    //           <li value="3">동해</li>
    //           <li value="4">삼척</li>
    //           <li value="5">속초</li>
    //           <li value="6">양구</li>
    //           <li value="7">양양</li>
    //           <li value="8">영월</li>
    //           <li value="9">원주</li>
    //           <li value="10">인제</li>
    //           <li value="11">정선</li>
    //           <li value="12">철원</li>
    //           <li value="13">춘천</li>
    //           <li value="14">태백</li>
    //           <li value="15">평창</li>
    //           <li value="16">홍천</li>
    //           <li value="17">화천</li>
    //           <li value="18">횡성</li>
    //         </ul>
    //       ) : null}
    //     </Si>
    //   </div>
    //   <div>
    //     <Do value="33" onClick={chungBukHandler}>
    //       충청북도
    //     </Do>
    //     <Si>
    //       {chungBuk ? (
    //         <ul>
    //           <li value="0">전체</li>
    //           <li value="1">괴산</li>
    //           <li value="2">단양</li>
    //           <li value="3">보은</li>
    //           <li value="4">영동</li>
    //           <li value="5">옥천</li>
    //           <li value="6">음성</li>
    //           <li value="7">제천</li>
    //           <li value="8">증평</li>
    //           <li value="9">진천</li>
    //           <li value="10">청원</li>
    //           <li value="11">청주</li>
    //           <li value="12">충주</li>
    //         </ul>
    //       ) : null}
    //     </Si>
    //   </div>
    //   <div>
    //     <Do value="34" onClick={chungNamHandler}>
    //       충청남도
    //     </Do>
    //     <Si>
    //       {chungNam ? (
    //         <ul>
    //           <li value="0">전체</li>
    //           <li value="1">계룡</li>
    //           <li value="2">공주</li>
    //           <li value="3">금산</li>
    //           <li value="4">논산</li>
    //           <li value="5">당진</li>
    //           <li value="6">보령</li>
    //           <li value="7">부여</li>
    //           <li value="8">서산</li>
    //           <li value="9">서천</li>
    //           <li value="10">아산</li>
    //           <li value="11">예산</li>
    //           <li value="12">천안</li>
    //           <li value="13">청양</li>
    //           <li value="14">태안</li>
    //           <li value="15">홍성</li>
    //         </ul>
    //       ) : null}
    //     </Si>
    //   </div>
    //   <div>
    //     <Do value="35" onClick={gyeongBukHandler}>
    //       경상북도
    //     </Do>
    //     <Si>
    //       {gyeongBuk ? (
    //         <ul>
    //           <li value="0">전체</li>
    //           <li value="1">경산</li>
    //           <li value="2">경주</li>
    //           <li value="3">고령</li>
    //           <li value="4">구미</li>
    //           <li value="5">군위</li>
    //           <li value="6">김천</li>
    //           <li value="7">문경</li>
    //           <li value="8">봉화</li>
    //           <li value="9">상주</li>
    //           <li value="10">성주</li>
    //           <li value="11">안동</li>
    //           <li value="12">영덕</li>
    //           <li value="13">양양</li>
    //           <li value="14">영주</li>
    //           <li value="15">영천</li>
    //           <li value="16">예천</li>
    //           <li value="17">울릉</li>
    //           <li value="18">울진</li>
    //           <li value="19">의성</li>
    //           <li value="20">청도</li>
    //           <li value="21">청송</li>
    //           <li value="22">칠곡</li>
    //           <li value="23">포항</li>
    //         </ul>
    //       ) : null}
    //     </Si>
    //   </div>
    //   <div>
    //     <Do value="36" onClick={gyeongNamHandler}>
    //       경상남도
    //     </Do>
    //     <Si>
    //       {gyeongNam ? (
    //         <ul>
    //           <li value="0">전체</li>
    //           <li value="1">거제</li>
    //           <li value="2">거창</li>
    //           <li value="3">고성</li>
    //           <li value="4">김해</li>
    //           <li value="5">남해</li>
    //           <li value="6">마산</li>
    //           <li value="7">밀양</li>
    //           <li value="8">사천</li>
    //           <li value="9">산청</li>
    //           <li value="10">양산</li>
    //           <li value="11">의령</li>
    //           <li value="12">진주</li>
    //           <li value="13">진해</li>
    //           <li value="14">창녕</li>
    //           <li value="15">창원</li>
    //           <li value="16">통영</li>
    //           <li value="17">하동</li>
    //           <li value="18">함안</li>
    //           <li value="19">함양</li>
    //           <li value="20">합천</li>
    //         </ul>
    //       ) : null}
    //     </Si>
    //   </div>
    //   <div>
    //     <Do value="37" onClick={jeonBukHandler}>
    //       전라북도
    //     </Do>
    //     <Si>
    //       {jeonBuk ? (
    //         <ul>
    //           <li value="0">전체</li>
    //           <li value="1">고창</li>
    //           <li value="2">군산</li>
    //           <li value="3">김제</li>
    //           <li value="4">남원</li>
    //           <li value="5">모주</li>
    //           <li value="6">부안</li>
    //           <li value="7">순창</li>
    //           <li value="8">완주</li>
    //           <li value="9">익산</li>
    //           <li value="10">임실</li>
    //           <li value="11">장수</li>
    //           <li value="12">전주</li>
    //           <li value="13">정읍</li>
    //           <li value="14">진안</li>
    //         </ul>
    //       ) : null}
    //     </Si>
    //   </div>
    //   <div>
    //     <Do value="38" onClick={jeonNamHandler}>
    //       전라남도
    //     </Do>
    //     <Si>
    //       {jeonNam ? (
    //         <ul>
    //           <li value="0">전체</li>
    //           <li value="1">강진</li>
    //           <li value="2">고흥</li>
    //           <li value="3">곡성</li>
    //           <li value="4">광양</li>
    //           <li value="5">구례</li>
    //           <li value="6">나주</li>
    //           <li value="7">담양</li>
    //           <li value="8">목포</li>
    //           <li value="9">무안</li>
    //           <li value="10">보성</li>
    //           <li value="11">순천</li>
    //           <li value="12">신안</li>
    //           <li value="13">여수</li>
    //           <li value="14">영광</li>
    //           <li value="15">영암</li>
    //           <li value="16">완도</li>
    //           <li value="17">장성</li>
    //           <li value="18">장흥</li>
    //           <li value="19">진도</li>
    //           <li value="20">함평</li>
    //           <li value="21">해남</li>
    //           <li value="22">화순</li>
    //         </ul>
    //       ) : null}
    //     </Si>
    //   </div>
    //   <div>
    //     <Do value="39" onClick={jeJuHandler}>
    //       제주
    //     </Do>
    //     <Si>
    //       {jeJu ? (
    //         <ul>
    //           <li value="0">전체</li>
    //           <li value="1">서귀포</li>
    //           <li value="2">제주</li>
    //         </ul>
    //       ) : null}
    //     </Si>
    //   </div>
    // </StList>
  );
};

export default List;

const StList = styled.ul`
  width: 428px;
  padding-left: 0;

  & li,
  ul {
    list-style: none;
    float: left;
  }

  & li {
    cursor: pointer;
    margin-top: 6px;
    &:hover {
      font-weight: bold;
    }
  }

  & div {
    display: inline-block;
    width: 60%;
    margin-left: 20px;
  }
`;

const Do = styled.div`
  width: calc(50% - 3rem);
  font-size: 1rem;
  font-weight: 400;
  margin-right: 1rem;
  color: #1a1a1a;
  line-height: 2rem;
  box-sizing: border-box;
  background: url(${check}) right 1rem top 1rem no-repeat;
  border-bottom: 1px solid #e6e6e6;
  cursor: pointer;
  /* float: left; */

  &:hover {
    font-weight: bold;
  }
  background-color: red;
`;

const Si = styled.div`
  float: right;
  width: 50%;
  margin-left: 10px;
  margin-right: 20px;
`;
