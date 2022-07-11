/** @type {import('next').NextConfig} */
const path = require('path');
const graphql = require('next-plugin-graphql');
const withPlugins = require('next-compose-plugins');
 
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  images: {
    domains: ['localhost'],
  },
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
  webpack: (config, options) => {
    config.resolve.alias['@components'] = path.resolve(__dirname,'./components');
    config.resolve.alias['@graphql'] = path.resolve(__dirname,'./graphql-documents');
    config.resolve.alias['@client'] = path.resolve(__dirname,'./client');
    config.resolve.alias['@styles'] = path.resolve(__dirname,'./styles');
    
    config.resolve = {
      ...config.resolve,
      fallback: {
        "fs": false,
        "path": false,
        "os": false,
      }
    }
 
    return config;
  },
  
};
 
module.exports = withPlugins([
  // add plugins here..
  graphql
], nextConfig),
{
  images: {
    domains: ['localhost:5000'],
  },
  
  
}

