import { GetStaticProps, NextPage } from "next";
import styled from "styled-components";
import SideBar from "@/components/layout/SideBar";
import NavBar from "@/components/layout/NavBar";
import Project from "@/components/views/project/project";
import { getData } from "@/firebase/firebase";
import { QueryClient, dehydrate } from "@tanstack/react-query";

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

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["project"],
    queryFn: () => getData("project"),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const ContentLayout = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  width: 86%;
  overflow-x: hidden;
  overflow-y: auto;
`;
