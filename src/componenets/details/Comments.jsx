import userEvent from '@testing-library/user-event';
import React, {useState, useRef, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import CommentModal from './CommentModal';

const Comments = ({comment}) => {

  const ids = comment.length
  const {id} = useParams();
  let [modal, setModal] = useState(false);
  const close = () => {
    setModal(false);
  };




  return (
    <> 
      {modal === false
      ?
      <div>
        <div style={{display:"flex",cursor:"pointer",borderTop:"1px solid rgb(195, 194, 204)",marginTop:"10px",textAlign:"center"}} onClick={() => {setModal(true)}}>
        <p style={{width: "6rem"}}>{comment.comment_id}</p>
        <p style={{width:"100%"}}>{comment.content}</p>
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
       <div style={{display:"flex",cursor:"pointer",borderTop:"1px solid rgb(195, 194, 204)",marginTop:"10px",textAlign:"center"}} onClick={() => {setModal(false)}}>
        <p style={{width: "6rem"}}>{comment.comment_id}</p>
        <p style={{width:"100%"}}>{comment.content}</p>
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

