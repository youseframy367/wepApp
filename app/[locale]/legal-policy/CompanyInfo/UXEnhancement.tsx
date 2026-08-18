import Image from "next/image";
import { useTranslations ,useLocale } from "next-intl"
import Title from "../../component/TitleComponent";
import GradientBorderBox from "../../component/GradientBox";

export default function UXEnhancement() {
  const t = useTranslations("CompanyInfo.UXEnhancement");
  const locale=useLocale()
  return (
    <div>
      <div className="relative w-[90%] mx-auto flex justify-center mt-[70px] mb-[40px]">
        <Image
        src="/imge/effectTwo.webp"
        className="absolute md:top-[120%] top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none w-[100%] h-auto"
        alt="effect"
        loading="lazy"
        unoptimized
        width="1280"
        height="508"
      />

        <div className="flex gap-[20px] items-center z-99">
          <Image
        src="/imge/policy/CompanyInfo/UXEnhancement.webp"
        data-aos="fade-out"
        alt="UX Enhancement"
        className="md:w-[100px] w-[70px]"
        loading="lazy"
        unoptimized
        width="103"
        height="95"
      />

          <div className="flex flex-col md:gap-[5px]">
            <h1 data-aos="fade-up" className={`md:font-[600] font-[500] md:text-[60px] text-[30px] text-primary ${locale === "en" ?"font-montserrat":"font-cairo"}`}>
              {t("title")}
            </h1>

            <p data-aos="fade-up" className={`font-[400]  ${locale === "en"?"font-inter md:text-[16px] text-[14px]":"font-cairo md:text-[18px] text-[16px]"} tracking-[-0.25px]`}>
              {t("subtitle")}
            </p>
          </div>
        </div>
      </div>

      <Title titleKey="Pre-PurchaseNotice" />

      <GradientBorderBox className="flex gap-[24px] py-[20px] px-[30px] items-center w-[90%] mx-auto">
        <Image
        src="/imge/policy/CompanyInfo/ExProSubscriptions.webp"
        data-aos="fade-out"
        alt="ExProSubscriptions"
        className="md:w-[100px] w-[70px]"
        loading="lazy"
        unoptimized
        width="89"
        height="68"
      />

        <p data-aos="fade-up" className={`font-[400] md:text-[14px] text-[12px] leading-[21px] ${locale === "en" ? "font-inter" :"font-cairo font-[500] text-[16px] leading-[26px]"}  tracking-[-0.25px]`}>
          {t("notice")}
        </p>
      </GradientBorderBox>

      <p data-aos="fade-up" className={`${locale === "en" ?"font-inter":"font-cairo font-[500]"} font-[400] md:text-[12px] text-[12px] tracking-normal-[-0.25px] my-[10px] text-center md:w-auto w-[90%] mx-auto`}>
        {t("footer")}
      </p>
    </div>
  );
}