import { useLocale, useTranslations } from "next-intl";

export default function Title({ titleKey }) {
  const locale = useLocale();
  const t = useTranslations("doNotSellOrShare.titles");

  return (
    <div className="flex gap-[15px] items-center w-[90%] mx-auto my-[30px]"data-aos="fade-up">
      <img
        src="/imge/policy/DoNotSellOrShare/iconworning.svg"
          alt={t(titleKey)}
      />

      <h1
        className={`${
          locale === "en" ? "font-montserrat" : "font-cairo"
        } md:text-[30px] text-[20px] text-primary`}
      >
        {t(titleKey)}
      </h1>
    </div>
  );
}