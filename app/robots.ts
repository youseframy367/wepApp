import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    // قواعد لمحركات البحث
    rules: {
      // "*" يعني جميع محركات البحث (Google, Bing, Yahoo...)
      userAgent: "*",

      // السماح بفهرسة جميع صفحات الموقع
      allow: "/",

      // لو عايز تمنع صفحات معينة مستقبلاً استخدم:
      // disallow: ["/admin", "/dashboard"],
    },

    // مكان ملف خريطة الموقع (Sitemap)
    sitemap: "https://exclusivemovies.com/sitemap.xml",

    // الدومين الأساسي للموقع
    host: "https://exclusivemovies.com",
  };
}