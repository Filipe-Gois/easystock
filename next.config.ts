import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com", // Para imagens do Azure Blob Storage
        pathname: "/**", // Permite qualquer caminho após o domínio
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Para imagens do Azure Blob Storage
        pathname: "/**", // Permite qualquer caminho após o domínio
      },
      {
        protocol: "https",
        hostname: "rhyccxrzhykrkagjdpcy.supabase.co", // Para imagens do Azure Blob Storage
        pathname: "/**", // Permite qualquer caminho após o domínio
      },
    ],
  },
};

export default nextConfig;
// https://img.freepik.com/vetores-premium/pictograma-de-uma-pessoa_764382-14126.jpg?w=826
