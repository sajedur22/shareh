/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "example.com", // আগের host
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "picsum.photos", // new host
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
