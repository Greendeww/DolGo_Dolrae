import React from "react";
import { useState } from "react";
import styled from "styled-components";
import ReviewModal from "./ReviewModal";

const MypgReview = ({ item }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      {modal === false ? (
        <>
          <Comment onClick={() => setModal(true)}>
            <PlaceTitle style={{ fontWeight: "bold" }}>
              {item.placeTitle}
            </PlaceTitle>
            <ContentTitle>{item.title}</ContentTitle>
          </Comment>
          {modal === true ? (
            <ReviewModal key={item.comment_id} item={item} />
          ) : null}
        </>
      ) : (
        <St>
          <Open onClick={() => setModal(false)}>
            <OpenTitle style={{ fontWeight: "bold" }}>
              {item.placeTitle}
            </OpenTitle>
          </Open>
          <Line />
          <OpenContent>{item.title}</OpenContent>
          {modal === true ? (
            <ReviewModal key={item.comment_id} item={item} />
          ) : null}
        </St>
      )}
    </>
  );
};

export default MypgReview;

const Comment = styled.div`
  width: 90%;
  height: 55px;
  margin: 20px auto;
  background: #eef6fa;
  border-radius: 15px;
  gap: 15px;
  cursor: pointer;
  display: flex;
`;

const PlaceTitle = styled.div`
  display: block;
  width: 50%;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
  padding-left: 10px;
  align-items: center;
  position: relative;
  left: 15px;
  top: 17px;
`;

const ContentTitle = styled.div`
  display: block;
  width: 40%;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
  align-items: center;
  position: relative;
  left: 15px;
  top: 17px;
`;

const Open = styled.div`
  width: 90%;
  min-height: 40px;
  margin: 20px auto;
  background: #eef6fa;
  border-radius: 15px;
  gap: 15px;
  cursor: pointer;
  /* display: flex; */

  & div {
    align-items: center;
  }
`;

const St = styled.div`
  background: #eef6fa;
  border-radius: 15px;
  max-width: 428px;
  margin: 0 auto;
  width: 90%;
`;

const OpenTitle = styled.div`
  display: block;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
  padding-top: 20px;
  padding-left: 8px;
`;

const OpenContent = styled.div`
  display: block;
  width: 400px;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
  padding-top: 20px;
  padding-left: 25px;
  font-weight: bold;
`;

const Line = styled.hr`
  border: 2px solid white;
  background-color: white;
  height: 3px;
`;
