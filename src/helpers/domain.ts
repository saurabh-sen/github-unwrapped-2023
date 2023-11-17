import { config } from "dotenv";
import { z } from "zod";
import { REDIRECT_URL_ENDPOINT } from "./redirect-url.js";

export const backendCredentials = () => {
  config();

  return z
    .object({
      VITE_CLIENT_ID: z.string(),
      VITE_HOST: z.string(),
      CLIENT_SECRET: z.string(),
      NODE_ENV: z.enum(["development", "production"]),
    })
    .parse(process.env);
};

export const makeRedirectUriBackend = () => {
  return `${backendCredentials().VITE_HOST}${REDIRECT_URL_ENDPOINT}`;
};
