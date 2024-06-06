import React, { useState, useEffect } from "react";
import "./Tier.css";
import MainP from "../mainprofilpage/Mainp";
import Progressbar from "./Progressbar";
import Ranking from "./Ranking";
import {getTier} from "../../../tier/get_tier.js";

const token = localStorage.getItem("token");
const user_id = localStorage.getItem("user_id");

// 목업 데이터
const now = new Date();
const sixHoursLater = new Date(now.getTime() + 6 * 60 * 60 * 1000);
const fourHoursLater = new Date(now.getTime() + 4 * 60 * 60 * 1000);
const int = 1; // 임시로 넣은 정수값
const mData = [
  {
    id: 1,
    nickname: "호빈",
    time: sixHoursLater.getTime(),
    rank: 1,
  },
  {
    id: 2,
    nickname: "뽕따",
    time: fourHoursLater.getTime(),
    rank: 2,
  },
  {
    id: 3,
    nickname: "송이",
    time: fourHoursLater.getTime(),
    rank: 2,
  },
  {
    id: 4,
    nickname: "똥쟁이",
    time: sixHoursLater.getTime(),
    rank: 1,
  },
];

const myData = {
  id: 3,
  nickname: "똥쟁이",
  time: sixHoursLater.getTime(),
  rank: 1,
};

function Tier() {
  const [myRank, setMyRank] = useState(myData);
  const [rank, setRank] = useState([]);
  const [search, setSearch] = useState("");

  const sortRank = () => {
    const sortedRank = [...mData].sort((a, b) => a.rank - b.rank);
    setRank(sortedRank);
  };

  useEffect(() => {
    sortRank(); // 컴포넌트가 마운트될 때 mData를 rank순으로 정렬하여 state에 저장
  }, []);

  const utcTime = new Date().getTime();
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  const koreaTime = new Date(utcTime + 9 * 60 * 60 * 1000).toLocaleString(
      "ko-KR",
      options
  );

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilter = () => {
    if (search === "") {
      return rank;
    }
    return rank.filter((rank) => {
      return rank.nickname.toLowerCase().includes(search.toLowerCase());
    });
  };

  const filteredRank = getFilter();

  return (
      <>
        <MainP />

        <div className="myTier">
          <div className="Tname">송이님!</div>
          <div className="oo">
            다음 레벨까지 oo시간
            <br />
            남았습니다!
          </div>
          <div className="rank_time">07:00/10:00</div>
          <div className="my_rank">{myRank.rank}등</div>
          <img className="Tiericon" src={getTier(int)} alt="Tier" />
          <div className="my_progress">
            <Progressbar />
          </div>
          <div className="my_studyTime">총 공부량 (누적시간) {myRank.time}</div>
        </div>
        <div className="aaaa">
          <div className="sun">순위</div>
          <div className="date">최근 업데이트 {koreaTime}</div>
          <div className="bb">
            <input
                value={search}
                onChange={onChangeSearch}
                className="input_search"
                placeholder="검색어를 입력하세요"
            ></input>
          </div>
          <div className="rank_wrapper">
            {filteredRank.map((rank) => {
              return <Ranking key={rank.id} {...rank} />;
            })}
          </div>
        </div>
      </>
  );
}

export default Tier;
