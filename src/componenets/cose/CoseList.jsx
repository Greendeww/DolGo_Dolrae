import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import CoseDelete from '../modal/CoseDelete';
import ModalPortal from '../modal/ModalPortal';

const CoseList = ({cose}) => {
  const [modalOn, setModalOn] = useState(false);
  const navigate = useNavigate();


  const deleteModal = () => {
    setModalOn(true);
  };

  const handleModal = () => {
    setModalOn(false);
  };

  return (
    <>
      <ListBox>
        <ListDiv onClick={() => navigate('/cose/detail/'+cose.id)}>
          <ListP >{cose.name}</ListP>
        </ListDiv>
        <DelP onClick={deleteModal}>삭제</DelP>
      </ListBox>
      <ModalPortal>
          {modalOn && <CoseDelete onClose={handleModal} cose={cose} />}
      </ModalPortal>
    </>
  )
}

export default CoseList

const ListBox = styled.div`
  width: 90%;
  height: 35px;
  background-color: #eef6fa;
  border-radius: 20px;
  margin: 25px auto;
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  align-items:center;
  height:3.5rem;
  padding-left: 10px;
  padding-right: 10px;
`
const ListDiv = styled.div`
  width:70%;
`
const ListP = styled.p`
  font-size:20px;
  cursor: pointer;
  &:hover{
    color:#ffaeae;
  }
`

const DelP = styled.p`
  font-size:20px;
  cursor: pointer;
  &:hover{
    color:#ffaeae;
  }
`