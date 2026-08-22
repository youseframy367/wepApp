import { getRequestConfig } from "next-intl/server";



export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) || "en";

  const messages = (await import(`../messages/${locale}/index.js`)).default;

  return {
    locale,
    messages,
    onError: (error) => {
      if (error.code === "MISSING_MESSAGE") {
        void 
      }
    },
  };
});