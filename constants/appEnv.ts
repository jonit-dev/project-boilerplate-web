export const appEnv = {
  general: {
    env: process.env.NEXT_PUBLIC_ENV,
    adminEmail: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
    corporation: process.env.NEXT_PUBLIC_APP_CORPORATION,
    name: process.env.NEXT_PUBLIC_APP_NAME,
    description: process.env.NEXT_PUBLIC_DESCRIPTION,
    language: process.env.NEXT_PUBLIC_APP_LANGUAGE,
    serverCountry: process.env.NEXT_PUBLIC_APP_SERVER_COUNTRY,
    apiUrl: process.env.NEXT_PUBLIC_API_URL,
    appUrl: process.env.NEXT_PUBLIC_APP_URL,
    address: process.env.NEXT_PUBLIC_APP_ADDRESS,
    zipCode: process.env.NEXT_PUBLIC_APP_ZIPCODE,
    country: process.env.NEXT_PUBLIC_APP_COUNTRY,
    province: process.env.NEXT_PUBLIC_APP_PROVINCE,
  },
  form: {
    phoneMask: process.env.NEXT_PUBLIC_APP_PHONE_MASK,
  },
  social: {
    facebookUrl: process.env.NEXT_PUBLIC_APP_SOCIAL_FACEBOOK_URL,
    twitterUrl: process.env.NEXT_PUBLIC_APP_SOCIAL_TWITTER_URL,
    instagramUrl: process.env.NEXT_PUBLIC_APP_SOCIAL_INSTAGRAM_URL,
  },
};
