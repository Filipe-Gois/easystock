import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com", // Para imagens do Azure Blob Storage
        pathname: "/**", // Permite qualquer caminho após o domínio
      },
    ],
  },
};

export default nextConfig;
// https://img.freepik.com/vetores-premium/pictograma-de-uma-pessoa_764382-14126.jpg?w=826
