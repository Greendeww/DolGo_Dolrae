import React from "react";
import styled from "styled-components";
import Header from "../../componenets/header/Header";
import Footer from "../../componenets/footer/Footer";
import LOGO from "../../assert/logo/Logo.png";
import { useState } from "react";



function Select_doList(num02) {

    const doList = [
        { name: "전체", value: 0 },
        { name: "서울", value: 1 },
        { name: "인천", value: 2 },
        { name: "대전", value: 3 },
        { name: "대구", value: 4 },
        { name: "광주", value: 5 },
        { name: "부산", value: 6 },
        { name: "울산", value: 7 },
        { name: "세종", value: 8 },
        { name: "경기", value: 31 },
        { name: "강원", value: 32 },
        { name: "충북", value: 33 },
        { name: "충남", value: 34 },
        { name: "경북", value: 35 },
        { name: "경남", value: 36 },
        { name: "전북", value: 37 },
        { name: "전남", value: 38 },
        { name: "제주", value: 39 },
    ];

    if (num02=== 9) {
        return Select_doName(doList[9].name)
    }
    else if (num02 === 10) {
        return Select_doName(doList[10].name)
    }
    else if (num02 === 11) {
        return Select_doName(doList[11].name)
    }
    else if (num02 === 12) {
        return Select_doName(doList[12].name)
    }
    else if (num02 === 13) {
        return Select_doName(doList[13].name)
    }
    else if (num02 === 14) {
        return Select_doName(doList[14].name)
    }
    else if (num02 === 15) {
        return Select_doName(doList[15].name)
    }
    else if (num02 === 16) {
        return Select_doName(doList[16].name)
    }
    else if (num02 === 17) {
        return Select_doName(doList[17].name)
    }
    else {
        return "없음";
    }
}



let DoName = "";


function Select_doName(name) {
    
    if (name === "경기") {
        return DoName = "경기";
    }
    else if (name === "강원") {
        return  DoName = "강원";
    }
    else if (name === "충북") {
        return DoName = "충북";
    }
    else if (name === "충남") {
        return DoName = "충남";
    }
    else if (name === "경북") {
        return DoName = "경북";
    }
    else if (name === "경남") {
        return DoName = "경남";
    }
    else if (name === "전북") {
        return DoName = "전북";
    }
    else if (name === "전남") {
        return DoName = "전남";
    }
    else if (name === "제주") {
        return DoName = "제주";
    }
    else {
        return DoName = "전체";
    }
}


function Select_siList(num01) {

    const List01 =[
        { do: "경기", name: "- - - 경기도 - - -", value: 0 },
        { do: "경기", name: "가평", value: 1 },
        { do: "경기", name: "고양", value: 2 },
        { do: "경기", name: "과천", value: 3 },
        { do: "경기", name: "광명", value: 4 },
        { do: "경기", name: "광주", value: 5 },
        { do: "경기", name: "구리", value: 6 },
        { do: "경기", name: "군포", value: 7 },
        { do: "경기", name: "김포", value: 8 },
        { do: "경기", name: "남양주", value: 9 },
        { do: "경기", name: "동두천", value: 10 },
        { do: "경기", name: "부천", value: 11 },
        { do: "경기", name: "성남", value: 12 },
        { do: "경기", name: "수원", value: 13 },
        { do: "경기", name: "시흥", value: 14 },
        { do: "경기", name: "안산", value: 15 },
        { do: "경기", name: "안성", value: 16 },
        { do: "경기", name: "안양", value: 17 },
        { do: "경기", name: "양주", value: 18 },
        { do: "경기", name: "양평", value: 19 },
        { do: "경기", name: "여주", value: 20 },
        { do: "경기", name: "연천", value: 21 },
        { do: "경기", name: "오산", value: 22 },
        { do: "경기", name: "용인", value: 23 },
        { do: "경기", name: "의왕", value: 24 },
        { do: "경기", name: "의정부", value: 25 },
        { do: "경기", name: "이천", value: 26 },
        { do: "경기", name: "파주", value: 27 },
        { do: "경기", name: "평택", value: 28 },
        { do: "경기", name: "포천", value: 29 },
        { do: "경기", name: "하남", value: 30 },
        { do: "경기", name: "화성", value: 31 },
        ]

        const List02 =[
        { do: "강원", name: "- - - 강원도 - - -", value: 0 },
        { do: "강원", name: "강릉", value: 1 },
        { do: "강원", name: "고성", value: 2 },
        { do: "강원", name: "동해", value: 3 },
        { do: "강원", name: "삼척", value: 4 },
        { do: "강원", name: "속초", value: 5 },
        { do: "강원", name: "양구", value: 6 },
        { do: "강원", name: "양양", value: 7 },
        { do: "강원", name: "영월", value: 8 },
        { do: "강원", name: "원주", value: 9 },
        { do: "강원", name: "인제", value: 10 },
        { do: "강원", name: "정선", value: 11 },
        { do: "강원", name: "철원", value: 12 },
        { do: "강원", name: "춘천", value: 13 },
        { do: "강원", name: "태백", value: 14 },
        { do: "강원", name: "평창", value: 15 },
        { do: "강원", name: "홍천", value: 16 },
        { do: "강원", name: "화천", value: 17 },
        { do: "강원", name: "횡성", value: 18 },
        ]

        const List03 =[
        { do: "충북", name: "- - - 충청북도 - - -", value: 0 },
        { do: "충북", name: "괴산", value: 1 },
        { do: "충북", name: "단양", value: 2 },
        { do: "충북", name: "보은", value: 3 },
        { do: "충북", name: "영동", value: 4 },
        { do: "충북", name: "옥천", value: 5 },
        { do: "충북", name: "음성", value: 6 },
        { do: "충북", name: "제천", value: 7 },
        { do: "충북", name: "증평", value: 8 },
        { do: "충북", name: "진천", value: 9 },
        { do: "충북", name: "청원", value: 10 },
        { do: "충북", name: "청주", value: 11 },
        { do: "충북", name: "충주", value: 12 },
        ]

        const List04 =[
        { do: "충남", name: "- - - 충청남도 - - -", value: 0 },
        { do: "충남", name: "계룡", value: 16 },
        { do: "충남", name: "공주", value: 1 },
        { do: "충남", name: "금산", value: 2 },
        { do: "충남", name: "논산", value: 3 },
        { do: "충남", name: "당진", value: 4 },
        { do: "충남", name: "보령", value: 5 },
        { do: "충남", name: "부여", value: 6 },
        { do: "충남", name: "서산", value: 7 },
        { do: "충남", name: "서천", value: 8 },
        { do: "충남", name: "아산", value: 9 },
        { do: "충남", name: "예산", value: 11 },
        { do: "충남", name: "천안", value: 12 },
        { do: "충남", name: "청양", value: 13 },
        { do: "충남", name: "태안", value: 14 },
        { do: "충남", name: "홍성", value: 15 },
        ]
        
        const List05 =[
        { do: "경북", name: "- - - 경상북도 - - -", value: 0 },
        { do: "경북", name: "경산", value: 1 },
        { do: "경북", name: "경주", value: 2 },
        { do: "경북", name: "고령", value: 3 },
        { do: "경북", name: "구미", value: 4 },
        { do: "경북", name: "군위", value: 5 },
        { do: "경북", name: "김천", value: 6 },
        { do: "경북", name: "문경", value: 7 },
        { do: "경북", name: "봉화", value: 8 },
        { do: "경북", name: "상주", value: 9 },
        { do: "경북", name: "성주", value: 10 },
        { do: "경북", name: "안동", value: 11 },
        { do: "경북", name: "영덕", value: 12 },
        { do: "경북", name: "영양", value: 13 },
        { do: "경북", name: "영주", value: 14 },
        { do: "경북", name: "영천", value: 15 },
        { do: "경북", name: "예천", value: 16 },
        { do: "경북", name: "울릉", value: 17 },
        { do: "경북", name: "울진", value: 18 },
        { do: "경북", name: "의성", value: 19 },
        { do: "경북", name: "청도", value: 20 },
        { do: "경북", name: "청송", value: 21 },
        { do: "경북", name: "칠곡", value: 22 },
        { do: "경북", name: "포항", value: 23 },
        ]
        
        const List06 =[
        { do: "경남", name: "- - - 경상남도 - - -", value: 0 },
        { do: "경남", name: "거제", value: 1 },
        { do: "경남", name: "거창", value: 2 },
        { do: "경남", name: "고성", value: 3 },
        { do: "경남", name: "김해", value: 4 },
        { do: "경남", name: "남해", value: 5 },
        { do: "경남", name: "마산", value: 6 },
        { do: "경남", name: "밀양", value: 7 },
        { do: "경남", name: "사천", value: 8 },
        { do: "경남", name: "산청", value: 9 },
        { do: "경남", name: "양산", value: 10 },
        { do: "경남", name: "의령", value: 11 },
        { do: "경남", name: "진주", value: 12 },
        { do: "경남", name: "진해", value: 13 },
        { do: "경남", name: "창녕", value: 14 },
        { do: "경남", name: "창원", value: 15 },
        { do: "경남", name: "통영", value: 16 },
        { do: "경남", name: "하동", value: 17 },
        { do: "경남", name: "함안", value: 18 },
        { do: "경남", name: "함양", value: 19 },
        { do: "경남", name: "합천", value: 20 },
        ]
        
        const List07 =[
        { do: "전북", name: "- - - 전라북도 - - -", value: 0 },
        { do: "전북", name: "고창", value: 1 },
        { do: "전북", name: "군산", value: 2 },
        { do: "전북", name: "김제", value: 3 },
        { do: "전북", name: "남원", value: 4 },
        { do: "전북", name: "모주", value: 5 },
        { do: "전북", name: "부안", value: 6 },
        { do: "전북", name: "순창", value: 7 },
        { do: "전북", name: "완주", value: 8 },
        { do: "전북", name: "익산", value: 9 },
        { do: "전북", name: "임실", value: 10 },
        { do: "전북", name: "장수", value: 11 },
        { do: "전북", name: "전주", value: 12 },
        { do: "전북", name: "정읍", value: 13 },
        { do: "전북", name: "진안", value: 14 },
        ]
        
        const List08 =[
        { do: "전남", name: "- - - 전라남도 - - -", value: 0 },
        { do: "전남", name: "강진", value: 1 },
        { do: "전남", name: "고흥", value: 2 },
        { do: "전남", name: "곡성", value: 3 },
        { do: "전남", name: "광양", value: 4 },
        { do: "전남", name: "구례", value: 5 },
        { do: "전남", name: "나주", value: 6 },
        { do: "전남", name: "담양", value: 7 },
        { do: "전남", name: "목포", value: 8 },
        { do: "전남", name: "무안", value: 9 },
        { do: "전남", name: "보성", value: 10 },
        { do: "전남", name: "순천", value: 11 },
        { do: "전남", name: "신안", value: 12 },
        { do: "전남", name: "여수", value: 13 },
        { do: "전남", name: "영광", value: 14 },
        { do: "전남", name: "영암", value: 15 },
        { do: "전남", name: "완도", value: 16 },
        { do: "전남", name: "장성", value: 17 },
        { do: "전남", name: "장흥", value: 18 },
        { do: "전남", name: "진도", value: 19 },
        { do: "전남", name: "함평", value: 20 },
        { do: "전남", name: "해남", value: 21 },
        { do: "전남", name: "화순", value: 22 },
        ]
        
        const List09 =[
        { do: "제주", name: "- - - 제주도 - - -", value: 0 },
        { do: "제주", name: "서귀포", value: 3 },
        { do: "제주", name: "제주", value: 4 },
    ];


        if (num01 === "경기") {
            return List01.map((list)=>(<option>{list.name}</option>))
        }
        else if (num01 === "강원") {
            return List02.map((list)=>(<option>{list.name}</option>))
        }
        else if (num01 === "충북") {
            return List03.map((list)=>(<option>{list.name}</option>))
        }
        else if (num01 === "충남") {
            return List04.map((list)=>(<option>{list.name}</option>))
        }
        else if (num01 === "경북") {
            return List05.map((list)=>(<option>{list.name}</option>))
        }
        else if (num01 === "경남") {
            return List06.map((list)=>(<option>{list.name}</option>))
        }
        else if (num01 === "전북") {
            return List07.map((list)=>(<option>{list.name}</option>))
        }
        else if (num01 === "전남") {
            return List08.map((list)=>(<option>{list.name}</option>))
        }
        else if (num01 === "제주") {
            return List09.map((list)=>(<option>{list.name}</option>))
        }
        else {
            return <option>전체</option>
        }
}



function RequestEdit () {

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



    // 지역별 name, value
    const doList = [
        { name: "전체", value: 0 },
        { name: "서울", value: 1 },
        { name: "인천", value: 2 },
        { name: "대전", value: 3 },
        { name: "대구", value: 4 },
        { name: "광주", value: 5 },
        { name: "부산", value: 6 },
        { name: "울산", value: 7 },
        { name: "세종", value: 8 },
        { name: "경기", value: 31 },
        { name: "강원", value: 32 },
        { name: "충북", value: 33 },
        { name: "충남", value: 34 },
        { name: "경북", value: 35 },
        { name: "경남", value: 36 },
        { name: "전북", value: 37 },
        { name: "전남", value: 38 },
        { name: "제주", value: 39 },
    ];

    // 세부 지역별 해당 do, name, value
    const siList = [
        { do: "전체", name: "전체", value: 0 },
        { do: "서울", name: "전체", value: 0 },
        { do: "인천", name: "전체", value: 0 },
        { do: "대전", name: "전체", value: 0 },
        { do: "대구", name: "전체", value: 0 },
        { do: "광주", name: "전체", value: 0 },
        { do: "부산", name: "전체", value: 0 },
        { do: "울산", name: "전체", value: 0 },
        { do: "세종", name: "전체", value: 0 },
    ]

    
    let num03 = ""
   

    return (
        <Div>
            <Header></Header>
            <Body>
                <UserName>
                    <TextTitle>이름</TextTitle>
                    <Text placeholder="이름을 입력해주세요."></Text>
                </UserName>
                <ReportType>
                    <TextTitle>테마</TextTitle>
                    <Select>
                        <option name="tourList">관광</option>
                        <option name="museumList">관람</option>
                        <option name="activityList">액티비티</option>
                        <option name="foodList">식도락</option>
                    </Select>
                </ReportType>
                <ReportContext>
                    <TextTitle>설명</TextTitle>
                    <Context placeholder="장소에 대한 설명을 입력해주세요."></Context>
                </ReportContext>
                <Address>
                    <TextTitle>주소</TextTitle>
                    <Box01>
                        <Text01 className="location-set" placeholder="도" onSelect={Select_doList(num03)}>
                            <option num03="0">{doList[0].name}</option>
                            <option num03="1">{doList[1].name}</option>
                            <option num03="2">{doList[2].name}</option>
                            <option num03="3">{doList[3].name}</option>
                            <option num03="4">{doList[4].name}</option>
                            <option num03="5">{doList[5].name}</option>
                            <option num03="6">{doList[6].name}</option>
                            <option num03="7">{doList[7].name}</option>
                            <option num03="8">{doList[8].name}</option>
                            <option num03="9">{doList[9].name}</option>
                            <option num03="10">{doList[10].name}</option>
                            <option num03="11">{doList[11].name}</option>
                            <option num03="12">{doList[12].name}</option>
                            <option num03="13">{doList[13].name}</option>
                            <option num03="14">{doList[14].name}</option>
                            <option num03="15">{doList[15].name}</option>
                            <option num03="16">{doList[16].name}</option>
                            <option num03="17">{doList[17].name}</option>
                        </Text01>
                        <Text01 className="location-set" placeholder="시/군" >
                            {Select_siList(DoName)}
                        </Text01>
                    </Box01>
                    
                    <TextTitle>상세주소</TextTitle>
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
                    <CancelButton>취소</CancelButton>
                    <PostButton>수정하기</PostButton>
                </Buttons>
            </Body>
            <Footer></Footer>
        </Div>
    )
}

export default RequestEdit;

const Div = styled.div `
    width: 428px;
    margin: 0px auto 0px auto;
`
const Body = styled.div `
    width: 430px;
    min-height: 1450px;
    background-color: rgba(121, 185, 211, 0.3);
`
const UserName = styled.div `
    width: 428px;
    margin: 70px auto 0px auto;
`
const ReportType = styled.div `
    width: 428px;
    margin: 0px auto 0px auto;
`
const Select = styled.select `
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

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

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
const CancelButton = styled.div `
    width: 150px;
    height: 40px;
    margin: 0px 0px 0px 40px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 40px;
    text-align: center;

    color: #ABD4E2;

    background: white;
    border: 5px solid #ABD4E2;
    border-radius: 30px;

    &:hover {
        cursor: pointer;
        border: 5px solid dodgerblue;
        border-radius: 30px;

        color: dodgerblue;
    }
`
const PostButton = styled.div `
    width: 150px;
    height: 40px;
    margin: 0px 0px 0px 30px;

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
const Text01 = styled.select `
    width: 160px;
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
const Address = styled.div `
    
`
