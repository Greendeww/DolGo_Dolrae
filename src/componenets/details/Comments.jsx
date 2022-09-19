import userEvent from '@testing-library/user-event';
import React, {useState} from 'react'
import CommentModal from './CommentModal';

const Comments = () => {
  let [modal, setModal] = useState(false);
  const close = () => {
    setModal(false);
  };
  return (
    <>
      <div style={{cursor:"pointer"}} onClick={() => {setModal(true)}}>
      <p>내용</p>
      <p>닉네임</p>
      </div>
      {modal === true
      ? <CommentModal close={close}/>
      :null
      }
    </>
  )
}

export default Comments

