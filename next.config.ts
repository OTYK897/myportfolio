import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['motion'],
  output: 'export', // 静的サイトとして出力
  basePath: '/myportfolio', // リポジトリ名を指定
  assetPrefix: '/myportfolio',
};
module.exports = nextConfig;

export default nextConfig;
