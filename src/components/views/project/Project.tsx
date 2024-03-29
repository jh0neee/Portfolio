import styled from "styled-components";
// import Swal from "sweetalert2";
import ImageFile from "@/components/common/ImageFile";
import { getData } from "@/util/firebase/firebase";
import { useQuery } from "@tanstack/react-query";
import { IoLogoGithub } from "react-icons/io5";

interface Project {
  type: string;
  name: string;
  function: string[];
  content: string;
  stack: string[];
  probsolv: string;
  overview: string;
  image: string;
  link: string;
  repo: string[];
  detail: string;
}

const Project = () => {
  const { data } = useQuery<Project[]>({
    queryKey: ["project"],
    queryFn: () => getData<Project>("project"),
  });

  // if (isError || !data) {
  //   Swal.fire({
  //     text: "데이터를 가져오는데 문제가 발생했습니다.",
  //     icon: "error",
  //   });
  // }

  return (
    <ProjectLayout>
      {data?.map(data => (
        <DataWrapper id={data.name} key={data.name}>
          <TitleContainer>
            <ImageFile imagePath={data.image} altText="front 이미지" />
            <ExplainContent>
              <TitleBox>
                <p>{data.name}</p>
                <a href={data.link}>{data.link}</a>
              </TitleBox>
              <hr />
              <TitleText>{data.overview}</TitleText>
              <SubTitleBox>
                <FlexDivBox>
                  <IoLogoGithub />
                  <p>Repository</p>
                </FlexDivBox>
                {data.repo.map(href => (
                  <a key={`${data.name}-link-${href}`} href={href}>
                    {href}
                  </a>
                ))}
              </SubTitleBox>
            </ExplainContent>
          </TitleContainer>
          <ContentContainer>
            <ContentBox className="introBox">
              <ContentTitle>프로젝트 소개</ContentTitle>
              <ContentText>{data.content}</ContentText>
              <SubContentBox>
                <div>
                  <SubContentTitle>Stack used</SubContentTitle>
                  <StackText $stackLength={0}>
                    {data.stack.map(el => (
                      <div key={el}>{el}</div>
                    ))}
                  </StackText>
                </div>
              </SubContentBox>
            </ContentBox>
            <ContentBox>
              <ContentTitle>문제점&해결과정</ContentTitle>
              <ContentText>{data.probsolv}</ContentText>
              <SubContentBox>
                <div>
                  <SubContentTitle>구현 기능</SubContentTitle>
                  <StackText $stackLength={data.function.length}>
                    {data.function.map((func, idx) => (
                      <div key={idx}>{func}</div>
                    ))}
                    <a href={data.detail}>
                      <strong>프로젝트 상세보기 &gt;</strong>
                    </a>
                  </StackText>
                </div>
              </SubContentBox>
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
  height: calc(100vh - 84px);
  padding-top: 84px;

  @media (min-width: 1540px) {
    flex-direction: column;
  }
`;

const TitleContainer = styled.div`
  display: grid;
  justify-items: center;
  margin: 0 5rem;
  align-items: center;
  align-content: center;

  > img {
    width: 450px;
    height: 250px;
    border: 1px solid lightgrey;
  }

  @media (min-width: 1540px) {
    display: flex;
    justify-content: space-evenly;
    margin: 3rem 5rem 0;
  }
`;

const ExplainContent = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 1rem;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.5rem;
  text-align: center;

  > p:first-child {
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 5px;
  }

  > a:last-child {
    margin-left: 1.3rem;
    color: #549895;
    text-decoration: underline;
    text-decoration-color: #549895;
  }
`;

const TitleText = styled.p`
  width: 370px;
  font-size: 1.1rem;
  line-height: 1.3;
  margin: 1rem 0 0;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 3rem 6rem 3rem 0;

  @media (min-width: 1540px) {
    flex-direction: row;
    justify-content: center;
    margin: 3rem 0 0;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1540px) {
    width: 30%;

    &.introBox {
      margin-right: 5rem;
    }
  }
`;

const ContentTitle = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const ContentText = styled.p`
  line-height: 1.5;
  font-size: 1.1rem;
`;

const SubContentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  > div:first-child {
    margin-bottom: 1rem;
  }

  @media (min-width: 1540px) {
    flex-direction: row;

    > div:first-child {
      width: 100%;
    }
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

const StackText = styled.div<{ $stackLength: number }>`
  display: flex;
  flex-wrap: wrap;
  > div {
    background: rgba(149, 196, 180, 0.3);
    width: fit-content;
    padding: 5px 8px;
    border-radius: 10px;
    margin: 0 5px 5px 0;
  }

  > a {
    font-size: 1.1rem;
    text-decoration: none;
    margin-left: auto;
    align-self: center;
    margin-top: ${props => (props.$stackLength > 3 ? "1rem" : 0)};
    margin-bottom: ${props => (props.$stackLength > 3 ? 0 : "7px")};

    &:hover {
      color: #549895;
      text-decoration: underline;
      text-underline-position: under;
    }
  }
`;
