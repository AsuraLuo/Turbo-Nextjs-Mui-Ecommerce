declare namespace NodeJS {
  export interface ProcessEnv {
    BASE_URL: string
    PWA_URL: string
    REACT_APP_BUNDLE_VISUALIZE: boolean
    REACT_APP_HOST_URL: string
    REACT_APP_API_URL: string
    REACT_APP_PWA_URL: string
    REACT_APP_DEPLOY_PLATFORM: string
    NEXT_PUBLIC_SENTRY_ENABLE: string
    NEXT_PUBLIC_SENTRY_SERVER_URL: string
    NEXT_PUBLIC_SENTRY_AUTH_TOKEN: string
    NEXT_PUBLIC_SENTRY_ORG_NAME: string
    NEXT_PUBLIC_SENTRY_PROJECT_NAME: string
    NEXT_PUBLIC_SENTRY_DSN: string
    NEXT_PUBLIC_SENTRY_ENVIRONMENT: string
    NEXT_PUBLIC_SENTRY_RELEASE: string
  }
}
