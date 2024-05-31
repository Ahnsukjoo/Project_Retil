import React, { useState, useEffect } from 'react';
import './Tab.css';
import Listmodal from './Listmodal';

const Tab = () => {
  const [currentTab, clickTab] = useState(0);
  const [menuArr, setMenuArr] = useState([
    { name: 'Tab1', content: 'Tab menu ONE', list: ['Item 1', 'Item 2', 'Item 3'], borderColor: '#000000' },
    { name: 'Tab2', content: 'Tab menu TWO', list: ['Item A', 'Item B', 'Item C'], borderColor: '#000000' },
    { name: 'Tab3', content: 'Tab menu THREE', list: ['Item X', 'Item Y', 'Item Z'], borderColor: '#000000' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMoreTabs, setShowMoreTabs] = useState(false);

  const selectMenuHandler = (index) => {
    clickTab(index);
  };

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

 const handleAddTab = (newTabName, borderColor) => {
  const newTabContent = `Tab menu ${menuArr.length + 1}`;
  const newTabList = [`Item ${menuArr.length + 1}A`, `Item ${menuArr.length + 1}B`, `Item ${menuArr.length + 1}C`];
  setMenuArr([...menuArr, { name: newTabName, content: newTabContent, list: newTabList, borderColor }]);
  setIsModalOpen(false);
};

  const handleShowMoreTabs = () => {
    setShowMoreTabs((prev) => !prev);
  };

  return (
    <div className='tabul'>
      <div className="tab-menu">
        {/* 보여질 탭은 3개까지만, showMoreTabs가 true인 경우 모두 표시합니다. */}
        {menuArr.slice(0, showMoreTabs ? menuArr.length : 3).map((el, index) => (
          <div
            key={index}
            className={index === currentTab ? 'submenu focused' : 'submenu'}
            onClick={() => selectMenuHandler(index)}
            style={{ borderColor: el.borderColor }} // 테두리 색상 적용
          >
            {el.name}
          </div>
        ))}

        {/* 탭이 3개 이상인 경우 "더 보기" 버튼을 표시합니다. */}
        {menuArr.length > 3 && (
          <div className="submenubutton" onClick={handleShowMoreTabs}>
            {showMoreTabs ? '접기' : '더 보기'}
          </div>
        )}
        <div className="submenubutton" onClick={openModalHandler}>
          추가하기
        </div>
      </div>
      {/* 현재 선택된 탭의 내용을 표시합니다. */}
      <div className="desc">
        <p>{menuArr[currentTab].content}</p>
        <ul>
          {menuArr[currentTab].list.map((item, index) => (
            <div key={index} className="list-item" style={{ borderColor: menuArr[currentTab].borderColor }}>
              {item}
            </div>
          ))}
        </ul>
      </div>
      {/* 모달 컴포넌트를 렌더링합니다. isOpen, onClose, onAddTab 속성을 전달합니다. */}
      <Listmodal isOpen={isModalOpen} onClose={handleModalClose} onAddTab={handleAddTab} />
    </div>
  );
};

export default Tab;
