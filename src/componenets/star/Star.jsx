import React from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

function Star({comment}) {
  
  return (
    <>
    {comment.star === 5
      ? <div>
          <FaStar style={{color:"#fcc419"}}/>
          <FaStar style={{color:"#fcc419"}}/>
          <FaStar style={{color:"#fcc419"}}/>
          <FaStar style={{color:"#fcc419"}}/>
          <FaStar style={{color:"#fcc419"}}/>
        </div>
      :(comment.star === 4
      ? <div>
          <FaStar style={{color:"#fcc419"}}/>
          <FaStar style={{color:"#fcc419"}}/>
          <FaStar style={{color:"#fcc419"}}/>
          <FaStar style={{color:"#fcc419"}}/>
      </div>
      :(comment.star === 3
        ? <div>
            <FaStar style={{color:"#fcc419"}}/>
            <FaStar style={{color:"#fcc419"}}/>
            <FaStar style={{color:"#fcc419"}}/>
          </div>
      :(comment.star === 2
      ? <div>
          <FaStar style={{color:"#fcc419"}}/>
          <FaStar style={{color:"#fcc419"}}/>
        </div>
      :(comment.star === 1
        ? <div>
            <FaStar style={{color:"#fcc419"}}/>
          </div>
        :null
      ))))  
      }
    </>
  );
}

export default Star;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;

const RatingText = styled.div`
  color: #787878;
  font-size: 12px;
  font-weight: 400;
`;

const Stars = styled.div`
  display: flex;
  padding-top: 5px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;