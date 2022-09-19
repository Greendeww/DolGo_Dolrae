import React from 'react'
import {useDispatch} from 'react-redux'
import { _deleteComment } from '../../redux/modules/comment';

const CommentModal = ({close,close1}) => {
  const dispatch = useDispatch();
  
  return (
    <>
      <div onClick={close}>
      {/* <div>
        {imageUrl = null
        ?
        <div> 
        <p>제목</p>
        <p>내용</p>
        {comment.email === email
        ?<div>
        <button>수정하기</button>
        <button onClick={() => dispatch(_deleteComment(comment))}>삭제하기</button>
        </div>
        :null
        }
        </div>
        :
        <div>
        <p>제목</p>
        <img alt=''/>
        <p>내용</p>
        {comment.email === email
        ?<div>
        <button>수정하기</button>
        <button>삭제하기</button>
        </div>
        :null
        }
        </div>
        }
      </div> */}
      <h1>모달확인</h1>
      </div>
      
    </>
  )
}

export default CommentModal
