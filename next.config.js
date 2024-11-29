/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Add a rule to handle .map files
    config.module.rules.push({
      test: /\.map$/,
      loader: 'ignore-loader'
    });

    // Add a rule to handle .d.ts files
    config.module.rules.push({
      test: /\.d\.ts$/,
      loader: 'ignore-loader'
    });

    return config;
  },
}

module.exports = nextConfig
