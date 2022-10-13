import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const Search = ({ title }) => {
  const [searchWord, setSearchWord] = useState(title);
  const onSubmitSearch = (e) => {
    if (e.key === "Enter") {
      if (searchWord === undefined) {
        alert("검색어를 입력해주세요.");
      } else {
        window.location.replace("/search/" + searchWord);
      }
    }
  };

  return (
    <>
      <SearchBox>
        <SearchDiv>
          <input
            type="text"
            placeholder="찾으시는 장소를 입력해주세요."
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
            onKeyPress={onSubmitSearch}
          />
          <SearchA>
            <img
              onClick={() => {
                if (searchWord === undefined) {
                  alert("검색어를 입력해주세요.");
                } else {
                  window.location.replace("/search/" + searchWord);
                }}}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeZJREFUOBGVVD1PAkEQ3VlOjY0xIdGOI0BMxMSGytJE+RsWWomx8mfYWNBpZWltg1b2NCZaGBppFAzR1njsOO9gzHEfIJdws/vmvcft7OySiT2DQqUakDtipjoZ4xsyzGy6RNzy2F7mu53nmGRiKprRw7XaQm/wdU6OG2xMTvFoFPKQLTXX86tn1G7/RHM6thjArP/xeWscn8rUWqJLee/klhdW8MM4xCQHDrjQqEkivhfLF++FEvf80luvsLGXIIwB5MABF5o0HoU1M+5RkvK1Xn29+3KfRlQMpmyCOyzfM3Y7XlMbboDUjIiuZpnBFBwsH3WGVv9Io8VuYuLEUMFZUbmqjfJt2BqC5JZyT9HEtLFyVRvlhrscBeYaS4/G+VaQV4DD7+FWPJk1Vy4aPs6R+nILoBTzMJ7MmitXtVGexXFCC8j5OpzWgyoCxzEfQQOt4hot+gjHSZZOhoLraabIEQU3EEMT70HgHl44m3KcNqUm+2SCVt8vX6E1dDdRMyzTcSCXBhRSImc6o9HkW7589Pz3cpAD8CBL3oXKkj1Ze+00xxZh+DNUMHF9SQKdEL2+en7lmNmFRmmm6jVXhGl4SchF0fcrjbnEWeQ008SSs8RZuC5fjIbWW6xm8ebCYdovlg8g+gXwsu0wmCVGbgAAAABJRU5ErkJggg=="
              alt="search"
              style={{ color: "#FF8585" }}
            />
          </SearchA>
        </SearchDiv>
      </SearchBox>
    </>
  );
};

export default Search;

const SearchBox = styled.div`
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  position: relative;
  background-color: #abd4e2;
  top: -1px;
`;
const SearchDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px 15px;
  box-sizing: border-box;
  input {
    color: rgb(102, 102, 102);
    flex-grow: 1;
    appearance: none;
    border: none;
    height: 2.5rem;
    border-radius: 10px;
    margin-right: 1rem;
    font-weight: 700;
    padding-left: 1rem;
    font-size: 1rem;
    ::placeholder {
      color: rgb(179, 179, 179);
      /* text-align:center; */
      font-weight: 500;
    }
    &:hover,
    :focus {
      outline: none;
    }
  }
`;
const SearchA = styled.a`
  color: rgb(33, 33, 33);
  text-decoration: none;
  cursor: pointer;
  img {
    vertical-align: bottom;
    width: 18px;
    height: 20px;
  }
`;
