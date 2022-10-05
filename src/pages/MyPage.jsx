import React from "react";
import styled from "styled-components";
import Header from "../componenets/header/Header";
import Footer from "../componenets/footer/Footer";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getApi } from "../shared/Api";


function MyPage() {

    const navigate = useNavigate();



    const [ Bucket, setBucket ] = useState([]);
    const [ Review, setReview ] = useState([]);
    



    const BucketListPost = async () => {
        const response = await getApi("/api/auth/mypage")
        console.log(response.data.placeList)

        setBucket(response.data.placeList);
    }

    const ReviewListPost = async () => {
        const response = await getApi("/api/auth/mypage")
        console.log(response.data.commentList)

        setReview(response.data.commentList);
    }



    useEffect( () => {
        BucketListPost();
        ReviewListPost();
    }, []);



    return (
    
    <Div>
        <Header></Header>
        <Body>
            <MyStatus>               
                <Myemail>
                    <B1>
                        <TextName>이메일</TextName><MyStatusChange onClick={() => navigate('/mypage/change')}>내 정보 변경</MyStatusChange>
                    </B1>
                    <Email>abc@gmail.com</Email>
                </Myemail>
                <MyNickName>
                    <TextName>닉네임</TextName>
                    <B2>
                        <NickName>사물함 위에서 과자먹는 개발자</NickName><Sir>님</Sir>
                    </B2>
                </MyNickName>
            </MyStatus>
            <BucketList>
                <TextBox>
                    <Text>찜 목록</Text>
                </TextBox>
                <Box>
                    {Bucket.map((item,index) => {
                        return(
                            <div key={index}>
                                <Card onClick={() => navigate('/api/place?theme=12')}>
                                    <IMG>
                                        <Picture src={item.image}></Picture>
                                    </IMG>
                                    <ContentBox>
                                        <Title>{item.title}</Title>
                                        <Star>♥</Star>
                                    </ContentBox>
                                </Card>
                            </div>
                        )
                    })}
                                <Card onClick={() => navigate('/api/place?theme=12')}>
                                    <IMG>
                                        <Picture src="https://www.urbanbrush.net/web/wp-content/uploads/edd/2021/06/urbanbrush-20210611102855770634.jpg"></Picture>
                                    </IMG>
                                    <ContentBox>
                                        <Title>만두</Title>
                                        <Star>♥</Star>
                                    </ContentBox>
                                </Card>
                </Box>
            </BucketList>
            <MyReview>
                <TextBox>
                    <Text>내가 쓴 후기</Text>
                </TextBox>
                <Box>
                    {Review.map((item,index) => {
                        return(
                            <div key={index}>
                                <Comment>
                                    <CommentTitle>{item.title}</CommentTitle>
                                    <CommentText>{item.content}</CommentText>
                                </Comment>
                            </div>
                        )
                    })}
                                <Comment>
                                    <CommentTitle>초곡 용굴촛대바위길</CommentTitle>
                                    <CommentText>저도 산책겸 다녀와서 정말 좋아요</CommentText>
                                </Comment>
                </Box>
            </MyReview>
        </Body>
        <Footer></Footer>
    </Div>
    
    );

}

export default MyPage;

const Div = styled.div `
    width: 428px;
    margin: 0px auto 0px auto;  
`
const Body = styled.div `

`
const Sir = styled.div `
    margin: 0px 0px 0px 0px
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
`
const MyStatus = styled.div `
    width: 430px;
    height: 250px;
    background-color: rgba(121, 185, 211, 0.3);
`
const Myemail = styled.div `
    width: 380px;
    height: 100px;
    margin: 0px auto 0px auto;
`
const MyNickName = styled.div `
    width: 380px;
    height: 100px;
    margin: 25px auto 0px auto;
`
const B1 = styled.div `
    width: 380px;
    height: 50px;
    display: flex;

    padding: 30px 0px 0px 0px;
`
const B2 = styled.div `
    width: 380px;
    height: 50px;
    display: flex;

    padding: 10px 0px 0px 0px;
`
const MyStatusChange = styled.button `
    width: 150px;
    height: 40px;
    background-color: #79B9D3;
    color: white;
    border: 1px solid #79B9D3;
    border-radius: 15px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;

    &:hover {
        cursor: pointer;
        color: black;
        background-color: gold;
        border: 1px solid gold;
      }
`
const TextName = styled.div `
    width: 380px;
    height: 50px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 50px;
`
const Email = styled.div `
    width: 380px;
    height: 50px;
`
const NickName = styled.div `
    width: 380px;
    height: 100px;
`
const BucketList = styled.div `
    width: 428px;
    min-height: 480px;
    border: 1px solid rgba(121, 185, 211, 0.3);
    
`
const MyReview = styled.div `
    width: 428px;
    min-height: 230px;
    border: 1px solid rgba(121, 185, 211, 0.3);
    
`
const TextBox = styled.div `
    width: 428px;
    height: 60px;
`
const Text = styled.div `
    margin: 30px 0px 0px 30px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 40px;


    color: #BFB8B8
`
const Box = styled.div `
    width: 425px;
    min-height: 100px;
    background-color: white;
    margin: auto auto auto auto;
    pading: 0px auto 0px auto;
    border: 1px solid white;
    
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
`
const Card = styled.div `
    width: 430px;
    height: 50px;
    margin: 0px 0px 0px 0px;
`
const IMG = styled.div `
    width: 428px;
    height: 300px;
`
const Picture = styled.img `
    width: 100%;
    height: 100%;
    border: 1px solid white;

    margin: 0px 0px 0px 0px;
`
const ContentBox = styled.div `
    width: 430px;
    height: 0px;
    display: flex;
`
const Title = styled.div `
    width: 215px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    margin: 25px auto 0px 0px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 900;
    font-size: 23px;
`
const Star = styled.div `
    width: 30px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    margin: 20px 40px 0px 0px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;

    color: #FF8585;
`
const Comment = styled.div `
    width: 390px;
    height: 35px;
    margin: auto auto auto auto;
    background-color: rgba(121, 185, 211, 0.5);
    border: 1px solid rgba(121, 185, 211, 0);
    border-radius: 30px;
    line-height: 35px;
    display: flex;
`
const CommentTitle = styled.div `
    width: 200px;
    height: 35px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 35px;
    text-align: center;
    color: #000000;
`
const CommentText = styled.div `
    width: 190px;
    height: 35px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 35px;

    text-align: center;
    color: #000000;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`