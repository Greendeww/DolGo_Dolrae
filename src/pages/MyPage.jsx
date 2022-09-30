import React from "react";
import styled from "styled-components";
import Header01 from "../componenets/header/Header";
import Footer from "../componenets/footer/Footer";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getApi } from "../shared/Api";
import { FaStar } from 'react-icons/fa';

function MyPage() {

    const navigate = useNavigate();



    const [ Bucket, setBucket ] = useState([]);

    

    const BucketListPost = async () => {
        const response = await getApi("/mypage")
        console.log(response.data.placeList)

        setBucket(response.data.placeList);
    }



    useEffect( () => {
        BucketListPost();
    }, []);



    return (
    
    <Div>
        <Header01></Header01>
        <Body>
            <MyStatus>
                <Myemail>

                </Myemail>
                <MyNickName>

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
                                                <Picture src={item.imageUrl}></Picture>
                                            </IMG>
                                            <ContentBox>
                                                <Title>{item.title}</Title>
                                                <Star>{item.star} 점 『<FaStar style={{color:"#fcc419"}}/>』</Star>
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
                                                <Star>4.5 점 『<FaStar style={{color:"#fcc419"}}/>』</Star>
                                            </ContentBox>
                                        </Card>
                </Box>
            </BucketList>
            <MyReview>
                <TextBox>
                    <Text>리뷰 목록</Text>
                </TextBox>
                <Box>

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
const MyStatus = styled.div `
    width: 428px;
    height: 250px;
`
const Myemail = styled.div `
    width: 380px;
    height: 100px;
    margin: 25px auto 0px auto;
    background-color: green;
`
const MyNickName = styled.div `
    width: 380px;
    height: 100px;
    margin: 25px auto 0px auto;
    background-color: green;
`
const BucketList = styled.div `
    width: 428px;
    min-height: 600px;
    border: 1px solid grey;
    background-color: black;
`
const MyReview = styled.div `
    width: 428px;
    min-height: 600px;
    border: 1px solid grey;
    background-color: black;
`
const TextBox = styled.div `
    width: 428px;
    height: 60px;
`
const Text = styled.div `
    width: 80px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 13px;
    margin: 20px auto auto 10px;
    border: 1px solid white;
    border-radius: 20px;
    background-color: white;
`
const Box = styled.div `
    width: 400px;
    min-height: 500px;
    background-color: dodgerblue;
    margin: auto auto auto auto;
    pading: 10px auto 10px auto;
    border: 1px solid dodgerblue;
    border-radius: 15px;
    
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
`
const Card = styled.div `
    width: 180px;
    height: 210px;
    margin: 10px 9px 10px 9px;
    background-color: white;
    border: 1px solid white;
    border-radius: 10px;
`
const IMG = styled.div `
    width: 160px;
    height: 150px;
`
const Picture = styled.img `
    width: 100%;
    height: 100%;
    border: 1px solid white;
    border-radius: 10px;
    margin: 5px 8px 0px 8px;
`
const ContentBox = styled.div `
    width: 180px;
    height: 60px;
`
const Title = styled.div `
    width: 180px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    font-size: 12px;
    margin: 8px auto 0px auto;
`
const Star = styled.div `
    width: 180px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    font-size: 12px;
    margin: 0px auto 0px auto;
`
