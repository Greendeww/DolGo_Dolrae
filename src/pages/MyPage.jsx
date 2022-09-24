import React from "react";
import styled from "styled-components";
import Header from "../componenets/header/Header";
import Footer from "../componenets/footer/Footer";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

function MyPage() {

    const navigate = useNavigate();

    return (
    
    <Div>
        <Header></Header>
        <Body>
            <BucketList>

            </BucketList>
            <MyReview>

            </MyReview>
        </Body>
        <Footer></Footer>
    </Div>
    
    );

}

export default MyPage;

const Div = styled.div `
    width: 428px;
    height: 800px;
    margin: 0px auto 0px auto;  
`
const Body = styled.div `
    
`
const BucketList = styled.div `
    
`
const MyReview = styled.div `
    
`