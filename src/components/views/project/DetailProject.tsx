import React from "react";
import styled from "styled-components";

const DetailProject = () => {
  return (
    <IntroLayout>
      <IntroWrapper>프로젝트 상세페이지</IntroWrapper>
    </IntroLayout>
  );
};

export default DetailProject;

const IntroLayout = styled.div`
  display: flex;
  justify-content: center;
`;

const IntroWrapper = styled.div`
  width: 77%;
  height: calc(100vh - 84px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 84px;
  margin: 3rem 5rem 0;
  font-family: "SUIT-Regular";
`;
