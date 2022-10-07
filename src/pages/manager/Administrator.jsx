import React from "react";
import styled from "styled-components";
import Header from "../../componenets/header/Header";
import Footer from "../../componenets/footer/Footer";
import { useState, useEffect } from 'react';
import { getApi } from "../../shared/Api";

function Administrator () {

    const [ contents, setContent ] = useState([]);

    const fetchPost = async () => {
        const response = await getApi("/api/auth/order?pageNum=1")

        console.log(response.data);
        setContent([response.data[0]]);
    }

    useEffect( () => {
        fetchPost();
    }, []);
    
    return (
        <Div>
            <Header></Header>
            <Body>
                <Title>고객의 소리</Title>
                <Box>
                    {contents.map((item ,index) => {return(
                            <div key={index}>
                                <Contents>
                                    <Number>{item.id}</Number>
                                    <Date>{item.createdAt}</Date>
                                    <Report>{item.state}</Report>
                                </Contents>
                            </div>
                        )
                    })}
                            <Contents>
                                <Number>1.</Number>
                                <Date>2022-10-06</Date>
                                <Report>수정/삭제 요청</Report>
                            </Contents>
                </Box>
            </Body>
            <Footer></Footer>
        </Div>
    )
}

export default Administrator;

const Div = styled.div `
    width: 428px;
    margin: 0px auto 0px auto;
`
const Body = styled.div `
    width: 430px;
    min-height: 700px;
    background-color: rgba(121, 185, 211, 0.3);
`
const Title = styled.div `
    padding: 50px 0px 0px 0px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 40px;

    text-align: center;

    color: #BFB8B8;
`
const Box = styled.div `
    width: 428px;
    margin: 50px auto 0px auto;
`
const Contents = styled.div `
    width:380px;
    height: 35px;
    background-color: white;

    border: 1px solid white;
    border-radius:20px;

    margin: 20px auto 0px auto;
    display: flex;
    
`
const Number = styled.div `
    margin: 0px 0px 0px 30px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 35px;

    text-align: center;

    color: #696969;
`
const Date = styled.div `
    margin: 0px 0px 0px 60px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 35px;

    text-align: center;

    color: #696969;
`
const Report = styled.div `
    margin: 0px 0px 0px 60px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 35px;

    text-align: center;

    color: #696969;
`