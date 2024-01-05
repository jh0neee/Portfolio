import { GetStaticProps, NextPage } from "next";
import styled from "styled-components";
import Blog from "@/components/views/Blog";
import NavBar from "@/components/layout/NavBar";
import SideBar from "@/components/layout/SideBar";
import Project from "@/components/views/project/Project";
import { getData } from "@/util/firebase/firebase";
import { fetchRssFeed } from "@/util/fetchRssFeed";
import { useRecoilState } from "recoil";
import { selectMenuState } from "@/recoil/atom";
import { QueryClient, dehydrate } from "@tanstack/react-query";

const Home: NextPage = () => {
  const [selectMenu] = useRecoilState(selectMenuState);
  return (
    <>
      <NavBar />
      <ContentLayout>
        <SideBar />
        <Content>{selectMenu ? <Blog /> : <Project />}</Content>
      </ContentLayout>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["project"],
      queryFn: () => getData("project"),
    }),
    queryClient.prefetchQuery({
      queryKey: ["post"],
      queryFn: async () => {
        const data = fetchRssFeed();
        return data;
      },
    }),
  ]);

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
  overflow: auto;
  position: relative;
  left: 13.9%;
`;
