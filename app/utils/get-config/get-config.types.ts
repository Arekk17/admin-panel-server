export type Config = {
  [key: string]: {
    DATABASE_URL: string | undefined;
    PORT: string | undefined;
    APP_JWT_SECRET: string | undefined;
  };
};
