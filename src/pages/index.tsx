import styled from "styled-components";
import SideBar from "@/components/layout/SideBar";
import NavBar from "@/components/layout/NavBar";
import Skill from "@/components/skill";
import Billim from "@/components/project1";
import Survey from "@/components/project2";
import Portfolio from "@/components/project3";

export const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1fr;
`;

export default function Home() {
  return (
    <>
      <NavBar />
      <ContentLayout>
        <SideBar />
        <div>
          <Skill />
          <Billim />
          <Survey />
          <Portfolio />
        </div>
      </ContentLayout>
    </>
  );
}
