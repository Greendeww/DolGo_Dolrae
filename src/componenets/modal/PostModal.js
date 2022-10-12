import React from "react";
import styled from "styled-components";
import { instance } from "../../shared/Api";

const PostModal = ({ modal, setModal, data }) => {
  console.log(data)
  return (
    <Background>
      <Content>
        <PageDel>
          <p>정말 삭제하시겠습니까?</p>
          <Button>
            <button
              style={{
                backgroundColor: "white",
                color: "#abd4e2",
                border: "3px solid #abd4e2",
                
              }}
              onClick={() => {
                setModal(false);
              }}
            >
              취소
            </button>
            <button onClick={async () => {
              const res = await instance.delete(`/api/auth/place/${data.place_id}`);
              console.log(res)
            }}>삭제</button>
          </Button>
        </PageDel>
      </Content>
    </Background>
  );
};

export default PostModal;

const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  z-index: 10;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: scroll;
  background: rgba(0, 0, 0, 0.6);
`;

const PageDel = styled.div`
  font-size: 17px;
  width: 296px;
  height: 141px;
  border: 3px solid #abd4e2;
  background-color: rgb(255, 255, 255);
  margin: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  border-radius: 20px;
`;
const Button = styled.div`
  height: 35px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: center;
  margin-top: 30px;
  gap: 20px;
`;
