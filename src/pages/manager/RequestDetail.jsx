import React from "react";
import styled from "styled-components";
import Header from "../../componenets/header/Header";
import Footer from "../../componenets/footer/Footer";
import LOGO from "../../assert/logo/Logo.png"
import { useState } from "react";


function RequestDetail () {

    //파일 미리볼 url을 저장해줄 state
    const [fileImage, setFileImage] = useState("");

    // 파일 저장
    const saveFileImage = (e) => {
        setFileImage(URL.createObjectURL(e.target.files[0]));
    };

    // 파일 삭제
    const deleteFileImage = () => {
        URL.revokeObjectURL(fileImage);
        setFileImage("");
    };



    return (
        <Div>
            <Header></Header>
            <Body>
                <UserName>
                    <TextTitle>이름</TextTitle>
                    <Text placeholder="이름을 입력해주세요."></Text>
                </UserName>
                <Date>
                    <TextTitle>요청 날짜</TextTitle>
                    <Text placeholder="날짜를 입력해주세요."></Text>
                </Date>
                <ReportType>
                    <TextTitle>유형</TextTitle>
                    <Box01>
                        <CheckBox type="checkbox"></CheckBox>
                        <Edit>수정</Edit>
                        <CheckBox type="checkbox"></CheckBox>
                        <Edit>삭제</Edit>
                        <CheckBox type="checkbox"></CheckBox>
                        <Edit>추가</Edit>
                    </Box01>
                </ReportType>
                <ReportContext>
                    <TextTitle>설명</TextTitle>
                    <Context placeholder="상세설명을 해주세요."></Context>
                </ReportContext>
                <Address>
                    <TextTitle>주소</TextTitle>
                    <Text placeholder="주소를 입력해주세요."></Text>
                </Address>
                <PostPicture>
                    <Box02>
                        <TextTitle>사진</TextTitle>
                        <Upload name="imgUpload" type="file" accept="image/*" onClick={saveFileImage}></Upload>
                        <Button01 onClick={() => deleteFileImage()}>삭제</Button01>
                    </Box02>
                        {fileImage === null
                        ? <Picture alt="sample" src={LOGO} style={{}}></Picture>
                        : <Picture alt="sample" src={fileImage} style={{}}></Picture>
                        }
                </PostPicture>
                <Blank></Blank>
                <Buttons>
                    <PostButton>수정</PostButton>
                    <PostButton>등록</PostButton>
                    <PostButton>삭제</PostButton>
                </Buttons>
            </Body>
            <Footer></Footer>
        </Div>
    )
}

export default RequestDetail;

const Div = styled.div `
    width: 428px;
    margin: 0px auto 0px auto;
`
const Body = styled.div `
    width: 430px;
    height: 1450px;
    background-color: rgba(121, 185, 211, 0.3);
`
const UserName = styled.div `
    width: 428px;
    margin: 0px auto 0px auto;
`
const Date = styled.div `
    width: 428px;
    margin: 0px auto 0px auto;
`
const ReportType = styled.div `
    width: 428px;
    margin: 0px auto 0px auto;
`
const ReportContext = styled.div `
    width: 428px;
    margin: 0px auto 0px auto;
`
const Picture = styled.img `
    width: 428px;
    height: 300px;
    margin: 30px auto 0px auto;

    background-color: white;
    border: 1px solid white;
    border-radius: 20px;
`
const Buttons = styled.div `
    width: 428px;
    margin: 0px auto 0px auto;
    display: flex;
`
const TextTitle = styled.div `
    width: 200px;
    height: 40px;

    padding: 40px 0px 0px 35px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 40px;

    color: #222222;
`
const Text = styled.input `
    width: 350px;
    height: 35px;

    margin: 20px 0px 0px 35px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 35px;

    text-align: center;

    background: #FFFFFF;
    color: grey;
    border: 1px solid white;
    border-radius: 30px;
`
const Box01 = styled.div `
    width: 428px;
    margin: 0px auto 0px auto;
    display: flex;
`
const CheckBox = styled.input `
    width: 30px;
    height: 30px;

    margin: 20px 0px 0px 40px;
`
const Edit = styled.div `
    width: 50px;
    height: 30px;

    margin: 20px 0px 0px 20px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;

    color: #000000;
`
const Context = styled.textarea `
    width: 350px;
    height: 200px;

    margin: 20px 0px 0px 22px;
    padding: 15px 15px 15px 15px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;

    background: #FFFFFF;
    border: 1px solid white;
    border-radius: 15px;

    resize: none;
`
const PostPicture = styled.div `
    width: 428px;
    height: 70px;
    margin: 0px auto 0px auto;
`
const Box02 = styled.div `
    width: 428px;
    margin: 0px auto 0px auto;
    display: flex;
`
const Button01 = styled.button `
    width: 70px;
    height: 25px;

    margin: 45px 0px 0px 0px;

    &:hover {
        cursor: pointer;
        
      }
`
const Upload = styled.input `
    margin: 45px 0px 0px 0px;

    &:hover {
        cursor: pointer;
        
    }
`
const Blank = styled.div `
    width: 428px;
    height: 400px;
`
const PostButton = styled.div `
    width: 100px;
    height: 40px;
    margin: 0px 0px 0px 25px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 40px;
    text-align: center;

    color: white;

    background: #ABD4E2;
    border: 5px solid #ABD4E2;
    border-radius: 30px;

    &:hover {
        cursor: pointer;

        border: 5px solid dodgerblue;
        border-radius: 30px;

        color: dodgerblue;
    }
`
const Address = styled.div `

`