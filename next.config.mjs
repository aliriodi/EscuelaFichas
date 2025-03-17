/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.atptour.com", "www.clarin.com",
              "a3.espncdn.com", "www.argentina.gob.ar",
              "res.cloudinary.com", "via.placeholder.com",
              "www.google.com", "plus.unsplash.com"]
  },
};

export default nextConfig;
