const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Add the parent directory to the watch folders
config.watchFolders = [path.resolve(__dirname, '..')];

// Configure module resolution
config.resolver.alias = {
    '@mykelcodes/flexkit': path.resolve(__dirname, '../dist'),
};

// Ensure node_modules from parent directory are included
config.resolver.nodeModulesPaths = [
    path.resolve(__dirname, 'node_modules'),
    path.resolve(__dirname, '..', 'node_modules'),
];

module.exports = config;
