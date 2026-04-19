import type { NextConfig } from "next";

const projectId = process.env.PANIT_PROJECT_ID;

const nextConfig: NextConfig = {
  allowedDevOrigins: projectId
    ? [`${projectId}.preview.panit.dev`, `${projectId}.preview.panit.local`]
    : [],
};

export default nextConfig;
