import userEvent from '@testing-library/user-event';
import React, {useState, useRef, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import CommentModal from './CommentModal';

const Comments = ({comment}) => {
  const {id} = useParams();
  console.log(comment)
  let [modal, setModal] = useState(false);
  const close = () => {
    setModal(false);
  };




  return (
    <> 
      {modal === false
      ?
      <div>
        <div style={{cursor:"pointer",borderBottom:"3px solid red"}} onClick={() => {setModal(true)}}>
        <p>{comment.content}</p>
        {/* <p>닉네임</p> */}
        </div>
        <div style={{cursor:"pointer"}}>
          {modal === true
          ? <CommentModal key ={comment.comment_id} comment={comment} close={close}/>
          :null
          }
        </div>
      </div>
      :<div>
      <div style={{cursor:"pointer",borderBottom:"3px solid red"}} onClick={() => {setModal(false)}}>
      <p>{comment.content}</p>
      {/* <p>닉네임</p> */}
      </div>
      <div>
        {modal === true
        ? <CommentModal key={comment.comment_id} comment={comment} close={close}/>
        :null
        }
      </div>
    </div>
      }
    </>
  )
}

export default Comments

