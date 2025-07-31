import type { NextConfig } from "next";
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['motion'],
    output: 'export', // 静的サイトとしてエクスポート
    assetPrefix: isGithubPages ? '/myportfolio' : '',
    basePath: isGithubPages ? '/myportfolio' : '',
    trailingSlash: true,
};
module.exports = nextConfig;

export default nextConfig;
