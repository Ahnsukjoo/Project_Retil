import React from "react";
import "./MockList.css"; // 스타일 파일을 임포트하세요

const MockList = ({ list }) => {
    return (
        <>
            {list.map((item) => (
                <div key={item.title} className="mock_list">
                    <input checked={item.bookmark} type="checkbox" />
                    <div className="subject_name">{item.subjectName}</div>
                    <div className="memo_title">{item.title}</div>
                </div>
            ))}
        </>
    );
};

export default MockList;
