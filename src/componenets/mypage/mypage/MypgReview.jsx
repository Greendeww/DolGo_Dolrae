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
  width: 410px;
  height: 50px;
  margin: 20px auto;
  background: #eef6fa;
  border-radius: 15px;
  gap: 15px;
  cursor: pointer;
  display: flex;

  & div {
    align-items: center;
    position: relative;
    left: 15px;
    top: 17px;
    font-size: 20px;
    width:45%;
    p{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width:100%;
  }
  }

  &:hover {
    cursor: pointer;

  }

`;

const PlaceTitle = styled.div`
  display: block;
  width: 200px;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
  padding-left: 20px;
`;

const ContentTitle = styled.div`
  display: block;
  width: 150px;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
`;

const Open = styled.div`
  width: 400px;
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
  width: 410px;
  margin: 0 auto;
`;

const OpenTitle = styled.div`
  display: block;
  width: 400px;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
  padding-top: 20px;
  padding-left: 15px;
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