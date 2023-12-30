import styled from "styled-components";
import FlipCard from "./FlipCard";
import { getData } from "@/firebase/firebase";
import { useQuery } from "@tanstack/react-query";
import { IoLinkOutline, IoLogoGithub } from "react-icons/io5";

interface Project {
  type: string;
  name: string;
  function: string;
  content: string;
  stack: string;
  overview: string;
  probsolv: string;
  link: {
    title: string;
    text: string;
    href: string[];
  }[];
}

const Project = () => {
  const { data, isLoading, isError } = useQuery<Project[]>({
    queryKey: ["project"],
    queryFn: () => getData<Project>("project"),
  });

  return (
    <ProjectLayout>
      {data?.map(data => (
        <DataWrapper>
          <TitleContainer>
            <FlipCard />
            <ExplainContent>
              <TitleBox>
                <p>{data.name}</p>
                <p>{data.type} Project</p>
              </TitleBox>
              <hr />
              <TitleText>{data.overview}</TitleText>
              {data.link.map(link => (
                <SubTitleBox>
                  <FlexDivBox>
                    {link.title === "배포 링크" ? (
                      <IoLinkOutline />
                    ) : (
                      <IoLogoGithub />
                    )}
                    <p>{link.title}</p>
                  </FlexDivBox>
                  {link.href.map(href => (
                    <a href={href}>{href}</a>
                  ))}
                  {link.text && <LinkText>{link.text}</LinkText>}
                </SubTitleBox>
              ))}
            </ExplainContent>
          </TitleContainer>
          <ContentContainer>
            <ContentBox>
              <ContentTitle>프로젝트 소개</ContentTitle>
              <ContentText>{data.content}</ContentText>
              <SubContentBox>
                <div>
                  <SubContentTitle>Stack</SubContentTitle>
                  <p>{data.stack}</p>
                </div>
                <div>
                  <SubContentTitle>구현 기능</SubContentTitle>
                  <p>{data.function}</p>
                </div>
              </SubContentBox>
            </ContentBox>
            <ContentBox>
              <ContentTitle>문제점&해결과정</ContentTitle>
              <ContentText>{data.probsolv}</ContentText>
            </ContentBox>
          </ContentContainer>
        </DataWrapper>
      ))}
    </ProjectLayout>
  );
};

export default Project;

const ProjectLayout = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "SUIT-Regular";
`;

const DataWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: calc(100vh - 120px);
`;

const TitleContainer = styled.div`
  display: grid;
  justify-items: center;
  margin: 0 5rem;
  align-items: center;
  align-content: center;
`;

const ExplainContent = styled.div`
  width: 366px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 1rem;
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
  width: 335px;
  font-size: 1.1rem;
  line-height: 1.3;
  margin: 1rem 0 0;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 3rem 6rem 3rem 0;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
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
  flex-direction: column;
  margin: 1rem 0;

  > div:first-child {
    margin-bottom: 1rem;
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

const LinkText = styled.p`
  font-size: 0.8rem;
  margin-top: 0.3rem;
`;
