import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Blog from "@/components/views/Blog";
import About from "@/components/views/About";
import Layout from "@/components/layout/Layout";
import Project from "@/components/views/project/Project";
import AlertModal from "@/components/views/AlertModal";
import DetailProject from "@/components/views/project/DetailProject";
import { getData } from "@/util/firebase/firebase";
import { fetchRssFeed } from "@/util/fetchRssFeed";
import { useRecoilState } from "recoil";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { clickProjectState, selectBlogState } from "@/recoil/atom";

const Home: NextPage = () => {
  const [selectBlog] = useRecoilState(selectBlogState);
  const [clickProject] = useRecoilState(clickProjectState);

  return (
    <>
      <Head>
        <title>JIHYEON PORTFOLIO</title>
      </Head>
      <AlertModal />
      <Layout>
        {selectBlog ? (
          <Blog />
        ) : clickProject ? (
          <DetailProject />
        ) : (
          <>
            <About />
            <Project />
          </>
        )}
      </Layout>
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
