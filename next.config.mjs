/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "demo.ghost.io",
          port: "",
          pathname: "/**", // Allows all paths
        },
      ],
    },
  };
  
  export default nextConfig;
  