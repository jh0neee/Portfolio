import { NextPage } from "next";
import styled from "styled-components";
import SideBar from "@/components/layout/SideBar";
import NavBar from "@/components/layout/NavBar";
import Project from "@/components/views/project/project";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <ContentLayout>
        <SideBar />
        <Content>
          <Project />
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
