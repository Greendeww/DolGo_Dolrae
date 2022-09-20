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
        <Ul onClick={seoulHandler}>
          서울
          {seoul ? (
            <ul>
              <li>전체</li>
            </ul>
          ) : null}
        </Ul>
        <Ul onClick={inCheonHandler}>
          인천
          {inCheon ? (
            <ul>
              <li>전체</li>
            </ul>
          ) : null}
        </Ul>
        <Ul onClick={daeJeonHandler}>
          대전
          {daeJeon ? (
            <ul>
              <li>전체</li>
            </ul>
          ) : null}
        </Ul>
        <Ul onClick={daeGuHandler}>
          대구
          {daeGu ? (
            <ul>
              <li>전체</li>
            </ul>
          ) : null}
        </Ul>
        <Ul onClick={gwangJuHandler}>
          광주
          {gwangJu ? (
            <ul>
              <li>전체</li>
            </ul>
          ) : null}
        </Ul>
        <Ul onClick={buSanHandler}>
          부산
          {buSan ? (
            <ul>
              <li>전체</li>
            </ul>
          ) : null}
        </Ul>
        <Ul onClick={ulSanHandler}>
          울산
          {ulSan ? (
            <ul>
              <li>전체</li>
            </ul>
          ) : null}
        </Ul>
        <Ul onClick={seJongHandler}>
          세종
          {seJong ? (
            <ul>
              <li>전체</li>
            </ul>
          ) : null}
        </Ul>
        <Ul onClick={gyeongGiHandler}>
          경기
          {gyeongGi ? (
            <ul>
              <li>가평</li>
              <li>고양</li>
              <li>과천</li>
              <li>광명</li>
              <li>광주</li>
              <li>구리</li>
              <li>군포</li>
              <li>김포</li>
              <li>남양주</li>
              <li>동두천</li>
              <li>부천</li>
              <li>성남</li>
              <li>수원</li>
              <li>시흥</li>
              <li>안산</li>
              <li>안성</li>
              <li>안양</li>
              <li>양주</li>
              <li>양평</li>
              <li>여주</li>
              <li>연천</li>
              <li>오산</li>
              <li>용인</li>
              <li>의왕</li>
              <li>의정부</li>
              <li>이천</li>
              <li>파주</li>
              <li>평택</li>
              <li>포천</li>
              <li>하남</li>
              <li>화성</li>
            </ul>
          ) : null}
        </Ul>
        <Ul onClick={gangWonHandler}>
          강원
          {gangWon ? (
            <ul>
              <li>강릉</li>
              <li>고성</li>
              <li>동해</li>
              <li>삼척</li>
              <li>속초</li>
              <li>양구</li>
              <li>양양</li>
              <li>영월</li>
              <li>원주</li>
              <li>인제</li>
              <li>정선</li>
              <li>철원</li>
              <li>춘천</li>
              <li>태백</li>
              <li>평창</li>
              <li>홍천</li>
              <li>화천</li>
              <li>횡성</li>
            </ul>
          ) : null}
        </Ul>
        <Ul onClick={chungBukHandler}>
          충청북도
          {chungBuk ? (
            <ul>
              <li>괴산</li>
              <li>단양</li>
              <li>보은</li>
              <li>영동</li>
              <li>옥천</li>
              <li>음성</li>
              <li>제천</li>
              <li>증평</li>
              <li>진천</li>
              <li>청원</li>
              <li>청주</li>
              <li>충주</li>
            </ul>
          ) : null}
        </Ul>
        <Ul onClick={chungNamHandler}>
          충청남도
          {chungNam ? (
            <ul>
              <li>계룡</li>
              <li>공주</li>
              <li>금산</li>
              <li>논산</li>
              <li>당진</li>
              <li>보령</li>
              <li>부여</li>
              <li>서산</li>
              <li>서천</li>
              <li>아산</li>
              <li>예산</li>
              <li>천안</li>
              <li>청양</li>
              <li>태안</li>
              <li>홍성</li>
            </ul>
          ) : null}
        </Ul>
        <Ul onClick={gyeongBukHandler}>
          경상북도
          {gyeongBuk ? (
            <ul>
              <li>경산</li>
              <li>경주</li>
              <li>고령</li>
              <li>구미</li>
              <li>군위</li>
              <li>김천</li>
              <li>문경</li>
              <li>봉화</li>
              <li>상주</li>
              <li>성주</li>
              <li>안동</li>
              <li>영덕</li>
              <li>양양</li>
              <li>영주</li>
              <li>영천</li>
              <li>예천</li>
              <li>울릉</li>
              <li>울진</li>
              <li>의성</li>
              <li>청도</li>
              <li>청송</li>
              <li>칠곡</li>
              <li>포항</li>
            </ul>
          ) : null}
        </Ul>
        <Ul onClick={gyeongNamHandler}>
          경상남도
          {gyeongNam ? (
            <ul>
              <li>거제</li>
              <li>거창</li>
              <li>고성</li>
              <li>김해</li>
              <li>남해</li>
              <li>마산</li>
              <li>밀양</li>
              <li>사천</li>
              <li>산청</li>
              <li>양산</li>
              <li>의령</li>
              <li>진주</li>
              <li>진해</li>
              <li>창녕</li>
              <li>창원</li>
              <li>통영</li>
              <li>하동</li>
              <li>함안</li>
              <li>함양</li>
              <li>합천</li>
            </ul>
          ) : null}
        </Ul>
        <Ul onClick={jeonBukHandler}>
          전라북도
          {jeonBuk ? (
            <ul>
              <li>고창</li>
              <li>군산</li>
              <li>김제</li>
              <li>남원</li>
              <li>모주</li>
              <li>부안</li>
              <li>순창</li>
              <li>완주</li>
              <li>익산</li>
              <li>임실</li>
              <li>장수</li>
              <li>전주</li>
              <li>정읍</li>
              <li>진안</li>
            </ul>
          ) : null}
        </Ul>
        <Ul onClick={jeonNamHandler}>
          전라남도
          {jeonNam ? (
            <ul>
              <li>강진</li>
              <li>고흥</li>
              <li>곡성</li>
              <li>광양</li>
              <li>구례</li>
              <li>나주</li>
              <li>담양</li>
              <li>목포</li>
              <li>무안</li>
              <li>보성</li>
              <li>순천</li>
              <li>신안</li>
              <li>여수</li>
              <li>영광</li>
              <li>영암</li>
              <li>완도</li>
              <li>장성</li>
              <li>장흥</li>
              <li>진도</li>
              <li>함평</li>
              <li>해남</li>
              <li>화순</li>
            </ul>
          ) : null}
        </Ul>
        <Ul onClick={jeJuHandler}>
          제주
          {jeJu ? (
            <ul>
              <li>서귀포</li>
              <li>제주</li>
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
