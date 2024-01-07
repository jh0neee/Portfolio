const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  compiler: {
    styledComponents: true,
  },

  images: {
    domains: ["firebasestorage.googleapis.com"],
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
