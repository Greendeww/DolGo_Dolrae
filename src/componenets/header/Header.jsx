import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();

    return (
        <Div>
            <Logo>돌고돌래</Logo>
            <Bar>
                <Button01 onClick={() => navigate('/api/auth/place/random')}>Random</Button01>
                <Button02 onClick={() => navigate('/api/auth/place')}>Write</Button02>
                <Button03 onClick={() => navigate('/api/auth/mypage')}>MyPage</Button03>
                <Button04 onClick={() => navigate('/api/auth/member/login')}>Login</Button04>
            </Bar>
        </Div>
    );
};

export default Header;

const Div = styled.div `
    width: 428px;
    height: 200px;
    border: 1px solid grey;
    background-color: dodgerblue;
`
const Logo = styled.div `
    width: 200px;
    height: 50px;
    margin: 50px auto 0px auto;
    border: 1px solid #282c34;
    border-radius: 20px;
    background-color: #282c34;
    color: white;
    text-align: center;
    line-height: 50px;
    font-size: 25px;
`
const Bar = styled.div `
    width: 428px;
    height: 100px;
    display: flex;
`
const Button01 = styled.div `
    width: 80px;
    height: 30px;
    margin: 30px auto 0px auto;
    border: 1px solid white;
    border-radius: 15px;
    background-color: white;
    text-align: center;
    line-height: 30px;
    font-size: 12px;

    &:hover {
        border: 1px solid gold;
        background: gold;
        color: black;
      }
`
const Button02 = styled.div `
    width: 80px;
    height: 30px;
    margin: 30px auto 10px auto;
    border: 1px solid white;
    border-radius: 15px;
    background-color: white;
    text-align: center;
    line-height: 30px;
    font-size: 12px;

    &:hover {
        border: 1px solid gold;
        background: gold;
        color: black;
      }
`
const Button03 = styled.div `
    width: 80px;
    height: 30px;
    margin: 30px auto 10px auto;
    border: 1px solid white;
    border-radius: 15px;
    background-color: white;
    text-align: center;
    line-height: 30px;
    font-size: 12px;

    &:hover {
        border: 1px solid gold;
        background: gold;
        color: black;
      }
`
const Button04 = styled.div `
    width: 80px;
    height: 30px;
    margin: 30px auto 10px auto;
    border: 1px solid white;
    border-radius: 15px;
    background-color: white;
    text-align: center;
    line-height: 30px;
    font-size: 12px;

    &:hover {
        border: 1px solid gold;
        background: gold;
        color: black;
      }
`