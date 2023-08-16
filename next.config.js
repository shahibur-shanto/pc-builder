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
      "cdn-icons-png.flaticon.com",
      "static.vecteezy.com",
    ],
  },
};

module.exports = nextConfig;
