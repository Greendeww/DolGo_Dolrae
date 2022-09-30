import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import back from "../../assert/header/pngwing.com.png";
import css from "../../css/header.css";
import dolphin from "../../assert/header/dolphin (2).png";

const Header = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const onModalHandler = (e) => {
    e.preventDefault();
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
    <St>
      <StHeader>
        <Back className="menu-open" onClick={() => navigate(-1)} />
        {/* <img src={dolphin}></img> */}
        <a className="menu-trigger" onClick={onModalHandler}>
          <span></span>
          <span></span>
          <span></span>
        </a>
      </StHeader>
      <div>
        {modal === true ? (
          <HeaderMenu>
            <h2 onClick={() => navigate("/")}>Home</h2>
            <h2 onClick={() => navigate("/select")}>Search</h2>
            <h2 onClick={() => navigate("/random")}>Random</h2>
            <h2 onClick={() => navigate("/mypage")}>MyPage</h2>
            <h2 onClick={() => navigate("/write")}>Write</h2>
            <div>
              <h2 onClick={() => navigate("/login")}>로그인 ></h2>
            </div>
          </HeaderMenu>
        ) : null}
      </div>
    </St>
  );
};

export default Header;

const St = styled.div`
  width: 428px;
  margin: 0 auto;

  & a {
    &:hover {
      cursor: pointer;
    }
  }
`;

const StHeader = styled.div`
  background-color: rgba(121, 185, 211, 0.62);
  height: 70px;
  width: 428px;
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  /* & h2 {
    color: white;
    background-image: url(${dolphin});
    background-repeat: no-repeat;
  } */

  & img {
    width: 50px;
    height: 50px;
    margin-top: 10px;
  }
`;

const Back = styled.span`
  background-image: url(${back});
  background-repeat: no-repeat;
  width: 45px;
  height: 45px;
  margin: auto 0;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const HeaderMenu = styled.div`
  position: absolute;
  left: 50%;
  width: 214px;
  height: 100%;
  float: right;
  background-color: #abd4e2;
  text-align: center;
  color: #535353;
  /* right: -60px;  */
  transition: all 0.3s;

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
