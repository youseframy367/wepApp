import Container from "./Container";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

interface BanerCommponntProps {
  imgUrl?: string;
  classNameContainer?: string;
  classNameImg?: string;
  namespace: string;
  withContainer?: boolean;
}
export default function BanerCommponnt({
  imgUrl = "",
  classNameContainer = "",
  classNameImg = "",
  namespace,
  withContainer = true,
}: BanerCommponntProps) {
  const locale = useLocale();
  const t = useTranslations(namespace);
  const fontClass = locale === "ar" ? "font-cairo" : "font-inter"
  const content = (
    <div className="w-[100%] h-[115px] flex flex-col gap-[15px] justify-center items-center md:mt-[100px] mt-[90px]">
      {imgUrl && (
        <Image
          src={imgUrl}
           width={170}
    height={170}
          className={classNameImg}

          alt={t("title")}
          unoptimized
          loading="lazy"
        />
      )}

      <h1
        className={`font-[500] text-center md:text-[46px] text-[30px]  text-primary-animated ${locale === "ar" ? "font-cairo" : "font-Montserrat"
          }`}
      >
        {t("title")}
      </h1>

      <p
        className={`font-[500] text-[19px] md:text-[22px] ${fontClass} bg-gradient-to-r from-[#F0DFC5] to-[#DAB377] bg-clip-text text-transparent leading-[20px]`}
      >
        {t("subtitle")}
      </p>

      <p
        className={`font-[500] text-[12px] md:text-[14px] ${fontClass} bg-gradient-to-r from-[#FCD570] via-[#DB9D39] via-[#FEF2B4] via-[#F5C35E] via-[#F5C35E] to-[#FCD570] bg-clip-text text-transparent leading-[20px]`}
      >
        {t("description")}
      </p>

      {imgUrl && (
        <div className="relative md:w-[600px] w-[90%] h-[3.5px] mt-2 flex items-center justify-center">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1.5px] bg-ternary" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1.5px] bg-navbar-shimmer backdrop-blur-[5px]" />
          <div className="relative z-10 w-5 h-[3.5px] bg-ternary blur-[9.5px]" />
        </div>
      )}
    </div>
  );

  if (!withContainer) {
    return content;
  }

  return (
    <Container
      className={`md:h-[400px] h-[270px] w-full md:bg-cover md:mt-[-90px] mt-[-70px] ${classNameContainer}`}
    >
      {content}
    </Container>
  );
}