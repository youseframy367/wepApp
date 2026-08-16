import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

interface PrivacyPolicyHeroProps {
  nameSpace: string;
  className?: string;
  showLaws?: boolean;
  img?: string;
  effect?: boolean;
}

export default function PrivacyPolicyHero({
  nameSpace,
  className = "",
  img = "/imge/policy/DoNotSellOrShare/Ltd.svg",
  showLaws = true,
  effect = false,
}: PrivacyPolicyHeroProps) {
  const locale = useLocale();
  const t = useTranslations(nameSpace);

  return (
    <div
      className={`w-[90%] md:flex-row flex-col relative mx-auto flex items-center justify-between ${className}`}
    >
      {effect && (
        <Image src="/imge/effect.webp" alt="effect" width={1280} height={509} loading="lazy" priority  className="absolute md:top-[70%] top-[10%]  left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none" />
      )}
      <img
        src={img}
        alt={t("Policy.companyTitle")}
        className="md:my-auto my-[30px] md:w-auto w-[90%] z-50"
      />

      <div className="md:w-[60%] w-full flex flex-col z-50">
        <h2
          className={`${
            locale === "en" ? "font-montserrat" : "font-cairo"
          } font-[600] md:text-[60px] text-[35px] text-primary`}
        >
          {t("Policy.companyTitle")}
        </h2>

        <p
          className={`${
            locale === "en" ? "font-inter" : "font-cairo"
          } font-[400] text-[16px] leading-[26px] tracking-[-0.25px]`}
        >
          {t("Policy.description")}

          {showLaws && (
            <>
              <br />
              {t("Policy.laws.ccpa")}
              <br />
              {t("Policy.laws.cpra")}
              <br />
              {t("Policy.laws.gdpr")}
              <br />
              {t("Policy.laws.egypt")}
              <br />
              {t("Policy.footer")}
            </>
          )}
        </p>
      </div>
    </div>
  );
}
