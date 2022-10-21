import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import css from "../../css/header.css";
import dolphin from "../../assert/header/logo_.png";
import bell from "../../assert/header/bell.png";
import { instance } from "../../shared/Api";
import Search from "./Search";
import burger from "../../assert/header/burger.png";
import event from "../../assert/header/event.png";

const Header = ({ title }) => {
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);

  const role = localStorage.getItem("role");
  const token = localStorage.getItem("ACCESS_TOKEN");

  const onModalHandler = (e) => {
    setModal(!modal);
  };

  const logout = async () => {
    const response = await instance.post("/api/auth/member/logout");
    alert(response.data);
    localStorage.removeItem("username");
    localStorage.removeItem("nickname");
    localStorage.removeItem("role");
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("REFRESH_TOKEN");
    localStorage.removeItem("THEME_CODE");
    localStorage.removeItem("THEME_NAME");
    localStorage.removeItem("AREA_CODE");
    localStorage.removeItem("AREA_NAME");
    localStorage.removeItem("SIGUNGU_CODE");
    localStorage.removeItem("SIGUNGU_NAME");
    localStorage.removeItem("never");
    navigate("/");
  };

  return (
    <StHeader>
      <Top>
        {/* <Bell alt="" src={bell} style={{ paddingLeft: "8px" }} /> */}
        <Bell
          alt=""
          src={event}
          onClick={() =>
            window.open(
              "https://blog.naver.com/PostView.naver?blogId=wmr06102&Redirect=View&logNo=222905608839&categoryNo=13&isAfterWrite=true&isMrblogPost=false&isHappyBeanLeverage=true&contentLength=6267&isWeeklyDiaryPopupEnabled=false"
            )
          }
        />
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
            {token !== null ? (
              <>
                <h2 onClick={() => navigate("/mypage")}>마이페이지</h2>
                <h2 onClick={() => navigate("/request/post")}>
                  장소 등록 요청
                </h2>
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
  /* & h2 {
    color: white;
    background-image: url(${dolphin});
    background-repeat: no-repeat;
  } */

  & div {
    top: 10px;
    &:hover {
      cursor: pointer;
    }
  }

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

const Bell = styled.img`
  width: 38px;
  height: 38px;
  margin: auto 0;
  margin-left: 20px;
  position: relative;
  top: 7px;

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
