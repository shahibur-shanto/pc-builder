/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.trustedreviews.com",
      "upload.wikimedia.org",
      "media.istockphoto.com",
      "encrypted-tbn0.gstatic.com",
      "www.google.com",
    ],
  },
};

module.exports = nextConfig;
