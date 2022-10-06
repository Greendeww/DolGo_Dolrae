import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import css from "../../css/header.css";
<<<<<<< HEAD
// import dolphin from "../../assert/header/dolphin (2).png";

=======
import dolphin from "../../assert/header/logo_.png";
import bell from "../../assert/header/bell.png";
import { useDispatch } from "react-redux";
import { __logout } from "../../redux/modules/user";
>>>>>>> 5ee8811e18d1e2223d044b3f5da120767e278844

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);

  const username = localStorage.getItem("username");

  const onModalHandler = (e) => {
    // e.preventDefault();
    setModal(!modal);
  };

  // const menuTrigger = document.querySelector(".menu-trigger");

  // menuTrigger.addEventListener("click", (event) => {
  //   event.currentTarget.classList.toggle("active-1");
  // });

  window.onload = () => {
    const menuTrigger = document.querySelector(".menu-trigger");

    menuTrigger.addEventListener("click", (event) => {
      event.currentTarget.classList.toggle("active-1");
    });
  };

  return (
    <StHeader>
      <Top>
        <Bell alt="" src={bell} />
        <img alt="" src={dolphin} onClick={() => navigate("/")} />
        <div className="menu-trigger" onClick={onModalHandler}>
          <span />
          <span />
          <span />
        </div>
      </Top>
      {modal === true ? (
        <Menu>
          <h2 onClick={() => navigate("/")}>Home</h2>
          <h2 onClick={() => navigate("/select")}>Search</h2>
          <h2 onClick={() => navigate("/random")}>Random</h2>
          {username !== null ? (
            <>
              <h2 onClick={() => navigate("/mypage")}>MyPage</h2>
              <h2 onClick={() => navigate("/write")}>Write</h2>
            </>
          ) : null}
          <div>
            {username === null ? (
              <h2 onClick={() => navigate("/login")}>로그인</h2>
            ) : (
              <h2
                onClick={() => {
                  dispatch(__logout());
                  navigate('/');
                }}
              >
                로그아웃
              </h2>
            )}
          </div>
        </Menu>
      ) : null}
    </StHeader>
  );
};

export default Header;

const StHeader = styled.div`
  width: 428px;
  margin: 0 auto;
  z-index: 3;
  position: fixed;

  & a {
    &:hover {
      cursor: pointer;
    }
  }
`;

const Top = styled.div`
  background-color: #abd4e2;
  height: 70px;
  width: 430px;
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
`;

const Bell = styled.img`
  width: 42px;
  height: 42px;
  margin: auto 0;
  margin-left: 13px;
  position: relative;
  top: 5px;

  &:hover {
    cursor: pointer;
  }
`;

const Menu = styled.div`
  position: absolute;
  left: 50%;
  width: 216px;
  float: right;
  background-color: #abd4e2;
  text-align: center;
  color: #535353;
  transition: all 0.3s;
  z-index: 10;

  & h2 {
    text-decoration: underline;

    &:hover {
      cursor: pointer;
    }
  }

  & div {
    margin-top: 520px;
    color: white;
    & h2 {
      text-decoration: none;
    }
  }
`;

