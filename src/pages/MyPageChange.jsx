import React from "react"
import styled from "styled-components";
import Header from "../componenets/header/Header";
import Footer from "../componenets/footer/Footer";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { putApi } from "../shared/Api";

function MyPageChange () {

    const name = {
        nickname: "NoName",
    };

    const ChangeNickName = async () => {
        try {
            const response = await putApi("/api/member/updatenickname", );
            console.log(response.data);


        } catch (e) {
            console.log('something went wrong', e);
            
        }
    };


    useEffect( () => {
        ChangeNickName();
    }, []);



    
    return (
        <Div>
            <Header></Header>
            <Body>
                <NickNameChange>
                    <TextTitle>닉네임 변경</TextTitle>
                                <Box01>
                                    <NickNameInput placeholder="사물함 위에서 과자먹는 개발자"></NickNameInput><Sir>님</Sir>
                                </Box01>
                    <ChangeButton01>변경하기</ChangeButton01>
                </NickNameChange>
                <PasswordChange>
                    <TextTitle>비밀번호 변경</TextTitle>
                    <Box02>
                        <PasswordInput placeholder="새로운 비밀번호를 입력해주세요"></PasswordInput>
                        <PasswordCheckInput placeholder="비밀번호를 다시 입력해주세요."></PasswordCheckInput>
                    </Box02>
                    <ChangeButton02>변경하기</ChangeButton02>
                </PasswordChange>
                <LeaveMembership>
                    <TextTitle>회원탈퇴</TextTitle>
                    <Text>회원탈퇴를 동의합니다.</Text>
                    <Box03>
                        <LeaveMembershipInput placeholder="위 문구를 따라 작성해주세요."></LeaveMembershipInput>
                    </Box03>
                    <LeaveButton>탈퇴하기</LeaveButton>
                </LeaveMembership>
            </Body>
            <Footer></Footer>
        </Div>
    )
}

export default MyPageChange;

const Div = styled.div `
    width: 428px;
    margin: 0px auto 0px auto;
`
const Body = styled.div `
    width: 430px;
    height: 750px;
    background-color: rgba(121, 185, 211, 0.3);
`
const NickNameChange = styled.div `
    width: 428px;
    margin: 0px auto 0px auto;
`
const PasswordChange = styled.div `
    width: 428px;
    margin: 0px auto 0px auto;
`
const LeaveMembership = styled.div `
    width: 428px;
    margin: 0px auto 0px auto;
`
const TextTitle = styled.div `
    width: 200px;
    height: 40px;
    padding: 20px 0px 0px 20px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 40px;

    color: #000000;

`
const Box01 = styled.div `
    width: 428px;
    height: 40px;
    line-height: 40px;
    display: flex;

    margin: 30px auto 0px 35px;
`
const ChangeButton01 = styled.div `
    width: 150px;
    height: 40px;
    line-height: 40px;
    text-align: center;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 40px;

    color: white;

    background: #FFC0C0;
    border-radius: 15px;

    margin: 30px auto 0px auto;

    &:hover {
        cursor: pointer;
        color: black;
        background-color: gold;
      }
`
const Box02 = styled.div `
    width: 428px;
`
const ChangeButton02 = styled.div `
    width: 150px;
    height: 40px;
    line-height: 40px;
    text-align: center;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 40px;

    color: white;

    background: #FFC0C0;
    border-radius: 15px;

    margin: 30px auto 0px auto;

    &:hover {
        cursor: pointer;
        color: black;
        background-color: gold;
      }
`
const Text = styled.div `
    margin: 20px auto 0px 40px;
`
const Box03 = styled.div `
    width: 428px;
`
const LeaveButton = styled.div `
    width: 150px;
    height: 40px;
    line-height: 40px;
    text-align: center;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 40px;

    color: white;

    background: #FFC0C0;
    border-radius: 15px;

    margin: 30px auto 0px auto;

    &:hover {
        cursor: pointer;
        color: black;
        background-color: gold;
      }
`
const NickNameInput = styled.input `
    width: 300px;
    height: 35px;

    line-height: 40px;
    text-align: center;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 40px;

    color: grey;

    border: 1px solid white;
    border-radius: 30px;
`
const PasswordInput = styled.input `
    width: 350px;
    height: 35px;

    line-height: 40px;
    text-align: center;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 40px;

    color: grey;

    border: 1px solid white;
    border-radius: 30px;

    margin: 30px auto 0px 35px;
`
const PasswordCheckInput = styled.input `
    width: 350px;
    height: 35px;

    line-height: 40px;
    text-align: center;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 40px;

    color: grey;

    border: 1px solid white;
    border-radius: 30px;

    margin: 30px auto 0px 35px;
`
const LeaveMembershipInput = styled.input `
    width: 350px;
    height: 35px;

    line-height: 40px;
    text-align: center;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 40px;

    color: grey;

    border: 1px solid white;
    border-radius: 30px;

    margin: 30px auto 0px 35px; 
`
const Sir = styled.div `
    width: 20px;
    height: 40px;

    margin: 0px 0px 0px 20px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 900;
    font-size: 23px;
    line-height: 40px;

    color: #000000;

`