import Parser from "rss-parser";
import Swal from "sweetalert2";

type PostItems = {
  title: string;
  guid: string;
  date: string;
};

export const fetchRssFeed = async () => {
  const parser = new Parser();

  try {
    const feed = await parser.parseURL("/rss/jh0neee");

    const blogPost: PostItems[] = feed.items
      .map(item => ({
        title: item.title || "",
        guid: item.guid || "",
        date: item.pubDate || "",
      }))
      .slice(0, 8);

    return blogPost;
  } catch (err) {
    Swal.fire({
      text: "post를 가져오지 못했습니다.",
      icon: "error",
    });

    throw new Error("Failed to fetch RSS feed");
  }
};
