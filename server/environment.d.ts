declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_NAME: string;
      DB_HOST: string;
      DB_USER: string;
      DB_PASSWORD: string;
      DB_PORT: string;
      PORT: number;
    }
  }
}

export {};
