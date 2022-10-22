import React, { useState } from "react";
import search from "../../assert/header/search.png";
import styled from "styled-components";
import { useEffect } from "react";
import RecentSearch from "../modal/RecentSearch";

const Search = ({ title }) => {
  const [searchWord, setSearchWord] = useState(title);
  const [modal, setModal] = useState(false)
  let [keywords, setKeywords] = useState(
    // [localStorage.getItem('keywords' || [])])
   JSON.parse(localStorage.getItem('keywords')) || []
  );
  console.log(keywords)

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords))
  },[keywords])

  
  const onClose = () => {
    setModal(false)
  };
  
  //검색어 추가
  const handleAddKeyword = (text) => {
    const newKeyword = {
      text : text,
    }
    if(!keywords.includes(newKeyword.text)){
      if (keywords.length > 2) {
        keywords = keywords.slice(0, 2);
      }
      setKeywords([newKeyword.text, ...keywords])
    }else{
      const keyword = keywords.filter((keyword) => {
        return keyword !== newKeyword.text
      })
      setKeywords([newKeyword.text, ...keyword])
    }
  }

  //검색어 삭제
  const handleRemoveKeyword = (text) => {
    const nextKeyword = keywords.filter((thisKeyword) => {
      return thisKeyword !== text
    })
    setKeywords(nextKeyword)
  }

  //검색어 전체 삭제
  const handleClearKeywords = () => {
    setKeywords([])
  }

  //최근 검색어 눌렀을 때 검색어 이동
  const ReSearch = (text) => {
    window.location.replace("/search/" + text);
  }

  //검색어 입력시 이동
  const onSubmitSearch = (e) => {
    if (e.key === "Enter") {
      if (searchWord === undefined) {
        alert("검색어를 입력해주세요.");
      } else {
        handleAddKeyword(searchWord);
        window.location.replace("/search/" + searchWord);
      }
    }
  };

  return (
    <>
      <SearchBox>
<<<<<<< HEAD
        <SearchContainer>
          <SearchDiv>
            <InputDiv >
              <input
                type="text"
                placeholder="찾고 싶은 장소를 입력해주세요."
                value={searchWord}
                onChange={(e) => setSearchWord(e.target.value)}
                onKeyPress={onSubmitSearch}
                onClick={() => setModal(true)}
              />
              {modal
              ?<hr/>
              :null
              }
              {modal && <RecentSearch 
                onClose={onClose} 
                allClear={handleClearKeywords} 
                keywords={keywords}
                ReSearch={ReSearch} 
                oneClear={handleRemoveKeyword}
                handleAddKeyword={handleAddKeyword}/>}
              </InputDiv>
            <SearchA>
              <img
                onClick={() => {
                  if (searchWord === undefined) {
                    alert("검색어를 입력해주세요.");
                  } else {
                    handleAddKeyword(searchWord);
                    window.location.replace("/search/" + searchWord);
                  }}}
                src={search}
                alt="search"
                style={{ color: "#FF8585" }}
              />
            </SearchA>
          </SearchDiv>
          </SearchContainer>
=======
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
                }
              }}
              src={search}
              alt="search"
              style={{ color: "#FF8585" }}
            />
          </SearchA>
        </SearchDiv>
>>>>>>> 12804f18befadcaf1f8fc663dc8805e65b1d138b
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
  z-index: -1;
`;
const SearchContainer = styled.div`

`
const InputDiv = styled.div`
  width:87%;
  background-color:#fff;
  margin-right:1.3rem;
  /* border-radius:10px; */
  hr{
    margin-left:0.8rem;
    margin-right:1rem;
    border: 2px solid #abd4e2;
  }
  input {
    width:90%;
    color: rgb(102, 102, 102);
    flex-grow: 1;
    appearance: none;
    border: none;
    height: 2.5rem;
    font-weight: 700;
    padding-left: 1rem;
    font-size: 1rem;
    ::placeholder {
      color: rgb(179, 179, 179);
      font-weight: 500;
    }
    &:hover,
    :focus {
      outline: none;
    }
  }
`
const SearchDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0px 15px;
  box-sizing: border-box;
`;

const SearchA = styled.a`
  color: rgb(33, 33, 33);
  text-decoration: none;
  margin-top:0.7rem;
  align-items:center;
  cursor: pointer;
  img {
    vertical-align: bottom;
    width: 18px;
    height: 20px;
    margin-right:0.8rem;
  }
`;