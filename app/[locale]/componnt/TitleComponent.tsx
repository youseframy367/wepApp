import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

interface TitleProps {
  titleKey: string;
  urlImg?: string;
}

export default function Title({ titleKey, urlImg = "/imge/policy/DoNotSellOrShare/iconworning.svg" }: TitleProps) {
  const locale = useLocale();
  const t = useTranslations("titles");
  const safeTitleKey = titleKey ?? "";
  return (
    <div className="flex gap-[15px] items-center w-[90%] mx-auto my-[30px]" data-aos="fade-up">
      <Image
        src={urlImg}
        alt={t.has(safeTitleKey) ? t(safeTitleKey) : safeTitleKey}
         width={40}
        height={40}
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