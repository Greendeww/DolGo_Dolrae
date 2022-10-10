import React from "react";
import styled from "styled-components";

const ThemeList = ({ post }) => {
  console.log(post.theme);
  return (
    <>
      <Wrap>
        {post.theme === "12" ? (
          <div>
            <p>관광지</p>
          </div>
        ) : post.theme === "14" ? (
          <div>
            <p>문화시설</p>
          </div>
        ) : post.theme === "28" ? (
          <div>
            <p>레포츠</p>
          </div>
        ) : (
          <div>
            <p>음식점</p>
          </div>
        )}
      </Wrap>
    </>
  );
};

export default ThemeList;
const Wrap = styled.div`
  color: #bfb8b8;
  margin-top: 0.2rem;
`;
