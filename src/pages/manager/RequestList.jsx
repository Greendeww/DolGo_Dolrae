import React from "react";
import styled from "styled-components";
import Header from "../../componenets/header/Header";
import { useState, useEffect } from "react";
import { getApi } from "../../shared/Api";

const Administrator = () => {

  const [list, setList] = useState([]);

  const getList = async () => {
    const response = await getApi("/api/auth/order?pageNum=1");
    console.log(response.data);
    setList(response.data);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <StAdministrator>
      <Header />
      <Container>
        <Title>요청 목록</Title>
        {list.map((item) => {
          return (
            <Contents key={item.id}>
              <Date>{item.createdAt}</Date>
              <Report>{item.state}</Report>
            </Contents>
          );
        })}
      </Container>
    </StAdministrator>
  );
}

export default Administrator;

const StAdministrator = styled.div`
  max-width: 428px;
  width: 100%;
  margin: 0 auto;
  color: #727272;
`;

const Container = styled.div`
  padding-top: 100px;
`;

const Title = styled.div`
  font-weight: ;
  font-size: 29px;
  line-height: 40px;
  text-align: center;
  color: #bfb8b8;
`;

const Contents = styled.div`
  width: 90%;
  height: 35px;
  background-color: #eef6fa;
  border-radius: 20px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
`;

const Date = styled.div`
  margin: 0px 0px 0px 60px;
  font-weight: 400;
  font-size: 15px;
  line-height: 35px;
  text-align: center;
  color: #696969;
`;

const Report = styled.div`
  margin: 0px 0px 0px 60px;
  font-weight: 400;
  font-size: 15px;
  line-height: 35px;
  text-align: center;
  color: #696969;
`;
