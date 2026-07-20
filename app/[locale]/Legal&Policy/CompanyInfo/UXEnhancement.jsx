import { useTranslations ,useLocale } from "next-intl"
import Title from "../../componnt/TitleComponent";
import GradientBorderBox from "../../componnt/GradiantBox";

export default function UXEnhancement() {
  const t = useTranslations("CompanyInfo.UXEnhancement");
  const local=useLocale()
  return (
    <div>
      <div className="relative w-[90%] mx-auto flex justify-center mt-[70px] mb-[40px]">
        <img
      
          src="/imge/effectTwo.svg"
          className="absolute md:top-[120%] top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          alt="effect"
        />

        <div className="flex gap-[20px] items-center z-99">
          <img
          data-aos="fade-out"
            src="/imge/policy/CompanyInfo/UXEnhancement.svg"
            alt="UX Enhancement"
            className="md:w-auto w-[70px]"
          />

          <div className="flex flex-col md:gap-[5px]">
            <h1 data-aos="fade-up" className={`md:font-[600] font-[500] md:text-[60px] text-[30px] text-primary ${local === "en" ?"font-montserrat":"font-cairo"}`}>
              {t("title")}
            </h1>

            <p data-aos="fade-up" className={`font-[400]  ${local === "en"?"font-inter md:text-[16px] text-[14px]":"font-cairo md:text-[18px] text-[16px]"} tracking-[-0.25px]`}>
              {t("subtitle")}
            </p>
          </div>
        </div>
      </div>

      <Title titleKey="Pre-PurchaseNotice" />

      <GradientBorderBox className="flex gap-[24px] py-[20px] px-[30px] items-center w-[90%] mx-auto">
        <img
          data-aos="fade-out"
          src="/imge/policy/CompanyInfo/ExProSubscriptions.svg"
          alt="ExProSubscriptions"
          className="md:w-auto w-[70px]"
        />

        <p data-aos="fade-up" className={`font-[400] md:text-[14px] text-[12px] leading-[21px] ${local === "en" ? "font-inter" :"font-cairo font-[500] text-[16px] leading-[26px]"}  tracking-[-0.25px]`}>
          {t("notice")}
        </p>
      </GradientBorderBox>

      <p data-aos="fade-up" className={`${local === "en" ?"font-inter":"font-cairo font-[500]"} font-[400] md:text-[12px] text-[10px] tracking-normal-[-0.25px] my-[10px] text-center md:w-auto w-[90%] mx-auto`}>
        {t("footer")}
      </p>
    </div>
  );
}