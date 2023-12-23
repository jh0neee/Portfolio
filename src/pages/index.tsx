import { NextPage } from "next";
import styled from "styled-components";
import SideBar from "@/components/layout/SideBar";
import NavBar from "@/components/layout/NavBar";
import Skill from "@/components/skill";
import Billim from "@/components/project1";
import Survey from "@/components/project2";
import Portfolio from "@/components/project3";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <ContentLayout>
        <SideBar />
        <Content>
          <Skill />
          <Billim />
          <Survey />
          <Portfolio />
        </Content>
      </ContentLayout>
    </>
  );
};

export default Home;

export const ContentLayout = styled.div`
  height: calc(100% - 120px);
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  width: 86%;
`;
