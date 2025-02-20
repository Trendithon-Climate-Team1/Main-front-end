import React, { useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as DnEIcon } from "../../assets/DnE.svg"; // 📸 카메라 아이콘 추가

const ThankYouModal = ({ onClose }) => {
  useEffect(() => {
    // 3초 후에 onClose 함수 실행 (홈 이동)
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // 3초 후 자동 닫힘

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [onClose]);

  return (
    <ModalOverlay>
      <ModalContent>
        <DnEIcon width="284" height="245" />
        <ThankYouText>감사합니다</ThankYouText>
        <SubText>
          인증 절차를 걸쳐 <span>100P</span>가 지급됩니다.
          <br />
          마이페이지에서 확인해 주세요.
        </SubText>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ThankYouModal;

// ✅ 스타일 추가
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  //   position: relative;
  // margin: 0 auto;

  // background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  background: #7adcdb;
  text-align: center;
  width: 393px;
  height: 950px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ThankYouText = styled.h2`
  color: white;
  font-size: 40px;
  font-weight: bold;
`;

const SubText = styled.p`
  color: white;
  font-size: 15px;
  margin-top: 10px;
  line-height: 25px;

  span {
    font-weight: 800;
    font-size: 17px;
  }
`;
