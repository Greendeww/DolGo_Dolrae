import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { instance } from '../../shared/Api';
import Swal from "sweetalert2";
import ModalPortal from '../modal/ModalPortal';
import CoseBack from '../modal/CoseBack';

const MapCose = ({title, isTitle}) => {
    const navigate = useNavigate();
    const [modal, setModal]=useState(false);
    const [cose,setCose] = useState(
    JSON.parse(localStorage.getItem('TITLE_NAME')) || []
    );
    const [dragAndDrop, setDragAndDrop] = useState({
        draggedFrom: null,
        draggedTo: null,
        isDragging: false,
        originalOrder: [],
        updatedOrder: [...cose],
      });   
    // ACCESS_TOKEN이 없으면 마이페이지 접근 불가
  const getToken = sessionStorage.getItem("ACCESS_TOKEN");

  useEffect(() => {
    if(getToken === null){
      alert("로그인이 필요한 서비스입니다.")
      navigate('/login')
    }
  },[getToken]);

  useEffect(() => {
      JSON.parse(localStorage.getItem('TITLE_NAME'))
  },[])
  const onDragStart = (event) => {
      event.currentTarget.style.opacity = "0.4";
      const initialPosition = parseInt(event.currentTarget.dataset.position);
          setDragAndDrop({
              ...dragAndDrop,
              draggedFrom: initialPosition,
              originalOrder: cose,
          });
      };
        
  //드래그 했을 시 로컬스토리지에 반영되는 것(수정필요)
  useEffect(() => {
      localStorage.setItem('TITLE_NAME', JSON.stringify(dragAndDrop.updatedOrder))
  },[cose]);

  //취소 버튼 모달
  const onClose = () => {
    setModal(false)
  };
  const onOpen = () => {
    setModal(true)
  };
  
  const onDragOver = (event) => {
      event.preventDefault();
      let newList = dragAndDrop.originalOrder;						   
      const draggedFrom = dragAndDrop.draggedFrom;					   // 드래그 되는 항목의 인덱스(시작)
      const draggedTo = parseInt(event.currentTarget.dataset.position);  // 놓을 수 있는 영역의 인덱스(끝)
      const itemDragged = newList[draggedFrom];						   
      const remainingItems = newList.filter(			// draggedFrom(시작) 항목 제외한 배열 목록 
        (item, index) => index !== draggedFrom
      );
      newList = [										// 드래그 시작, 끝 인덱스를 활용해 새로운 배열로 반환해줌
        ...remainingItems.slice(0, draggedTo),
        itemDragged,
        ...remainingItems.slice(draggedTo),
      ];
      if (draggedTo !== dragAndDrop.draggedTo) {		// 놓을 수 있는 영역이 변경 되면 객체를 변경해줌
        setDragAndDrop({
          ...dragAndDrop,
          updatedOrder: newList,
          draggedTo: draggedTo,
        });
      }
  };

  const onDrop = (event) => {
      setCose(dragAndDrop.updatedOrder);
      setDragAndDrop({
        ...dragAndDrop,
        draggedFrom: null,
        draggedTo: null,
      });
  };

  const onDragLeave = (event) => {
      event.currentTarget.classList.remove("over");
      setDragAndDrop({
        ...dragAndDrop,
        draggedTo: null,
      });
  };

  const onDragEnter = (event) => { 
      event.currentTarget.classList.add("over");
  };

  const onDragEnd = (event) => {
      event.currentTarget.style.opacity = "1";
      const listItens = document.querySelectorAll(".draggable");
      listItens.forEach((item) => {
        item.classList.remove("over");
      });
  };

  //코스목록안에 있는 개별 항목 제거
  const handleRemoveTitle = (id) => {
    const nextKeyword = cose.filter((list) => {
      return list.id !== id
    })
    setCose(nextKeyword)
  };

  const onAddComment = async (e) => {
    e.preventDefault();
    if (title === "") {
      return alert("제목을 입력해주세요.");
    }
    if (cose.length < 2){
      return alert("여행지를 두 곳 이상 선택해주세요")
    }
    const payload = {
      name: title,
      data: cose,
    };
    try {
    const res = await instance.post(
      `/api/auth/course`,
      payload,
      {
      headers: {
        contentType : "application/json"
      },
      }
    );
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '작성 완료',
      showConfirmButton: false,
      timer: 1000
    })
    .then((Swal) => window.location.replace('/cose'))
    return res.data;
    } catch (error) {
    }
  };

  return (
    <>
      <Cose1Box>
        <Cose1Div>
          <ul>
            {cose.map((item, index) => {
              return (
                <li
                    style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    }}
                    className="draggable"
                    key={index}			
                    draggable={true} 				//  draggable => true이면 드래그가 가능
                    data-position={index}			//  dataset에 index값을 주어 선택된 index를 찾을 수 있다
                    onDragStart={onDragStart}	
                    onDragOver={onDragOver}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                    onDragEnter={onDragEnter}
                    onDragEnd={onDragEnd}
                >
                <TitleDiv key={index}>
                    {index+1 === cose.length
                    ?
                    <CoseBox>
                    <LastCoseDiv>
                        <div>
                          <p>{item.title}</p>
                        </div>
                        <DelP onClick={() => handleRemoveTitle(item.id)}>X</DelP>
                    </LastCoseDiv>
                    </CoseBox>
                    :<CoseBox>
                    <CoseDiv>
                        <div>
                          <p>{item.title}</p>
                        </div>
                        <DelP onClick={() => handleRemoveTitle(item.id)}>X</DelP>
                    </CoseDiv>
                    <p style={{paddingTop:"0.1rem"}}>▼</p>
                    </CoseBox>
                    }
                </TitleDiv>
                  </li>
                );
            })}
          </ul>  
          </Cose1Div>
          <ButDiv>
              <AddBut onClick={onAddComment}>작성완료</AddBut>
              <CancelBut onClick={onOpen}>취소</CancelBut>
          </ButDiv>
          <ModalPortal>
              {modal && <CoseBack onClose={onClose}/>}
          </ModalPortal>
      </Cose1Box>
    </>
  )
}

export default MapCose;

const Cose1Box = styled.div`
  text-align:center;
  /* display:flex; */
  margin: auto;
  flex-wrap:wrap;
`;
const Cose1Div = styled.div`
  margin: auto;
  text-align: center;
  align-items:center;
  justify-content:center;
  margin-top:0.5rem;
`;
const ButDiv = styled.div`
  width:80%;
  display:flex;
  margin: 2rem auto;
  justify-content:center;
`;
const AddBut = styled.button`
  cursor: pointer;
  color: white;
  background-color: #abd4e2;
  border: 0px;
  height: 2.5rem;
  border-radius: 5px;
  line-height: 2.5rem;
  margin-right: 1rem;
  width: 100%;
  font-weight: bold;
`;
const CancelBut = styled.button`
  cursor: pointer;
  font-weight: bold;
  color: #abd4e2;
  background-color: white;
  border: 3px solid #abd4e2;
  height: 2.5rem;
  border-radius: 5px;
  line-height: 2.1rem;
  width: 100%;
`;
const TitleDiv = styled.div`
  width:80%;
  display:flex;
`;
const CoseBox = styled.div`
  width:100%;
`;
const CoseDiv = styled.div`
  height:2.5rem;;
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  border: 3px solid #abd4e2;
  border-radius:15px;
  div{
    width:70%;
    text-align:left;
    cursor: pointer;
    &:hover{
      color:#abd4e2;
    }
    margin-left:1rem;
  }
`;

const LastCoseDiv = styled.div` 
  height:2.5rem;;
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  border: 3px solid #abd4e2;
  border-radius:15px;
  div{
    width:70%;
    text-align:left;
    cursor: pointer;
    &:hover{
      color:#abd4e2;
    }
    margin-left:1rem;
  }
`
const DelP = styled.p`
  margin-right:1rem;
  /* text-align:center; */
  cursor: pointer;
  &:hover{
    color:#abd4e2;
  }
`
