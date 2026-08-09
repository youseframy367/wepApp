"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import ContactIcon from "../componnt/ContactIcon";

interface HeaderItem { title: string; navigate: string; }

export default function Header() {
  const [open, setOpen] = useState(false);
  const [langImgError, setLangImgError] = useState(false);
  const [contactHovered, setContactHovered] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const currentPath = pathname.replace(/^\/(ar|en)/, "") || "/";

  const t = useTranslations("Header");

  const changeLanguage = (): void => {
    const newLocale = locale === "ar" ? "en" : "ar";

    const segments = pathname.split("/");
    segments[1] = newLocale;

    router.push(segments.join("/"));
  };

  const hidingOfHeader: HeaderItem[] = [
    { title: t("home"), navigate: "/" },
    { title: t("managePlaylist"), navigate: "/logInManageBlayList" },
    { title: t("legalPolicy"), navigate: "/Legal&Policy" },
    { title: t("downloadWatching"), navigate: "/DownloadAndWatching" },
    { title: t("dashboard"), navigate: "/Dashboard" },
    { title: t("faq") , navigate:"/FAQ" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full h-[106px] bg-black z-[999]">
      <div className="flex items-center justify-between px-4 md:px-[15px] h-full">
        {/* Logo */}
        <Image
          src="/imge/header/logoHeader.svg"
          alt="logo Header"
          width={202}
          height={61}
          priority
        />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex flex-row space-x-6 text-white">
          {hidingOfHeader.map((item, i) => (
            <li
              key={i}
              onClick={() => {
                currentPath === item.navigate;
                if (item.navigate) {
                  router.push(item.navigate);
                }
              }}
              className={`cursor-pointer font-[500] text-[18px] transition-all duration-300 ${
                currentPath === item.navigate
                  ? "text-primary-animated"
                  : "text-white hover:text-primary-animated"
              }`}
            >
              {item.title}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-[20px]">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@exclusivemoviess.com"
            target="_blank"
            rel="noreferrer"
            onClick={() => {
              setOpen(false);
            }}
            onMouseEnter={() => setContactHovered(true)}
            onMouseLeave={() => setContactHovered(false)}
            className="hidden min-[1000px]:block"
          >
            <div className="relative 3xl:w-62.5! 3xl:h-15! w-39 h-9.5 3xl:rounded-[40px] rounded-[20px] 3xl:p-0.5 p-px overflow-hidden">
              <div
                className={`contact-border-billboard transition-opacity duration-300 ${contactHovered ? "opacity-0" : "opacity-100"}`}
              />
              <div
                className={`absolute inset-0 bg-primary transition-opacity duration-300 ${contactHovered ? "opacity-100" : "opacity-0"}`}
              />
              <div
                className={`relative z-10 h-full 3xl:rounded-[38px] rounded-[19px] flex items-center justify-center space-x-2.5 transition-colors duration-300 ${contactHovered ? "bg-transparent" : "bg-[#0a0a0a]"}`}
              >
                <span
                  className={`${locale === "en" ? "font-inter" : "font-cairo font-[400] text-[18px] tracking-[-0.25px]"} font-semibold 3xl:text-2xl! text-base ${contactHovered ? "text-basic-white" : "text-primary"}`}
                >
                  {locale === "en" ? "Contact Us" : "اتصل بنا "}
                </span>
                <ContactIcon
                  color={
                    contactHovered ? "#ffffff" : "var(--color-primary-dark)"
                  }
                  className="3xl:w-7! 3xl:h-7! w-5 h-5"
                />
              </div>
            </div>
          </a>

          {/* Language Switch */}
          {!langImgError ? (
            <img
              src={
                locale === "ar"
                  ? "/imge/header/EnLang.svg"
                  : "/imge/header/arLang.svg"
              }
              alt="Language"
              className="cursor-pointer"
              onClick={changeLanguage}
              onError={() => setLangImgError(true)}
            />
          ) : (
            <button
              onClick={changeLanguage}
              className="text-white border border-white/30 px-3 py-1 rounded-md"
            >
              {locale === "ar" ? "EN" : "AR"}
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1 cursor-pointer mr-[10px]"
        >
          <span className="w-6 h-0.5 bg-[#DAAA6C]" />
          <span className="w-6 h-0.5 bg-[#DAAA6C]" />
          <span className="w-6 h-0.5 bg-[#DAAA6C]" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 flex flex-col items-center px-4 py-4 space-y-4 text-white">
          {hidingOfHeader.map((item, i) => (
            <div
              key={i}
             onClick={() => {
  setOpen(false);
  if (item.navigate) {
    router.push(item.navigate);
  }
}}
            className={`cursor-pointer font-[500] text-[18px] transition-all duration-300 ${
  currentPath === item.navigate
    ? "text-primary-animated"
    : "text-white hover:text-primary-animated"
}`}
            >
              {item.title}
            </div>
          ))}

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@exclusivemoviess.com"
            target="_blank"
            rel="noreferrer"
            onClick={() => {
              setOpen(false);
            }}
            onMouseEnter={() => setContactHovered(true)}
            onMouseLeave={() => setContactHovered(false)}
          >
            <div className="relative w-39 h-9.5 rounded-[20px] p-px overflow-hidden">
              <div
                className={`contact-border-billboard transition-opacity duration-300 ${
                  contactHovered ? "opacity-0" : "opacity-100"
                }`}
              />

              <div
                className={`absolute inset-0 bg-primary transition-opacity duration-300 ${
                  contactHovered ? "opacity-100" : "opacity-0"
                }`}
              />

              <div
                className={`relative z-10 h-full rounded-[19px] flex items-center justify-center space-x-2.5 transition-colors duration-300 ${
                  contactHovered ? "bg-transparent" : "bg-[#0a0a0a]"
                }`}
              >
                <span
                  className={`font-inter font-semibold text-base ${
                    contactHovered ? "text-basic-white" : "text-primary"
                  }`}
                >
                  {t("contactUs")}
                </span>

                <ContactIcon
                  color={
                    contactHovered ? "#ffffff" : "var(--color-primary-dark)"
                  }
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </a>
        



<div className=" flex justify-center items-center">
  {!langImgError ? (
    <img
      src={
        locale === "ar"
          ? "/imge/header/EnLang.svg"
          : "/imge/header/arLang.svg"
      }
      alt="Language"
      className="cursor-pointer w-[50px]  object-contain"
      onClick={() => {
        changeLanguage();
        setOpen(false);
      }}
      onError={() => setLangImgError(true)}
    />
  ) : (
    <button
      onClick={() => {
        changeLanguage();
        setOpen(false);
      }}
      className="w-full h-full text-white border border-white/30 rounded-[20px]"
    >
      {locale === "ar" ? "EN" : "AR"}
    </button>
  )}
</div>
</div>

      )}






      <div className="w-full h-[3.5px] absolute left-0 bottom-0 flex items-center justify-center">
        <div className="absolute left-0 w-full h-[1.5px] bottom-0 z-1 bg-ternary" />
        <div className="absolute left-0 w-full h-[1.5px] bottom-0 z-2 bg-navbar-shimmer backdrop-blur-[5px]" />
        <div className="relative z-3 w-4.75 h-[3.5px] bg-ternary blur-[9.5px]" />
      </div>
    </header>
  );
}
