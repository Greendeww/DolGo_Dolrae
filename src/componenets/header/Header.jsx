import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import css from "../../css/header.css";
import dolphin from "../../assert/header/logo_.png";
import bell from "../../assert/header/bell.png";
import { instance } from "../../shared/Api";

import ToTheTop from "../scroll/ToTheTop";

import Search from "./Search";
import burger from "../../assert/header/burger.png";
import event from "../../assert/header/event.png";
import SSE from "../sse/SSE";
import { useEffect } from "react";

const Header = ({ title }) => {
  const navigate = useNavigate();

  // 햄버거 메뉴 modal
  const [modal, setModal] = useState(false);

  // sse modal
  const [notice, setNotice] = useState(false);

  // 로그인 여부와 관리자 여부를 확인하기 위해 storage에서 가져온 데이터
  const role = sessionStorage.getItem("role");
  const token = sessionStorage.getItem("ACCESS_TOKEN");

  // 클릭 시 모달 열고 닫기
  const onModalHandler = (e) => {
    setModal(!modal);
  };

  // 로그아웃 클릭 시, 데이터 전송 & storage 초기화
  const logout = async () => {
    const response = await instance.post("/api/auth/member/logout");
    alert(response.data);
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("nickname");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("ACCESS_TOKEN");
    sessionStorage.removeItem("REFRESH_TOKEN");
    sessionStorage.removeItem("THEME_CODE");
    sessionStorage.removeItem("THEME_NAME");
    sessionStorage.removeItem("AREA_CODE");
    sessionStorage.removeItem("AREA_NAME");
    sessionStorage.removeItem("SIGUNGU_CODE");
    sessionStorage.removeItem("SIGUNGU_NAME");
    sessionStorage.removeItem("never");
    navigate("/");
  };

  // sse
  const [count, setCount] = useState();

  const getNotice = async () => {
    const res = await instance.get("/api/auth/notice/notifications");
    setCount(res.data.unreadCount);
  };

  const noticeModalHandler = () => {
    if (token) {
      setNotice(!notice);
    }
  };

  useEffect(() => {
    if (token) {
      getNotice();
    }
  }, []);

  return (
    <StHeader>
      <Top>
        <Bell
          alt=""
          src={bell}
          style={{ paddingLeft: "8px" }}
          onClick={noticeModalHandler}
        />
        {/* 알림 수가 1 이상이면 표시해주기 */}
        {count === 0 || count === undefined ? null : <Count />}
        {/* 알림 아이콘 클릭하면 sse 모달 open */}
        {notice === true ? <SSE modal={notice} setModal={setNotice} /> : null}
        {/* <Bell
          alt=""
          src={event}
          onClick={() =>
            window.open(
              "https://blog.naver.com/PostView.naver?blogId=wmr06102&Redirect=View&logNo=222905608839&categoryNo=13&isAfterWrite=true&isMrblogPost=false&isHappyBeanLeverage=true&contentLength=6267&isWeeklyDiaryPopupEnabled=false"
            )
          }
        /> */}
        <img alt="" src={dolphin} onClick={() => navigate("/")} />
        <img
          alt=""
          src={burger}
          onClick={onModalHandler}
          style={{ paddingBottom: "7px", paddingRight: "12px" }}
        />
      </Top>
      {modal === true ? (
        <MenuContainer onClick={onModalHandler}>
          <Menu>
            <h2 onClick={() => navigate("/")}>홈</h2>
            <h2 onClick={() => navigate("/select")}>지역별 조회</h2>
            <h2 onClick={() => navigate("/random")}>랜덤 추천</h2>
            {/* <h2 onClick={() => navigate("/ideal")}>이상형 월드컵</h2> */}
            <br />
            {token !== null ? (
              <>
                <h2 onClick={() => navigate("/request/post")}>
                  장소 등록 요청
                </h2>
                <h2 onClick={() => navigate("/mypage")}>마이페이지</h2>
              </>
            ) : null}
            <br />
            {role === "ADMIN" ? (
              <>
                <h2 onClick={() => navigate("/request/list")}>* 요청 목록 *</h2>
                <h2 onClick={() => navigate("/post")}>* 게시글 추가 *</h2>
              </>
            ) : null}
            <div>
              {token === null ? (
                <h2 onClick={() => navigate("/login")}>로그인 ＞</h2>
              ) : (
                <h2
                  onClick={() => {
                    logout();
                    setModal(!modal);
                  }}
                >
                  로그아웃 ＞
                </h2>
              )}
            </div>
          </Menu>
        </MenuContainer>
      ) : null}

      <ToTheTop />

      <Search title={title} />
    </StHeader>
  );
};

export default Header;

const StHeader = styled.div`
  max-width: 428px;
  width: 100%;
  margin: 0 auto;
  z-index: 3;
  position: fixed;
  top: 0;

  & a {
    &:hover {
      cursor: pointer;
    }
  }
`;

const Top = styled.div`
  background-color: #abd4e2;
  height: 70px;
  max-width: 428px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  position: relative;
  /* & h2 {
    color: white;
    background-image: url(${dolphin});
    background-repeat: no-repeat;
  } */

  & img {
    margin-top: 5px;
    &:hover {
      cursor: pointer;
    }
  }

  & p {
    font-size: 35px;
    margin-top: 8px;
    margin-left: 10px;
  }
`;

const Count = styled.div`
  width: 10px;
  height: 10px;
  position: absolute;
  top: 10px;
  left: 43px;
  background-color: red;
  border-radius: 50px;
`;

const Bell = styled.img`
  width: 40px;
  height: 40px;
  margin: auto 0;
  margin-left: 10px;
  position: relative;
  top: 8px;

  &:hover {
    cursor: pointer;
  }
`;

const MenuContainer = styled.div`
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* background: rgba(0, 0, 0, 0.3); */
`;

const Menu = styled.div`
  position: absolute;
  left: 50%;
  max-width: 214px;
  width: 50%;
  float: right;
  height: 100vh;
  top: calc(0vh + 70px);
  background-color: #abd4e2;
  text-align: center;
  color: #535353;
  transition: all 0.3s;
  z-index: 30;

  & h2 {
    /* text-decoration: underline; */
    margin: 30px auto;

    &:hover {
      cursor: pointer;
    }
  }

  & div {
    margin-top: 60px;
    color: white;
    & h2 {
      text-decoration: none;
    }
  }
`;

const Log = styled.div``;
