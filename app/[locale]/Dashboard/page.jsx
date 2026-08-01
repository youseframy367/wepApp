import { DashboardData } from "./DashboardData";
import BlackBox from "../componnt/BlackBox";
import { useTranslations, useLocale } from "next-intl";
export default function Dashboard() {
  const t = useTranslations("Dashboard");
  const locale = useLocale();
  const fontClass = locale === "en" ? "font-inter" : "font-cairo";

  return (
    <div className="text-center flex flex-col gap-[10px] relative">
      <img
        src="/imge/effect.png"
        className="absolute md:top-[-2%] top-[0%]  left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
        alt="effect"
      />
      <h1 data-aos="fade-up" className="font-montserrat font-[700] md:mt-[100px] mt-[70px] md:text-[70px] text-[60px] text-primary-animated items-center">
        {t("title")}
      </h1>
      <h2
      data-aos="fade-up"
        className={`font-[500] mt-[-10px] md:text-[30px] text-[25px] ${fontClass} tracking-[-0.25px] leading-[24px] text-primary-mid items-center`}
      >
        {t("subtitle")}
      </h2>
      <p
      data-aos="fade-up"
        className={` ${locale === "en" ? "font-inter font-[600]" : "font-cairo font-[500]"} md:text-[16px] text-[14px] leading-[22px] tracking-[-0.25px]`}
      >
        {t("tagline")}
      </p>
      <p
      data-aos="fade-up"
        className={`md:w-[700px] w-[90%] mx-auto ${fontClass} font-[400] md:text-[16px] text-[14px]  tracking-[-0.25px] leading-[24px]`}
      >
        {t("description")}
      </p>
      <img
        data-aos="fade-out"
        src="/imge/home/EXBRO.svg"
        alt="EX-PRO"
        className="z-5 mx-auto  md:w-[560px] w-[90%]"
      ></img>
      <button
      data-aos="fade-out"
        className={`md:w-[327px] w-[280px] h-[60px] flex items-center justify-center gap-[10px] rounded-[10px] bg-primary ${locale === "en" ? " font-[600] font-inter md:text-[24px] text-[20px]" : " font-[700] md:text-[22px] text-[19px] font-cairo"} tracking-[-0.25px] text-[#000000] mx-auto`}
      >
        <img src="/imge/Dashbord/EnterDashbord.svg" alt="GoTODashbord" />
        {t("enterDashboard")}
        <img
          src="/imge/Dashbord/drwer.svg"
          className={locale === "ar" ? "rotate-180" : ""}
        />
      </button>
      <div className="flex text-center items-center justify-center gap-2 md:gap-3 my-3 px-4" data-aos="fade-up">
        <img
          src="/imge/Dashbord/Secure.svg"
          alt="Secure"
          className="w-5 h-4 md:w-6 md:h-6 mt-1 md:mt-0 shrink-0"
        />

        <p
          className={`${fontClass} font-medium text-sm md:text-lg leading-5 md:leading-normal tracking-[-0.25px] text-left`}
        >
          <span
            dir={locale === "en" ? "ltr" : "rtl"}
            className={`text-primary-dark text-start`}
          >
            {t("secureAccess")}
          </span>
          <span className="block md:inline md:ml-1">{t("secureText")}</span>
        </p>
      </div>
      <div className="grid md:grid-cols-2  grid-cols-1 mt-[20px] w-[90%] mx-auto gap-[20px] text-start relative">
        <img
          src="/imge/effect.png"
          className="absolute md:top-[20%] top-[0%]  left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          alt="effect"
        />
        {DashboardData.map((item) => (
          <BlackBox
            borderEfect={false}
            key={item.key}
            className="flex gap-[15px] items-center w-[100%] p-[10px]"
          >
            <img src={item.img} alt={item.key} className="md:w-auto w-[80px]" data-aos="fade-out" />
            <div className="flex flex-col gap-[10px]" data-aos="fade-up">
              <h2
                className={`font-[500] ${locale === "en" ? "font-montserrat" : "font-cairo"} md:text-[20px] text-[18px] text-primary-dark`}
              >
                {t(`${item.key}.title`)}
              </h2>
              <p
                className={`${locale === "en" ? "font-[400] md:text-[10px] text-[8px] font-inter" : "font-[500] md:text-[14px] text-[10px] font-cairo leading-[27px]"} w-[90%]   tracking-[-0.25px] `}
              >
                {t(`${item.key}.text`)}
              </p>
            </div>
          </BlackBox>
        ))}
      </div>
      <BlackBox
        borderEfect={false}
        className="flex gap-[15px] items-center w-[100%] py-[20px] px-[30px] w-[90%] mx-auto text-start my-[20px]"
      >
        <img src="/imge/agreement/worning.svg" alt="Notice" data-aos="fade-out" />
        <div className="flex flex-col gap-[10px]" data-aos="fade-up">
          <h2
            className={`font-[500] ${locale === "en" ? "font-montserrat" : "font-cairo"} md:text-[20px] text-[18px] text-primary-dark`}
          >
            {t("notice.title")}
          </h2>
          <p
            className={`${locale === "en" ? "font-[400] md:text-[10px] text-[8px] font-inter" : "font-[500] md:text-[14px] text-[10px] font-cairo leading-[27px]"} w-[90%]   tracking-[-0.25px] `}
          >
            {t("notice.text")}
          </p>
        </div>
      </BlackBox>
    </div>
  );
}
