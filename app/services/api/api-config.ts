import * as env from "app/environment-variables";

/**
 * The options used to configure the API.
 */
export interface ApiConfig {
  /**
   * The URL of the api.
   */
  url: string;

  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number;

  /**
   * Key used for the api
   */
  apiKey: string;
}

/**
 * The default configuration for the app.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: env.API,
  timeout: 10000,
  apiKey: env.NEWS_API_KEY
};
