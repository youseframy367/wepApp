import { useLocale, useTranslations } from "next-intl";

interface TitleProps {
  titleKey: string;
  urlImg?: string;
}

export default function Title({ titleKey, urlImg = "/imge/policy/DoNotSellOrShare/iconworning.svg" }:TitleProps) {
  const locale = useLocale();
  const t = useTranslations("titles");

  return (
    <div className="flex gap-[15px] items-center w-[90%] mx-auto my-[30px]" data-aos="fade-up">
      <img
        src={urlImg}
        alt={t(titleKey)}
      />

      <h1
        className={`${locale === "en" ? "font-montserrat" : "font-cairo"
          } md:text-[30px] text-[20px] text-primary-animated`}
      >
        {t(titleKey)}
      </h1>
    </div>
  );
}