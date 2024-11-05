/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash : true,
  images: {
    localPatterns: [
      {
        pathname: '/images/**',
        search: '',
      },
    ],
  },
  output: "export",
};

export default nextConfig;
