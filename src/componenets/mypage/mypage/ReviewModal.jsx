import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Star from "../../star/Star";
import ModalPortal from "../../modal/ModalPortal";
import Modal from "../../modal/Modal";

const ReviewModal = ({ item }) => {
  const [modalOn, setModalOn] = useState(false);
  const nickname = localStorage.getItem("nickname");
  console.log(modalOn);
  const navigate = useNavigate();

  const handleModal = () => {
    setModalOn(false);
  };

  const deleteModal = () => {
    setModalOn(true);
  };

  const dispatch = useDispatch();
  return (
    <ComDiv key={item.comment_id}>
      <div>
        <div>
          <div style={{ display: "flex", alignItems: "center" }}></div>
          <div style={{ textAlign: "center" }}>
            {item.imageList.map((image, index) => {
              return <DetailImg key={index} alt="" src={image} />;
            })}
          </div>
          <div style={{ paddingTop: "20px" }} >
          <StarDiv>
            <Star key={item.comment_id} comment={item} />
            <Button onClick={() => navigate(`/detail/${item.place_id}`)}>
              상세페이지로
            </Button>
          </StarDiv>
          <p style={{ paddingLeft: "10px", width: "360px", wordWrap: "break-word", lineHeight: "28px"}}>{item.content}</p>
          <ButtonDiv>
            <ReviseBut
              onClick={() =>
                navigate(
                  "/detail/update/" + item.place_id + "/" + item.comment_id
                )
              }
            >
              수정하기
            </ReviseBut>
            <DelBut onClick={() => setModalOn(true)}>삭제하기</DelBut>
          </ButtonDiv>
          </div>
          <ModalPortal>
            {modalOn && <Modal onClose={handleModal} comment={item} />}
          </ModalPortal>
        </div>
      </div>
    </ComDiv>
  );
};

export default ReviewModal;
const ComDiv = styled.div`
  padding-bottom: 2rem;
  margin: 0rem 1rem 0rem 1rem;
`;
const StarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-left: 8px;
`;

const ReviseBut = styled.button`
  cursor: pointer;
  font-weight: 600;
  color: #79b9d3;
  background-color: white;
  border: 3px solid #abd4e2;
  height: 2.5rem;
  margin-right: 0.5rem;
  border-radius: 5px;
  line-height: 2.1rem;
  /* margin-left:1rem; */
  width: 100%;
`;
const DelBut = styled.button`
  cursor: pointer;
  color: white;
  background-color: #abd4e2;
  border: 0px;
  height: 2.5rem;
  border-radius: 5px;
  line-height: 2.5rem;
  /* margin-right:1rem; */
  width: 100%;
  font-weight: bold;
`;
const DetailImg = styled.img`
  width: 300px;
  border-radius: 20px;
  margin-top: 1rem;
  /* border: 1px solid rgb(195, 194, 204); */
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const Button = styled.button`
  margin-top: 8px;
  border: 3px solid #ffc0c0;
  background-color: #ffc0c0;
  color: white;
  border-radius: 5px;
  font-weight: 700;
  position: relative;
  margin-right: 10px;
  cursor: pointer;
`;
