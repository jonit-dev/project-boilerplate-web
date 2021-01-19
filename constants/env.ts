export const appEnv = {
  general: {
    env: process.env.NEXT_PUBLIC_ENV,
    adminEmail: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
    name: process.env.NEXT_PUBLIC_APP_NAME,
    language: process.env.NEXT_PUBLIC_APP_LANGUAGE,
    apiUrl: process.env.NEXT_PUBLIC_API_URL,
    appUrl: process.env.NEXT_PUBLIC_APP_URL,
  },
  form: {
    phoneMask: process.env.NEXT_PUBLIC_APP_PHONE_MASK,
  },
};
