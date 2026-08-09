"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import Container from "../componnt/Contaner";


export default function Footer() {
  const pathname = usePathname();
  const local = useLocale();
  const smoothTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNav = (to: string): void => {
    if (pathname === to) {
      smoothTop();
    }
  };

  return (
    <section>
      <Container className="lg:pb-20 md:pb-15 pb-10">
        <div className="flex flex-col items-center">
          <Link
            href="/"
            className="flex items-center sm:space-x-8.75 space-x-5 3xl:mb-10! mb-5"
            onClick={() => handleNav("/")}
          >
            <img
              src="/imge/footer/logo.svg"
              alt="Exclusive Movies LTD"
              className="3xl:w-40! md:w-24 sm:w-17 w-12 3xl:h-40! md:h-22.5 sm:h-17 h-12"
            />
            <h2 className="text-primary font-medium 3xl:text-7xl! lg:text-3xl md:text-[26px] sm:text-2xl min-[425px]:text-lg text-base 3xl:leading-14! lg:leading-7 md:leading-6 sm:leading-5 leading-4">
              Exclusive Movies LTD
            </h2>
          </Link>
          <p className="text-basic-white font-medium 3xl:text-2xl! sm:text-base min-[425px]:text-sm text-xs leading-5 mb-2.5 text-center">
            {local === "en"
              ? " A Leading Digital Media, Streaming & AI-Powered Technology Company"
              : "شركة رائدة في مجال الإعلام الرقمي، البث، وتقنيات الذكاء الاصطناعي"}
          </p>
          <p
            className={`text-basic-white ${local === "en" ? "font-inter" : "font-cairo"} font-light italic 3xl:text-2xl! sm:text-base min-[425px]:text-sm text-xs leading-5 tracking-[-0.25px] text-center`}
          >
            {local === "en"
              ? "“Streaming the Future with Intelligence and Security.”"
              : "“بث المستقبل بذكاء وأمان.”"}
          </p>
          <div className="flex justify-center items-center md:w-175 sm:w-137.5 min-[425px]:w-87.5 w-65 h-[3.5px] mt-5 mb-5">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute left-0 w-full top-px h-[1.5px] z-1 bg-fourth-h" />
              <div className="absolute left-0 w-full top-px h-[1.5px] z-2 bg-fourth-h" />
              <div className="relative z-3 w-4.75 min-h-[15.5px] max-h-[15.5px] bg-fourth blur-[9.5px]" />
            </div>
          </div>
          <h3 className="text-primary font-medium 3xl:text-4xl! lg:text-[22px] sm:text-lg text-base mb-3.75">
            Contact & Social
          </h3>
          <div className="flex items-center space-x-1.25 mb-3.75">
            <img
              className="3xl:size-12! size-6"
              src="/imge/footer/mail.svg"
              alt="info@exclusivemoviess.com"
            />
            <a href="mailto:info@exclusivemoviess.com">
              <p className="text-primary font-inter 3xl:text-3xl! sm:text-base text-sm tracking-[-0.25px]">
                info@exclusivemoviess.com
              </p>
            </a>
          </div>
          <div className="flex items-center space-x-1.25 mb-3.75">
            <img
              className="3xl:size-12! size-6"
              src="/imge/footer/phone.svg"
              alt="+447836310462"
            />
            <a href="tel:+447836310462">
              <p className="text-primary font-inter 3xl:text-3xl! sm:text-base text-sm tracking-[-0.25px]">
                +447836310462
              </p>
            </a>
          </div>
          <div className="flex flex-row items-center space-x-2.5 mb-5">
            {[
              {
                icon: "/imge/footer/social/facebook.svg",
                link: "https://www.facebook.com/ExclusiveMoviesOfficial",
                alt: "Facebook",
              },
              {
                icon: "/imge/footer/social/instagram.svg",
                link: "https://www.instagram.com/exclusivemoviesofficial",
                alt: "Instagram",
              },
              {
                icon: "/imge/footer/social/x.svg",
                link: "https://x.com/ExclusiveMovies",
                alt: "X",
              },
              {
                icon: "/imge/footer/social/tiktok.svg",
                link: "https://www.tiktok.com/@exclusivemoviesofficial",
                alt: "TikTok",
              },
              {
                icon: "/imge/footer/social/youtube.svg",
                link: "https://youtube.com/@exclusivemoviesofficial",
                alt: "Youtube",
              },
              {
                icon: "/imge/footer/social/linkedin.svg",
                link: "https://www.linkedin.com/company/exclusivemovies/",
                alt: "LinkedIn",
              },
            ].map(({ icon, link, alt }) => (
              <a
                key={alt}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="3xl:size-10! size-6"
                  src={icon}
                  alt={alt}
                  loading="lazy"
                />
              </a>
            ))}
          </div>
          <p className="text-basic-white font-medium 3xl:text-3xl! sm:text-base min-[425px]:text-sm text-xs leading-5 3xl:mb-5! mb-2.5 text-center">
            {local === "en"
              ? "© 2026 Exclusive Movies LTD. All Rights Reserved"
              : "© 2026 شركة Exclusive Movies LTD. جميع الحقوق محفوظة"}
          </p>
          <div className="flex items-center justify-center gap-2.5 sm:flex-nowrap flex-wrap">
            {[
              {
                titleEn: "Home",
                titleAr: "الرئيسية",
                link: "/",
              },
              {
                titleEn: "About Us",
                titleAr: "لوحة التحكم",
                link: "/about-us",
              },
              {
                titleEn: "Refund Policy",
                titleAr: "التحميل والمشاهدة",
                link: "/refund-policy",
              },
              {
                titleEn: "Terms of Service",
                titleAr: "القانون والسياسات",
                link: "/terms-of-service",
              },
              {
                titleEn: "Playlist Management",
                titleAr: "إدارة قائمة التشغيل",
                link: "/playlist-management",
              },
              {
                titleEn: "FAQ",
                titleAr: "الأسئلة الشائعة",
                link: "/faq",
              },
            ].map(({ titleEn, titleAr, link }, index, arr) => (
              <Fragment key={index}>
                <div
                  className={`${index === 4
                      ? "w-auto min-[425px]:w-full sm:w-auto justify-center"
                      : ""
                    } flex items-center space-x-2.5`}
                >
                  <Link
                    href={link}
                    onClick={() => handleNav(link)}
                    className={`${local === "en" ? "font-inter" : "font-cairo"} 3xl:text-2xl! min-[425px]:text-sm text-[13px] tracking-[-0.25px]
            ${pathname === link
                        ? "text-primary-animated font-bold"
                        : "text-primary font-normal"
                      }`}
                  >
                    {local === "ar" ? titleAr : titleEn}
                  </Link>

                  {index < arr.length - 1 && (
                    <div
                      className={`-separator h-6 opacity-70 ${index === 2
                          ? "max-[425px]:hidden"
                          : index === 3
                            ? "flex min-[425px]:hidden sm:flex"
                            : ""
                        }`}
                    />
                  )}
                </div>

                {index === 2 && (
                  <div className="min-[425px]:hidden w-full h-0" />
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
