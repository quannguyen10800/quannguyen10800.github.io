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


// const isProd = process.env.NODE_ENV === 'production';

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['avatars.githubusercontent.com'],
//     unoptimized: true, // Disable image optimization for static export
//   },
//   assetPrefix: isProd ? '/quannguyen10800.github.io/' : '',
//   basePath: isProd ? '/quannguyen10800.github.io' : '',
//   trailingSlash: true, // Ensure that pages end with a slash (GitHub Pages requirement)
// };

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['avatars.githubusercontent.com'], 
//     unoptimized: true,// Add the hostname here
//   },
//   output: 'export' // Add this line for static export
// };

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   images: {
//     unoptimized: true,
//     domains: ['res.cloudinary.com', 'avatars.githubusercontent.com', 'imgur.com'],
//   },
  
// };

// export default nextConfig;


// next.config.js (CommonJS)
// module.exports = {
//   reactStrictMode: true,
//   images: {
//     unoptimized: true,
//     domains: ['avatars.githubusercontent.com', 'res.cloudinary.com', 'imgur.com'],
//   },
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  images: {
         unoptimized: true,
         domains: ['avatars.githubusercontent.com', 'res.cloudinary.com', 'imgur.com'],
       },
};

module.exports = nextConfig;


