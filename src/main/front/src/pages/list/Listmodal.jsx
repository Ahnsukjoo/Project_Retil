// Listmodal.jsx
import React, { useState } from 'react';
import './Listmodal.css';

const Listmodal = ({ isOpen, onClose, onAddTab }) => {
  // 새로운 탭의 이름을 관리하는 상태
  const [newTabName, setNewTabName] = useState('');
  // 추가할 탭의 테두리 색상을 관리하는 상태
  const [borderColor, setBorderColor] = useState('#000000'); // 초기값은 검정색

  // 입력 필드의 값이 변경될 때 호출되는 함수
  const handleInputChange = (e) => {
    setNewTabName(e.target.value);
  };

  // 색상 변경 핸들러
  const handleColorChange = (e) => {
    setBorderColor(e.target.value);
  };

  // "확인하기" 버튼을 클릭할 때 호출되는 함수
  const handleAddTab = () => {
    // 입력된 탭 이름이 유효한 경우에만 onAddTab 함수를 호출
    if (newTabName.trim()) {
      onAddTab(newTabName, borderColor); // 테두리 색상 정보도 함께 전달
      setNewTabName(''); // 입력 필드를 초기화
    }
  };

  // 모달이 열려 있지 않으면 아무것도 렌더링하지 않음
  if (!isOpen) return null;

  // 모달이 열려 있는 경우 렌더링되는 JSX
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>새 탭 추가</h2>
        <input
          type="text"
          value={newTabName}
          onChange={handleInputChange}
          placeholder="탭 제목 입력"
          className='tabmodalnameinput'
        />
        <input
          type="color"
          value={borderColor}
          onChange={handleColorChange}
          style={{ marginBottom: '20px' }}
          className='tabcolorpicker'
        />
        <button onClick={handleAddTab} className='tabmodalokbutton'>확인하기</button>
        <button onClick={onClose} className='tabmodalcanclebutton'>닫기</button>
      </div>
    </div>
  );
};

export default Listmodal;
