import { useEffect, useState } from "react";
import Modal from "../common/Modal";
import styled from "styled-components";

const AlertModal = () => {
  const [showAlertModal, setShowAlertModal] = useState(false);

  const closeAlertModal = () => {
    setShowAlertModal(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowAlertModal(window.innerWidth < 1440);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledModal show={showAlertModal} onCancel={closeAlertModal}>
      <AlertWrapper>
        <p>
          😲 Notice:
          <br />
          　현재 <span>반응형 작업</span>을 진행 중입니다...🔨
        </p>
        <p>
          데스크탑에서 최적화 되어있으므로 <br /> <span>데스크탑</span>으로
          전환해 주시길 바랍니다.
        </p>
      </AlertWrapper>
    </StyledModal>
  );
};

export default AlertModal;

const StyledModal = styled(Modal)`
  font-weight: bold;
  font-family: SUIT-Regular;
  width: 420px !important;
  height: 220px !important;
  padding: 1.5rem 2rem !important;

  > form {
    width: 100%;
    height: 90%;
    > div {
      width: 100%;
      height: 150px;
      padding: 0;
    }
  }

  @media (max-width: 600px) {
    width: 70% !important;
    height: 23% !important;
    left: 50% !important;
  }
`;

const AlertWrapper = styled.div`
  > p {
    text-align: center;
    font-size: 1.35rem;
    line-height: 1.2;
  }

  > p > span {
    color: #e63c3c;
  }

  > p:first-child {
    font-size: 1.5rem;
    line-height: 2;
    padding-bottom: 5px;
  }

  @media (max-width: 600px) {
    > p {
      font-size: 1.1rem;
    }

    > p:first-child {
      font-size: 1.3rem;
      line-height: 1.5;
      padding-bottom: 15px;
    }
  }
`;
