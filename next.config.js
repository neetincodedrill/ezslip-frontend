/** @type {import('next').NextConfig} */
const path = require('path');
const graphql = require('next-plugin-graphql');
const withPlugins = require('next-compose-plugins');
 
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  images: {
    domains: ['localhost']
  },
  webpack: (config, options) => {
    config.resolve.alias['@components'] = path.resolve(__dirname,'./components');
    config.resolve.alias['@graphql'] = path.resolve(__dirname,'./graphql-documents');
    config.resolve.alias['@client'] = path.resolve(__dirname,'./client');
    config.resolve.alias['@style'] = path.resolve(__dirname,'./style');
 
    return config;
  },
};
 
module.exports = withPlugins([
  // add plugins here..
  graphql
], nextConfig);

