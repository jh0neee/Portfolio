import { ClipLoader } from "react-spinners";
import styled from "styled-components";

const LoadingSpinner = () => {
  return (
    <LoadingLayout>
      <h3>로딩 중.. 기다려주세요.</h3>
      <ClipLoader />
    </LoadingLayout>
  );
};

export default LoadingSpinner;

const LoadingLayout = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;

  > h3 {
    margin-bottom: 1rem;
  }
`;
