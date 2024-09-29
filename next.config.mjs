// /** @type {import('next').NextConfig} */
// const nextConfig = {};



// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       domains: ['avatars.githubusercontent.com'], // Add the hostname here
//     },
//   };
  
//   export default nextConfig; // Use export default instead of module.exports


const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com'],
    unoptimized: true, // Disable image optimization for static export
  },
  assetPrefix: isProd ? '/quannguyen10800.github.io/' : '',
  basePath: isProd ? '/quannguyen10800.github.io' : '',
  trailingSlash: true, // Ensure that pages end with a slash (GitHub Pages requirement)
};

export default nextConfig;
