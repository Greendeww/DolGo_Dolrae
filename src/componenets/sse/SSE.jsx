import React, { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { instance } from "../../shared/Api";
import arrow from "../../assert/header/arrow.png";

const SSE = ({ modal, setModal }) => {
  const token = sessionStorage.getItem("ACCESS_TOKEN");
  const [data, setData] = useState();
  const [count, setCount] = useState();

  const filteredData = data && data.filter((data) => data.read === false);

  const getNotice = async () => {
    const res = await instance.get("/api/auth/notice/notifications");
    setData(res.data.notificationResponses);
    setCount(res.data.unreadCount);
  };

  const readHandler = async (id) => {
    const res = await instance.patch(`/api/auth/notice/read/${id}`);
    console.log(res);
  };

  useEffect(() => {
    if (token) {
      getNotice();
    }
  }, []);

  return (
    <Background onClick={() => setModal(!modal)}>
      <Content onClick={() => null}>
        <img alt="" src={arrow} />
        <StSse>
          {filteredData?.map((list) => (
            <Container key={list.id}>
              <List>
                <p style={{ fontSize: "15px" }}>{list.content}</p>
              </List>
              <button onClick={() => readHandler(list.id)}>읽음</button>
            </Container>
          ))}
        </StSse>
      </Content>
    </Background>
  );
};

export default SSE;

const Background = styled.div`
  height: 100%;
  max-width: 428px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  position: fixed;
  top: 0;
  text-align: center;
  z-index: 10;
  background: rgba(0, 0, 0, 0.6);
  & img {
    width: 200px;
    position: absolute;
    top: -20px;
    left: -60px;
  }
`;

const Content = styled.div`
  height: 40%;
  width: 98%;
  background-color: #eef6fa;
  margin-top: 80px;
  z-index: 11;
  border-radius: 15px;
`;

const StSse = styled.div`
  margin: 0 auto;
  cursor: default;
  width: 90%;
  height: 100%;
  position: relative;
  overflow: scroll;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 12;
  vertical-align: middle;

  /* 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }

  & button {
    height: 30px;
    width: 15%;
    background: #ffc0c0;
    border: none;
    border-radius: 15px;
    font-weight: bold;
    color: white;
    margin: auto;
    cursor: pointer;
  }
`;

const List = styled.div`
  width: 80%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  margin: 0 auto;
  padding: 5px;
  padding-top: 0;
  padding-left: 0;

  & p {
    font-size: 15px;
    line-height: 20px;
    word-break: break-all;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 15px auto;
`;
