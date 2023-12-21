import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const BackDropLayout = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const BackDrop = () => {
  useEffect(() => {
    // 기존 스타일의 overflow,top 속성 값 저장. 이후 언마운트될 때 body의 overflow, top 속성을 원래상태로 복원하기 위함
    const originalOverflow = document.body.style.overflow;
    const originalTop = document.body.style.top;

    // 스크롤 방지를 위한 스타일 설정
    document.body.style.cssText = `
      position: fixed;
      width: 100%
      top: -${window.scrollY}px;
      overflow-y: scroll;
    `;

    // 컴포넌트 언마운트
    return () => {
      document.body.style.cssText = `
        position: ${originalOverflow};
        top: ${originalTop};
      `;
      window.scrollTo(0, parseInt(originalTop || "0", 10) * -1);
    };
  }, []);

  return ReactDOM.createPortal(
    <BackDropLayout />,
    document.getElementById("backdrop") as HTMLElement,
  );
};

export default BackDrop;
