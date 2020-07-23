export const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;

export const MIN_NAME_LENGTH = 3;
export const MAX_NAME_LENGTH = 30;

export const DATE_FORMAT = 'MM-DD-YYYY';

export const CURRENT_RUN_ENVIRONMENT = process.env.NODE_ENV;

export enum RunEnvironment {
  TEST = 'test',
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}
