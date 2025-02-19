import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    env: {
        LOGTAIL_TOKEN: process.env.LOGTAIL_TOKEN,
    },
};

export default nextConfig;
