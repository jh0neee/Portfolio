import React from "react";
import styled from "styled-components";
import { IoSchoolOutline, IoLogoGithub } from "react-icons/io5";
import { introduce, front, back, devops, etc } from "../constant/data";

const About = () => {
  return (
    <IntroLayout id="ABOUT">
      <IntroWrapper>
        <IntroBox>
          <div>
            <Title>Introduce.</Title>
            <p>
              안녕하세요. <br />
              {introduce.map((intro, idx) => (
                <React.Fragment key={`intro-${idx}`}>
                  {intro} <br /> <br />
                </React.Fragment>
              ))}
            </p>
          </div>
          <div>
            <IntroItem>
              <div>
                <IoSchoolOutline />
                <ItemTitle>EDUCATION</ItemTitle>
              </div>
              <div>
                <p>인제대학교 컴퓨터공학부</p>
                <ItemText>
                  2022 ICT 온라인 코딩
                  <br />
                  <span>(인공지능 웹서비스 개발자 과정)</span>
                </ItemText>
              </div>
            </IntroItem>
            <IntroItem>
              <div>
                <IoLogoGithub />
                <ItemTitle>GITHUB</ItemTitle>
              </div>
              <a href="https://github.com/jh0neee">
                https://github.com/jh0neee
              </a>
            </IntroItem>
          </div>
        </IntroBox>
        <SkillBox>
          <Title>Skill.</Title>
          <div>
            {front.map(el => (
              <HashTag key={el} $highlightcolor="#FC006F">
                #{el}
              </HashTag>
            ))}
            {back.map(el => (
              <HashTag key={el} $highlightcolor="#1ddb16">
                #{el}
              </HashTag>
            ))}
            {devops.map(el => (
              <HashTag key={el} $highlightcolor="#D400C6">
                #{el}
              </HashTag>
            ))}
            {etc.map(el => (
              <HashTag key={el} $highlightcolor="#5f00ff">
                #{el}
              </HashTag>
            ))}
          </div>
        </SkillBox>
      </IntroWrapper>
    </IntroLayout>
  );
};

export default About;

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

const IntroBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 3rem;

  > div:first-child {
    width: 75%;
    align-self: center;

    > p:last-child {
      font-size: 1.3rem;
    }
  }
  > div:last-child {
    display: flex;
    justify-content: space-evenly;
  }
`;

const IntroItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 3rem 1rem 1rem;

  > div:first-child {
    display: flex;
    align-items: flex-end;
    padding-right: 10px;
    margin-right: 10px;
    flex-direction: column;
    border-right: solid;
    > svg {
      font-size: 25px;
    }
  }
`;

const ItemTitle = styled.p`
  font-size: 1.2rem;
`;

const ItemText = styled.p`
  margin-top: 4px;
  line-height: 14px;
  > span {
    font-size: 0.8rem;
  }
`;

const Title = styled.p`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const SkillBox = styled.div`
  width: 75%;
  margin-top: 3rem;

  > div {
    display: flex;
    flex-wrap: wrap;
  }
`;

const HashTag = styled.p<{ $highlightcolor: string }>`
  position: relative;
  width: fit-content;
  padding: 0.1rem 0.5rem;
  margin: 0.3rem 0.5rem;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 1.2rem;
  color: white;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 110%;
    background: ${props =>
      `linear-gradient(to top, ${props.$highlightcolor} 100%, transparent 50%)`};
    transform: skew(-20deg);
    z-index: -1;
  }
`;
