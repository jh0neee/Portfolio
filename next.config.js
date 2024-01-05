/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  compiler: {
    styledComponents: true,
  },

  async rewrites() {
    return [
      {
        source: "/rss/jh0neee",
        destination: "https://rss.blog.naver.com/jh0neee.xml",
      },
    ];
  },
};

module.exports = {
  ...nextConfig,
};
