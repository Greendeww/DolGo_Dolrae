import React, { useState } from "react";
import styled from "styled-components";
import check from "../../assert/check.png";

const List = () => {
  
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

  const seoulHandler = (e) => {
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

  return (
    <StList>
        <Ul value="1" onClick={seoulHandler}>
          서울
          {seoul ? (
            <ul>
              <li value="0">전체</li>
            </ul>
          ) : null}
        </Ul>
        <Ul  value="2" onClick={inCheonHandler}>
          인천
          {inCheon ? (
            <ul>
              <li value="1">전체</li>
            </ul>
          ) : null}
        </Ul>
        <Ul value="3" onClick={daeJeonHandler}>
          대전
          {daeJeon ? (
            <ul>
              <li value="0">전체</li>
            </ul>
          ) : null}
        </Ul>
        <Ul value="4" onClick={daeGuHandler}>
          대구
          {daeGu ? (
            <ul>
              <li value="0">전체</li>
            </ul>
          ) : null}
        </Ul>
        <Ul  value="5"onClick={gwangJuHandler}>
          광주
          {gwangJu ? (
            <ul>
              <li value="0">전체</li>
            </ul>
          ) : null}
        </Ul>
        <Ul value="6" onClick={buSanHandler}>
          부산
          {buSan ? (
            <ul>
              <li value="0">전체</li>
            </ul>
          ) : null}
        </Ul>
        <Ul value="7" onClick={ulSanHandler}>
          울산
          {ulSan ? (
            <ul>
              <li value="0">전체</li>
            </ul>
          ) : null}
        </Ul>
        <Ul value="8" onClick={seJongHandler}>
          세종
          {seJong ? (
            <ul>
              <li value="0">전체</li>
            </ul>
          ) : null}
        </Ul>
        <Ul value="31" onClick={gyeongGiHandler}>
          경기
          {gyeongGi ? (
            <ul>
              <li value="0">전체</li>
              <li value="1">가평</li>
              <li value="2">고양</li>
              <li value="3">과천</li>
              <li value="4">광명</li>
              <li value="5">광주</li>
              <li value="6">구리</li>
              <li value="7">군포</li>
              <li value="8">김포</li>
              <li value="9">남양주</li>
              <li value="10">동두천</li>
              <li value="11">부천</li>
              <li value="12">성남</li>
              <li value="13">수원</li>
              <li value="14">시흥</li>
              <li value="15">안산</li>
              <li value="16">안성</li>
              <li value="17">안양</li>
              <li value="18">양주</li>
              <li value="19">양평</li>
              <li value="20">여주</li>
              <li value="21">연천</li>
              <li value="22">오산</li>
              <li value="23">용인</li>
              <li value="24">의왕</li>
              <li value="25">의정부</li>
              <li value="26">이천</li>
              <li value="27">파주</li>
              <li value="28">평택</li>
              <li value="29">포천</li>
              <li value="30">하남</li>
              <li value="31">화성</li>
            </ul>
          ) : null}
        </Ul>
        <Ul value="32" onClick={gangWonHandler}>
          강원
          {gangWon ? (
            <ul>
              <li value="0">전체</li>
              <li value="1">강릉</li>
              <li value="2">고성</li>
              <li value="3">동해</li>
              <li value="4">삼척</li>
              <li value="5">속초</li>
              <li value="6">양구</li>
              <li value="7">양양</li>
              <li value="8">영월</li>
              <li value="9">원주</li>
              <li value="10">인제</li>
              <li value="11">정선</li>
              <li value="12">철원</li>
              <li value="13">춘천</li>
              <li value="14">태백</li>
              <li value="15">평창</li>
              <li value="16">홍천</li>
              <li value="17">화천</li>
              <li value="18">횡성</li>
            </ul>
          ) : null}
        </Ul>
        <Ul value="33" onClick={chungBukHandler}>
          충청북도
          {chungBuk ? (
            <ul>
              <li value="0">전체</li>
              <li value="1">괴산</li>
              <li value="2">단양</li>
              <li value="3">보은</li>
              <li value="4">영동</li>
              <li value="5">옥천</li>
              <li value="6">음성</li>
              <li value="7">제천</li>
              <li value="8">증평</li>
              <li value="9">진천</li>
              <li value="10">청원</li>
              <li value="11">청주</li>
              <li value="12">충주</li>
            </ul>
          ) : null}
        </Ul>
        <Ul value="34" onClick={chungNamHandler}>
          충청남도
          {chungNam ? (
            <ul>
              <li value="0">전체</li>
              <li value="1">계룡</li>
              <li value="2">공주</li>
              <li value="3">금산</li>
              <li value="4">논산</li>
              <li value="5">당진</li>
              <li value="6">보령</li>
              <li value="7">부여</li>
              <li value="8">서산</li>
              <li value="9">서천</li>
              <li value="10">아산</li>
              <li value="11">예산</li>
              <li value="12">천안</li>
              <li value="13">청양</li>
              <li value="14">태안</li>
              <li value="15">홍성</li>
            </ul>
          ) : null}
        </Ul>
        <Ul value="35" onClick={gyeongBukHandler}>
          경상북도
          {gyeongBuk ? (
            <ul>
              <li value="0">전체</li>
              <li value="1">경산</li>
              <li value="2">경주</li>
              <li value="3">고령</li>
              <li value="4">구미</li>
              <li value="5">군위</li>
              <li value="6">김천</li>
              <li value="7">문경</li>
              <li value="8">봉화</li>
              <li value="9">상주</li>
              <li value="10">성주</li>
              <li value="11">안동</li>
              <li value="12">영덕</li>
              <li value="13">양양</li>
              <li value="14">영주</li>
              <li value="15">영천</li>
              <li value="16">예천</li>
              <li value="17">울릉</li>
              <li value="18">울진</li>
              <li value="19">의성</li>
              <li value="20">청도</li>
              <li value="21">청송</li>
              <li value="22">칠곡</li>
              <li value="23">포항</li>
            </ul>
          ) : null}
        </Ul>
        <Ul value="36" onClick={gyeongNamHandler}>
          경상남도
          {gyeongNam ? (
            <ul>
              <li value="0">전체</li>
              <li value="1">거제</li>
              <li value="2">거창</li>
              <li value="3">고성</li>
              <li value="4">김해</li>
              <li value="5">남해</li>
              <li value="6">마산</li>
              <li value="7">밀양</li>
              <li value="8">사천</li>
              <li value="9">산청</li>
              <li value="10">양산</li>
              <li value="11">의령</li>
              <li value="12">진주</li>
              <li value="13">진해</li>
              <li value="14">창녕</li>
              <li value="15">창원</li>
              <li value="16">통영</li>
              <li value="17">하동</li>
              <li value="18">함안</li>
              <li value="19">함양</li>
              <li value="20">합천</li>
            </ul>
          ) : null}
        </Ul>
        <Ul value="37" onClick={jeonBukHandler}>
          전라북도
          {jeonBuk ? (
            <ul>
              <li value="0">전체</li>
              <li value="1">고창</li>
              <li value="2">군산</li>
              <li value="3">김제</li>
              <li value="4">남원</li>
              <li value="5">모주</li>
              <li value="6">부안</li>
              <li value="7">순창</li>
              <li value="8">완주</li>
              <li value="9">익산</li>
              <li value="10">임실</li>
              <li value="11">장수</li>
              <li value="12">전주</li>
              <li value="13">정읍</li>
              <li value="14">진안</li>
            </ul>
          ) : null}
        </Ul>
        <Ul value="38" onClick={jeonNamHandler}>
          전라남도
          {jeonNam ? (
            <ul>
              <li value="0">전체</li>
              <li value="1">강진</li>
              <li value="2">고흥</li>
              <li value="3">곡성</li>
              <li value="4">광양</li>
              <li value="5">구례</li>
              <li value="6">나주</li>
              <li value="7">담양</li>
              <li value="8">목포</li>
              <li value="9">무안</li>
              <li value="10">보성</li>
              <li value="11">순천</li>
              <li value="12">신안</li>
              <li value="13">여수</li>
              <li value="14">영광</li>
              <li value="15">영암</li>
              <li value="16">완도</li>
              <li value="17">장성</li>
              <li value="18">장흥</li>
              <li value="19">진도</li>
              <li value="20">함평</li>
              <li value="21">해남</li>
              <li value="22">화순</li>
            </ul>
          ) : null}
        </Ul>
        <Ul value="39" onClick={jeJuHandler}>
          제주
          {jeJu ? (
            <ul>
              <li value="0">전체</li>
              <li value="1">서귀포</li>
              <li value="2">제주</li>
            </ul>
          ) : null}
        </Ul>
    </StList>
  );
};

export default List;

const StList = styled.ul`
  width: 700px;
  display:block;
  & li,
  ul {
    list-style: none;
  }
`;

const Ul = styled.div`
  font-size: 1rem;
  font-weight: 400;
  display: block;
  float: left;
  width: calc(50% - 1rem);
  margin-right: 1rem;
  min-width: calc(50% - 1rem);
  color: #1a1a1a;
  line-height: 2rem;
  box-sizing: border-box;
  background: url(${check}) right 1rem top 1rem no-repeat;
  border-bottom: 1px solid #e6e6e6;
  cursor: pointer;

  /* & ul > li {
    margin: auto -40px;
    display: none;
  }

  &:active {
    & > ul > li {
      display: block;
    }
  } */

  &:hover {
    font-weight: bold;
  }

`;
