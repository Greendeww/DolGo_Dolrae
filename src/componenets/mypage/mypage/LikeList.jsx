import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { instance } from "../../../shared/Api";
import Like from "../../like/Like";
import PaginationsLike from "../../pagination/PaginationsLike";
<<<<<<< HEAD
import basicImg from "../../../assert/image/basic.png";
=======
>>>>>>> 884b2218cf86fa79c5a8028602d4770bb132f4bc

const LikeList = () => {
  const navigate = useNavigate();

  const [list, setList] = useState([]);
  const [likeList, setLikeList] = useState([...list].reverse());
  const [currentLike, setCurrnetLike] = useState([]);
  const [page, setPage] = useState(1);
  const [postPerPage] = useState(2);
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPage = indexOfLastPost - postPerPage;

  const getList = async () => {
    const res = await instance.get("/api/auth/place/mypage");
    console.log(res.data);
    setList(res?.data);
    setLikeList([...res?.data].reverse());
  };
  useEffect(() => {
    setCurrnetLike(likeList.slice(indexOfFirstPage, indexOfLastPost));
  }, [indexOfFirstPage, indexOfLastPost, page, list]);

  const handlePageChange = (page) => {
    setPage(page);
  };
  useEffect(() => {
    getList();
  }, []);
  console.log(likeList)
  return (
    <StLikeList>
      <h2>찜한 장소</h2>
      <div>
        <p onClick={() => navigate('/maps')}>지도로 보기</p>
        <div>
        {currentLike.map((item) => (
          <div key={item.id}>
            {item.image === null
            ? <img
                alt=""
                src={basicImg}
                onClick={() => navigate(`/detail/${item.id}`)}
              />
            :  <img
                alt=""
                src={item.image}
                onClick={() => navigate(`/detail/${item.id}`)}
              />
            }
            <Title>
              <p>{item.title}</p>
              <span>
                <Like id={item.id} />
              </span>
            </Title>
<<<<<<< HEAD
        </div>
      ))}
      </div> 
         <PaginationsLike
            page={page}
            count={list.length}
            setPage={handlePageChange}
            postPerpage={2}
            />
=======
          </div>
        ))}
        <PaginationsLike
          page={page}
          count={list.length}
          setPage={handlePageChange}
          postPerpage={2}
        />
>>>>>>> 884b2218cf86fa79c5a8028602d4770bb132f4bc
      </div>
    </StLikeList>
  );
};

export default LikeList;

const StLikeList = styled.div`
  margin: 50px auto;
  margin-top: 100px;
  & h2 {
    color: #bfb8b8;
    margin-left: 10px;
  }

  & img {
    display: flex;
    margin: 0 auto;
    width: 90%;
    border-radius: 15px;
    max-height:262px;
    &:hover {
      cursor: pointer;
    }
  }

  & div > div {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  margin: 0 15px;
  display: flex;
  font-weight: 900;
  font-size: 23px;
  justify-content: space-between;
  margin-top: 15px;
  position: relative;
  left: 15px;

  & span {
    font-weight: 700;
    font-size: 40px;
    color: #ff8585;
    position: relative;
    top: -5px;
    right: 15px;

    &:hover {
      cursor: pointer;
    }
  }
`;
