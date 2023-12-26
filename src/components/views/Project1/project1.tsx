import styled from "styled-components";
import FlipCard from "./FlipCard";
import { IoLinkOutline, IoLogoGithub } from "react-icons/io5";

const Billim = () => {
  return (
    <ProjectLayout>
      <TitleContainer>
        <FlipCard />
        <ExplainContent>
          <TitleBox>
            <p>프로젝트명</p>
            <p>Project Type</p>
          </TitleBox>
          <hr />
          <TitleText>프로젝트 내용</TitleText>
          <SubTitleBox>
            <FlexDivBox>
              <IoLinkOutline />
              <p>배포 링크 </p>
              <a href="#">배포 링크</a>
            </FlexDivBox>
            <p>임시 아이디/비밀번호</p>
          </SubTitleBox>

          <SubTitleBox>
            <FlexDivBox>
              <IoLogoGithub />
              <p>Repository</p>
            </FlexDivBox>
            <a href="#">프로젝트 repo</a>
            <a href="#">프로젝트 repo</a>
          </SubTitleBox>
        </ExplainContent>
      </TitleContainer>
      <ContentContainer>
        <ContentBox>
          <ContentTitle>프로젝트 소개</ContentTitle>
          <ContentText>프로젝트 소개 내용</ContentText>
          <SubContentBox>
            <div>
              <SubContentTitle>Stack</SubContentTitle>
              <p>프로젝트 기술 스택</p>
            </div>
            <div>
              <SubContentTitle>구현 기능</SubContentTitle>
              <p>프로젝트 구현 기능</p>
            </div>
          </SubContentBox>
        </ContentBox>
        <ContentBox>
          <ContentTitle>문제점&해결과정</ContentTitle>
          <ContentText>
            프로젝트 하면서 발생한 문제점과 그에 대한 해결과정
          </ContentText>
        </ContentBox>
      </ContentContainer>
    </ProjectLayout>
  );
};

export default Billim;

const ProjectLayout = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "SUIT-Regular";
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 3rem 5rem 0;
`;

const ExplainContent = styled.div`
  width: 366px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.5rem;

  > p:first-child {
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 5px;
  }
`;

const TitleText = styled.p`
  width: 320px;
  font-size: 1.3rem;
  margin: 1rem 0 0;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 3rem 0 0;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
`;

const ContentTitle = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const ContentText = styled.p`
  line-height: 1.5;
`;

const SubContentBox = styled.div`
  display: flex;
  margin-top: 1rem;

  > div:first-child {
    width: 48%;
  }
`;

const SubContentTitle = styled.p`
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const FlexDivBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;

  > svg {
    margin-right: 0.2rem;
  }
`;

const SubTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`;
