require('dotenv').config();

module.exports = {
  name: 'Village-Sports',
  slug: 'Village-Sports',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: [
    '**/*',
  ],
  ios: {
    supportsTablet: true,
    config: {
      googleMapsApiKey: process.env.GOOGLE_MAP_KEY,
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    config: {
      googleMapsApiKey: process.env.GOOGLE_MAP_KEY,
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },
  plugins: [
    [
      'expo-location',
      {
        locationAlwaysAndWhenInUsePermission: 'Allow $(PRODUCT_NAME) to use your location.',
      },
    ],
  ],
  extra: {
    googleKey: process.env.GOOGLE_MAP_KEY,
    firebaseKey: process.env.FIREBASE_KEY,
  },
};
