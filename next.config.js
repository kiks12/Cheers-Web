module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  webpack(config, { dev }) {
    if (dev) {
      config.devtool = "cheap-module-source-map";
    }
    return config;
  },
};
