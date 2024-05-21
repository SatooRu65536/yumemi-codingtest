/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    additionalData: `
      @import "@/styles/variables.scss";
      @import "@/styles/responsive.scss";
    `,
  },
};

export default nextConfig;
