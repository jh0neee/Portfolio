import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <ContentLayout>
        <SideBar />
        <Content>{children}</Content>
      </ContentLayout>
    </>
  );
};

const ContentLayout = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  width: 86%;
  overflow: auto;
  position: relative;
  left: 13.9%;
`;

export default Layout;
