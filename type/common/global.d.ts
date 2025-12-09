export {};

declare global {

  namespace NodeJS {
    interface ProcessEnv {
      PORT: string,
      NODE_ENV?: "development" | "production" | "test" | undefined,
      WHITELIST_ORIGINS?: string,
      MONGO_URI?: string,
      LOG_LEVEL?: string,
      JWT_ACCESS_SECRET: string,
      JWT_REFRESH_SECRET: string,
    }
  };

}