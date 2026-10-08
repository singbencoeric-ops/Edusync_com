import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'edusync.app',
  appName: 'EduSync',
  webDir: 'public',
  server: {
    url: "http://localhost:3000"
  }
};

export default config;