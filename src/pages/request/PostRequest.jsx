import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../componenets/header/Header";
import { instance } from "../../shared/Api";
import { getCookie, setCookie } from "../../shared/Cookie";
import axios from "axios";
import DragNDrop from "../../componenets/drag&drop/DragNDrop";

const PostRequest = () => {
  const navigate = useNavigate();

  const initialState = {
    title: "",
    content: "",
    address: "",
    type: "추가"
  };

  const [req, setReq] = useState(initialState);
  const [image, setImage] = useState([]);
  const [fileImage, setFileImage] = useState([]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setReq({ ...req, [name]: value });
  };

  const onChangeImg = (e) => {
    const imageList = e.target.files;
    // const maxImageCnt = 3;
    const imageLists = [...image];
    // if(image.length > maxImageCnt){
    //   alert("첨부파일은 최대 3개까지 가능합니다")
    // }

    console.log(imageList);
    const imgFiles = [...fileImage];
    for (let i = 0; i < imageList.length; i++) {
      const nowImageUrl = URL.createObjectURL(e.target.files[i]);
      imgFiles.push(nowImageUrl);
    }
    for (let i = 0; i < imageList.length; i++) {
      const nowImageUrl1 = e.target.files[i];
      imageLists.push(nowImageUrl1);
      continue;
    }
    // if (imageLists.length > 3) {
    //   imageLists = imageLists.slice(0, 3);
    // }
    setFileImage(imgFiles);
    setImage(imageLists);
  };

  //이미지 삭제
  const handleDeleteImage = (id) => {
    setFileImage(fileImage.filter((_, index) => index !== id));
    setImage(image.filter((_, index) => index !== id));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(req)
    if (req.title === "" || req.content === "" || req.address === "") {
      alert("필수 항목을 모두 작성해주세요.");
      return;
    } else {
      const json = JSON.stringify(req);
      const blob = new Blob([json], { type: "application/json" });
      const formData = new FormData();

      for (let i = 0; i < image.length; i++) {
        formData.append("image", image[i]);
      }
      formData.append("data", blob);

      const res = await instance.post(`/api/auth/order`, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      alert("게시글 등록 요청 완료되었습니다.");
      navigate("/");
    }
  };

  const refresh_token = getCookie("REFRESH_TOKEN");

  // const getToken = sessionStorage.getItem("ACCESS_TOKEN");
  // const getToken = getCookie("ACCESS_TOKEN")
  // console.log(getToken)
  // const navigate =useNavigate()

  // useEffect(() => {
  //   if(getToken === undefined){
  //     alert("로그인이 필요한 서비스입니다.")
  //     navigate('/login')
  //   }
  // },[getToken])

  // const getToken = sessionStorage.getItem("ACCESS_TOKEN");
  // const getToken = getCookie("ACCESS_TOKEN")
  // console.log(getToken)
  // const navigate =useNavigate()

  // useEffect(() => {
  //   if(getToken === undefined){
  //     alert("로그인이 필요한 서비스입니다.")
  //     navigate('/login')
  //   }
  // },[getToken])

  // 토큰 재발급
  const getToken = async () => {
    try {
      console.log("토큰 만료");
      alert("토큰 만료");
      const res = await axios.post(
        process.env.REACT_APP_BASE_URL + "/api/member/retoken",
        {},
        {
          headers: {
            RefreshToken: refresh_token,
          },
        }
      );
      setCookie("ACCESS_TOKEN", res.headers.authorization);
      setCookie("REFRESH_TOKEN", res.headers.refreshtoken);
      console.log("토큰이 갱신되었습니다.");
    } catch {
      alert("토큰 갱신에 실패하였습니다.");
    }
  };

  useEffect(() => {
    if (
      getCookie("ACCESS_TOKEN") === undefined &&
      getCookie("REFRESH_TOKEN") !== undefined
    ) {
      getToken();
    }
  }, []);

  return (
    <StRegistration>
      <Header />
      <Container>
        <div>
          <Title>
            장소 이름 <span style={{ color: "rgb(255, 80, 88)" }}>*</span>
          </Title>
          <Text
            type="text"
            name="title"
            value={req.title}
            onChange={onChangeHandler}
            placeholder="추가하고 싶은 장소 이름을 입력해주세요."
          />
        </div>
        <div>
          <Title>유형</Title>
          <div
            style={{ display: "flex", marginLeft: "35px", marginTop: "15px" }}
          >
            <CheckBox type="checkbox" checked readOnly />
            <p style={{ marginLeft: "15px", marginTop: "10px" }}>추가</p>
          </div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <Title>
            설명 <span style={{ color: "rgb(255, 80, 88)" }}>*</span>
          </Title>
          <Context
            type="text"
            name="content"
            value={req.content}
            onChange={onChangeHandler}
            placeholder="장소에 대한 설명을 입력해주세요."
          />
        </div>
        <div>
          <Title>
            주소 <span style={{ color: "rgb(255, 80, 88)" }}>*</span>
          </Title>
          <Text
            type="text"
            name="address"
            value={req.address}
            onChange={onChangeHandler}
            placeholder="주소를 입력해주세요."
          />
        </div>
        <div>
          <Title>이미지</Title>
          <div style={{ width: "100%" }}>
            <ImgBox>
              <ImgLabel>

                <DIV01>
                  <img
                  alt=""
                  style={{ height: "1.5rem" }}
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxwYXRoIGZpbGw9IiNEQ0RCRTQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTI4LjQ3MSAzMkgzLjUzYy0uOTcxIDAtMS44OTQtLjQyMi0yLjUyOS0xLjE1N2wtLjAyNi0uMDNBNCA0IDAgMCAxIDAgMjguMTk4VjguNjA3QTQgNCAwIDAgMSAuOTc0IDUuOTlMMSA1Ljk2YTMuMzQzIDMuMzQzIDAgMCAxIDIuNTI5LTEuMTU2aDIuNTM0YTIgMiAwIDAgMCAxLjUzNy0uNzJMMTAuNC43MkEyIDIgMCAwIDEgMTEuOTM3IDBoOC4xMjZBMiAyIDAgMCAxIDIxLjYuNzJsMi44IDMuMzYzYTIgMiAwIDAgMCAxLjUzNy43MmgyLjUzNGMuOTcxIDAgMS44OTQuNDIzIDIuNTI5IDEuMTU3bC4wMjYuMDNBNCA0IDAgMCAxIDMyIDguNjA2djE5LjU5MWE0IDQgMCAwIDEtLjk3NCAyLjYxN2wtLjAyNi4wM0EzLjM0MyAzLjM0MyAwIDAgMSAyOC40NzEgMzJ6TTE2IDkuNmE4IDggMCAxIDEgMCAxNiA4IDggMCAwIDEgMC0xNnptMCAxMi44YzIuNjQ3IDAgNC44LTIuMTUzIDQuOC00LjhzLTIuMTUzLTQuOC00LjgtNC44YTQuODA1IDQuODA1IDAgMCAwLTQuOCA0LjhjMCAyLjY0NyAyLjE1MyA0LjggNC44IDQuOHoiLz4KPC9zdmc+Cg=="
                  />
                  <p style={{ marginTop: "15px", fontSize: "0.9rem" }}>
                    이미지 등록
                  </p>
                </DIV01>

                
                <DIV02>
                  <DragNDrop/>
                </DIV02>
              
              
                <ImgInput
                  type="file"
                  name="imgUrl"
                  accept="image/*"
                  multiple
                  onChange={onChangeImg}
                  id="image"
                />
              </ImgLabel>
              {fileImage.map((image, id) => (
                <div key={id}>
                  <Img alt={`${image}-${id}`} src={image} />
                  <DeleteImg onClick={() => handleDeleteImage(id)}>X</DeleteImg>
                </div>
              ))}
            </ImgBox>
          </div>
        </div>
        <Buttons>
          <PostBtn onClick={onSubmitHandler}>작성하기</PostBtn>
          <CancelBtn onClick={() => navigate(-1)}>취소</CancelBtn>
        </Buttons>
      </Container>
    </StRegistration>
  );
};

export default PostRequest;


const DIV01 = styled.div`
  text-align: center;
  position: absolute;
  z-index: 3;
`
const DIV02 = styled.div`
  position: absolute;
  z-index: 2;
`
const StRegistration = styled.div`
  max-width: 428px;
  width: 100%;
  margin: 0 auto;
  background-color: #eef6fa;
`;

const Container = styled.div`
  padding-top: 120px;
`;

const Buttons = styled.div`
  display: flex;
  padding-top: 40px;
  padding-bottom: 50px;
  gap: 20px;
  margin: 150px auto;
  width: 90%;
`;

const Title = styled.p`
  width: 100px;
  height: 40px;
  padding: 40px 0px 0px 35px;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 40px;
`;

const Text = styled.input`
  display: flex;
  margin: 10px auto;
  width: 90%;
  height: 52px;
  background-color: white;
  border-radius: 15px;
  border: none;
  padding-left: 10px;
  font-size: 14px;
  font-family: tway;
  font-weight: lighter;
`;

const CheckBox = styled.input`
  width: 30px;
  height: 30px;
`;

const Context = styled.textarea`
  width: 85%;
  height: 200px;
  display: flex;
  margin: 0 auto;
  padding: 15px;
  border: none;
  border-radius: 15px;
  resize: none;
  font-size: 14px;
  font-family: tway;
  font-weight: lighter;
`;

const CancelBtn = styled.div`
  width: 150px;
  height: 40px;
  margin: 0px 0px 0px 40px;
  font-weight: 700;
  font-size: 15px;
  line-height: 40px;
  text-align: center;

  color: #abd4e2;

  background: white;
  border: 3px solid #abd4e2;
  border-radius: 15px;

  &:hover {
    cursor: pointer;
  }
`;

const PostBtn = styled.div`
  width: 150px;
  height: 40px;
  margin: 0px 0px 0px 30px;
  font-weight: 700;
  font-size: 15px;
  line-height: 40px;
  text-align: center;
  color: white;
  background: #abd4e2;
  border-radius: 15px;

  &:hover {
    cursor: pointer;
  }
`;

const ImgBox = styled.div`
  display: flex;
  margin: 20px 30px;
  flex-wrap: wrap;
  gap: 30px;
`;

const ImgInput = styled.input`
  display: none;
`;

const ImgLabel = styled.label`
  width: 300px;
  height: 200px;
  margin: 10px auto 30px auto;
  position: relative;
  background: #eef6fa;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
  color: rgb(155, 153, 169);
  font-size: 1rem;
  border-radius: 15px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  font-synthesis: none;
  ::-webkit-font-smoothing {
    -webkit-appearance: none;
    -webkit-font-smoothing: antialiased;
  }
`;
const DeleteImg = styled.button`
  margin: -10.3px;
  position: relative;
  color: red;
  right: 11.5px;
  bottom: 88px;
  background-color: white;
  border: none;
`;
