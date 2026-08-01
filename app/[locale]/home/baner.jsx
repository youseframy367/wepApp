import Worning from "../componnt/warning";
import { useLocale , useTranslations } from "next-intl";
export default function Baner() {
  const t = useTranslations("HomeBanner");
  const locale = useLocale();
  return (
    <div className="md:mt-[150px] mt-[150px] relative">
      <img
        src="/imge/effectTwo.svg"
        className="absolute md:hidden block w-[100%] top-[10%]  z-0 pointer-events-none"
        alt="effect"
      />

      <img
        src="/imge/effectTwo.svg"
        className="absolute md:w-[100%] w-[100%] md:top-[40%] top-[35%] md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-0 pointer-events-none"
        alt="effect"
      />
      <div className="flex md:flex-row flex-col-reverse flex-col w-[90%] md:justify-between md:mx-auto md:items-center">
        <div className="flex flex-col gap-[14px] md:w-[450px] w-[100%] ">
          <h1
            data-aos="fade-up"
            className={`md:font-[700] font-[500] md:text-[56px] text-[35px] md:mx-0 mx-auto  md:w-[100%] w-[90%] text-primary-animated ${locale === "ar" ? "font-montserrat " : ""}`}
          >
            {t("title")}
          </h1>
          <h2
            data-aos="fade-up"
            className={`${locale === "en" ? "font-inter " : "font-cairo"} font-[600] mt-[-10px] md:text-[32px] text-[30px] md:w-[100%] w-[90%] md:mx-0 mx-auto  text-primary-animated leading-[42px]`}
          >
            {t("subtitle")}
          </h2>
          <p
            data-aos="fade-up"
            className={`${locale === "en" ? "font-inter" : "font-cairo font-[600] leading-[25px]"} md:font-[500] font-[300]  md:w-[100%] w-[90%] md:mx-0 mx-auto  md:text-[16px] text-[12px] leading-[22px] tracking-[-0.25px]`}
          >
            {t("description")}
          </p>
          <button
            data-aos="fade-up"
            className={`md:w-[305px] w-[250px] md:h-[63px] h-[50px] md:mx-0 mx-[5%] flex justify-center items-center bg-primary text-[#000000] ${locale === "en" ? "font-inter md:font-[600] font-[500]  " : "font-cairo md:font-[700] font-[600]"}  md:text-[24px] text-[20px] leading-[40px] tracking-[-0.25px] rounded-[10px] border-[1px] border-[#FCD570]`}
          >
            {t("button")}
          </button>
          <p
            data-aos="fade-up"
            className={`${locale === "en" ? "font-inter font-[400]" : "font-cairo font-[700]"} md:mx-0 mx-[5%]   md:text-[14px] text-[12px] leading-[42px]`}
          >
            {t("trial")}
          </p>
        </div>
        <img
          data-aos="fade-out"
          src="/imge/home/EXBRO.svg"
          alt="EX-PRO"
          className="z-5 mx-auto md:mx-0"
        ></img>
      </div>

      <Worning
        className="md:mt-[40px] mt-[20px] md:h-[70px]"

        title={t("warning.title")}
        text={t("warning.text")}
      />
    </div>
  );
}
