import { ExpoConfig, ConfigContext } from 'expo/config';
import 'dotenv/config';

// Log environment variables for debugging
console.log('Environment Variables:', {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
});

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Ivent',
  slug: 'ivent-new',
  version: '1.0.0',
  orientation: 'portrait',
  userInterfaceStyle: 'light',
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true
  },
  android: {
    adaptiveIcon: {
      backgroundColor: '#ffffff'
    }
  },
  web: {
    favicon: './assets/favicon.png'
  },
  scheme: 'ivent',
  plugins: ['expo-router'],
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true
  },
  newArchEnabled: true,
  extra: {
    firebaseApiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
    firebaseAuthDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
    firebaseProjectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
    firebaseStorageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
    firebaseMessagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    firebaseAppId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
  },
}); 