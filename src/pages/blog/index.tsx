import { NextPage } from "next";
import styled from "styled-components";
import Parser from "rss-parser";
import NavBar from "@/components/layout/NavBar";
import SideBar from "@/components/layout/SideBar";
import { ContentLayout } from "./../index";

interface BlogPost {
  title: string;
  guid: string;
  date: string;
}

const Blog: NextPage<{ blogPosts: BlogPost[] }> = ({ blogPosts }) => {
  const dateFormat = (date: string) => {
    const day = new Date(date);

    const fomattedDate = `${day.getFullYear()}-${(day.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${day.getDate().toString().padStart(2, "0")}`;
    return fomattedDate;
  };

  const splitTitle = (title: string, cnt: number) => {
    const splittedArray = title.split("]")[cnt];

    if (cnt === 0) {
      return splittedArray + "]";
    } else if (cnt === 1) {
      return splittedArray;
    }
  };

  return (
    <>
      <NavBar />
      <ContentLayout>
        <SideBar />
        <Content>
          <MemoList>
            {blogPosts.map((post, idx) => (
              <MemoItem key={idx}>
                <MemoLink href={post.guid}>
                  <h2>{splitTitle(post.title, 0)}</h2>
                  <h3>{splitTitle(post.title, 1)}</h3>
                  <p>{dateFormat(post.date)}</p>
                </MemoLink>
              </MemoItem>
            ))}
          </MemoList>
        </Content>
      </ContentLayout>
    </>
  );
};

export async function getServerSideProps() {
  try {
    const paser = new Parser();
    const feed = await paser.parseURL("https://rss.blog.naver.com/jh0neee.xml");

    const blogPosts = feed.items
      .map(item => ({
        title: item.title || "",
        guid: item.guid || "",
        date: item.pubDate || "",
      }))
      .slice(0, 8);

    return {
      props: { blogPosts },
    };
  } catch (error) {
    alert("post를 가져오지 못했습니다.");

    return {
      props: { blogPosts: [] },
    };
  }
}

export default Blog;

const Content = styled.div`
  width: 86%;
  display: flex;
  margin-top: 120px;
  align-items: center;
  padding: 1.5rem 2rem 0;
  font-size: 1rem;
  background-image: url("/image/granite-texture.jpg");
  background-size: cover;
  color: #fff;
`;

const MemoList = styled.ul`
  list-style: none;
  overflow: hidden;
  padding: 1rem 3rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2.5rem;
  justify-items: center;

  li:nth-child(even) a {
    transform: rotate(4deg);
    position: relative;
    top: 5px;
    background: #ccf;
  }

  li:nth-child(3n) a {
    transform: rotate(-3deg);
    position: relative;
    top: -5px;
    background: #cfc;
    margin-left: 20px;
  }

  li:nth-child(3n-1) a {
    transform: rotate(5deg);
    position: relative;
    top: -10px;
    background: #fcc;
    margin-right: 30px;
  }

  li a:hover,
  li a:focus {
    box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.2);
    transform: scale(1.25);
    position: relative;
    z-index: 5;
  }

  li a:hover h3 {
    text-decoration: underline;
    text-underline-position: under;
    font-weight: bold;
  }

  li:nth-child(8) a {
    margin-right: 0;
  }

  @media (max-width: 1600px) {
    grid-row-gap: 2.5rem;
    grid-column-gap: 0;
  }
`;

const MemoItem = styled.li`
  list-style: none;
  margin: 1rem;
  float: left;
`;

const MemoLink = styled.a`
  text-decoration: none;
  color: #000;
  background: #ffc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  width: 200px;
  padding: 1rem;
  margin-top: 20px;
  box-shadow: 2px 11px 5px rgba(33, 33, 33, 0.5);
  transition: transform 0.15s linear;
  transform: rotate(-6deg);
  line-height: 1.5;
  text-align: center;

  > * {
    font-size: 1.2rem;
    font-weight: normal;

    &:first-child {
      font-size: 140%;
      font-weight: bold;
      padding-bottom: 10px;
      text-align: center;
    }

    &:last-child {
      align-self: flex-end;
    }
  }
`;
