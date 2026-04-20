const projectId = process.env.PANIT_PROJECT_ID;

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: projectId
    ? [`${projectId}.preview.panit.dev`, `${projectId}.preview.panit.local`]
    : [],
};

export default nextConfig
