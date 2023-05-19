import type { Config } from './get-config.types';

const getConfig = () => {
  const config: Config = {
    DEV: {
      DATABASE_URL: process.env.DEV_DATABASE_URL,
      PORT: process.env.DEV_PORT,
      APP_JWT_SECRET: process.env.DEV_APP_JWT_SECRET,
    },
    STG: {
      DATABASE_URL: process.env.STG_DATABASE_URL,
      PORT: process.env.STG_PORT,
      APP_JWT_SECRET: process.env.STG_APP_JWT_SECRET,
    },
    LIVE: {
      DATABASE_URL: process.env.LIVE_DATABASE_URL,
      PORT: process.env.LIVE_PORT,
      APP_JWT_SECRET: process.env.LIVE_APP_JWT_SECRET,
    },
  };
  return config[process.env.ENV!];
};
export default getConfig;
