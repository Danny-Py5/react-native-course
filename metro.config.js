const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./globals.css" });
// This configuration file sets up Metro bundler for an Expo project using NativeWind.
