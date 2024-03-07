/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    cacheHandler: require.resolve('./cache-handler.js'),
  cacheMaxMemorySize: 0, 
};




export default nextConfig;
// next.config.js
