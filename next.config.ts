// next.config.js or next.config.ts

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing config here...

  // ADD THIS SECTION:
  turbopack: {
    root: './', // Tells Turbopack to treat the current directory as the project root
  },

};

export default nextConfig;