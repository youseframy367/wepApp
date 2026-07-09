import { supportedBlatform } from "./HomeData";
import GradientBorderBox from "../componnt/GradiantBox";
import BlackBox from "../componnt/BlackBox";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
export default function BlatformSupport() {
  const t = useTranslations("platformSupport");
  const local = useLocale();
  const blatformData = supportedBlatform;
  return (
    <div className="w-[90%] mx-auto my-[40px]">
      <div className="flex flex-col gap-[14px] items-center">
        <h1
          data-aos="fade-up"
          className={`md:text-[40px] text-[30px] ${local === "en" ? "font-inter" : "font-cairo"} font-[600] leading-[42px] text-primary`}
        >
          {t("title")}
        </h1>
        <p
          data-aos="fade-up"
          className={` md:text-start text-center ${local === "en" ? "font-inter font-[500] md:text-[14px] tex-[12px]" : "font-cairo font-[600] md:text-[16px] text-[14px]"} leading-[22px] tracking-[-0.25px] `}
        >
          {t("description")}
        </p>
      </div>
      <div className="flex flex-col items-center  relative">
        <img
          src="/imge/effect.png"
          className="absolute md:top-[20%] top-[10%] scale-x-[-1] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          alt="effect"
        />
        <div
          className={`flex overflow-x-auto md:overflow-x-visible no-scrollbar overflow-y-visible gap-[12px] md:w-[90%] w-[110%]   ${local === "ar" ? "mr-[-5%]" : "ml-[-5%]"} md:mx-auto mx-auto md:my-[70px] my-[40px]`}
        >
          {blatformData.map((item) => (
            <GradientBorderBox
              key={item.key}
              className="flex-1 basis-0 h-[140px] md:overflow-none overflow-visible"
            >
              <div className="flex flex-col items-center md:gap-[14px] gap-[8px] pt-[50px] md:mt-[-100px] mt-[-40px] px-[15px]">
                <img
                  data-aos="fade-out"
                  src={item.img}
                  alt={t(`cards.${item.key}.title`)}
                  className="relative z-20 md:w-auto w-[80px]"
                />

                <h2
                  data-aos="fade-up"
                  className={` font-[700] ${local === "en" ? "md:text-[18px] text-[16px] font-montserrat leading-[18px]" : "font-cairo leading-[23px] md:text-[16px] whitespace-nowrap md:whitespace-normal text-[14px]"} text-primary  text-center`}
                >
                  {t(`cards.${item.key}.title`)}
                </h2>

                <p
                  data-aos="fade-up"
                  className="font-[600] font-montserrat text-[12px] leading-[18px]  whitespace-nowrap text-center"
                >
                  {t(`cards.${item.key}.text`)}
                </p>
              </div>
            </GradientBorderBox>
          ))}
        </div>
        <p
          data-aos="fade-up"
          className={`${local === "en" ? "font-inter" : "font-cairo"} md:mt-[-40px] mt-[-20px] md:text-start text-center font-[700] tracking-[-0.25px] flex items-center text-primary`}
        >
          {t("availability")}
        </p>
      </div>

      <div className="w-[90%] flex flex-col items-center mx-auto my-[60px]">
        <h1
          data-aos="fade-up"
          className={`${local === "en" ? "font-inter" : "font-cairo"} font-[600] md:text-[40px] text-[30px] leading-[42px] text-primary `}
        >
          {t("activation.title")}
        </h1>
        <div className="w-[100%] md:my-[50px] my-[30px] flex md:flex-row flex-col md:gap-[10px] gap-[15px] relative">
          <img
            src="/imge/effect.png"
            className="absolute md:top-[20%] top-[10%]  left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
            alt="effect"
          />
          <BlackBox className="flex flex-col  justify-center items-center md:w-[33%] w-[100%] h-[175px]">
            <h1
              data-aos="fade-out"
              className={`${local === "en" ? "font-montserrat" : "font-cairo"} md:font-[900] font-[800] md:text-[60px] text-[70px] mt-[-10px]  text-primary`}
            >
              01
            </h1>
            <h2
              data-aos="fade-up"
              className={`${local === "en" ? "font-montserrat" : "font-cairo"}  font-[500] text-[20px] text-primary mt-[-15px]`}
            >
              {t("activation.step1.title")}
            </h2>
            <p
              data-aos="fade-up"
              className={`w-[170px] mt-[10px] ${local === "ar" ? "font-montserrat font-[400]" : "font-cairo font-[500]"} text-[10px] leading-[14px] text-center`}
            >
              {t("activation.step1.text")}
            </p>
          </BlackBox>
          <BlackBox className="flex flex-col  justify-center items-center md:w-[33%] w-[100%] h-[175px]">
            <h1
              data-aos="fade-out"
              className={`${local === "en" ? "font-montserrat" : "font-cairo"} md:font-[900] font-[800] md:text-[60px] text-[70px] mt-[-10px]  text-primary`}
            >
              02
            </h1>
            <h2
              data-aos="fade-up"
              className={`${local === "en" ? "font-montserrat" : "font-cairo"}  font-[500] text-[20px] text-primary mt-[-15px]`}
            >
              {t("activation.step2.title")}
            </h2>
            <p
              data-aos="fade-up"
              className={`w-[157px] mt-[10px] ${local === "ar" ? "font-montserrat font-[400]" : "font-cairo font-[500]"} text-[10px] leading-[14px] text-center`}
            >
              {t("activation.step1.text")}
            </p>
          </BlackBox>
          <BlackBox className="flex flex-col justify-center items-center md:w-[33%] w-[100%] h-[175px]">
            <h1
              data-aos="fade-out"
              className={`${local === "en" ? "font-montserrat" : "font-cairo"} md:font-[900] font-[800] md:text-[60px] text-[70px] mt-[-10px] text-primary`}
            >
              03
            </h1>

            <h2
              data-aos="fade-up"
              className={`${local === "en" ? "font-montserrat" : "font-cairo"} font-[500] text-[20px] text-primary mt-[-15px]`}
            >
              {t("activation.step3.title")}
            </h2>

            <p
              data-aos="fade-up"
              className={`w-[241px] mt-[10px] ${
                local === "en" ? "font-montserrat" : "font-cairo"
              } font-[400] text-[10px] leading-[14px] text-center`}
            >
              {t("activation.step3.text1")}
              <span className="text-primary">
                {t("activation.step3.website")}
              </span>
              {t("activation.step3.text2")}
            </p>
          </BlackBox>
        </div>
      </div>
      <div></div>
      <div className="w-[90%] flex flex-col items-center mx-auto md:mt-[60px] mt-[20px]">
        <h1
          data-aos="fade-up"
          className={`${local === "en" ? "font-inter" : "font-cairo"} font-[600] md:text-[40px] text-[30px]  leading-[42px] text-primary `}
        >
          {t("plans.title")}
        </h1>
        <div className="w-[100%] md:my-[50px] my-[20px] flex md:flex-row flex-col md:justify-between md:gap-[10px] gap-[15px] relative">
          <img
            src="/imge/effect.png"
            className="absolute md:top-[0%] top-[10%]  left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
            alt="effect"
          />
          <BlackBox className="flex md:w-[45%] w-[100%] px-[15px] items-center gap-[15px] h-[102px] ">
            <img
              data-aos="fade-out"
              src="/imge/home/4$.svg"
              alt="$4"
              width="67px"
              height="56px"
            ></img>
            <div>
              <h2
                data-aos="fade-up"
                className={`${local === "en" ? "font-montserrat " : "font-cairo"}md:font-[500] font-[600] md:text-[24px] text-[16px] text-primary`}
              >
                {t("plans.yearly.title")}
              </h2>
              <p
                data-aos="fade-up"
                className={`${
                  local === "en"
                    ? "font-montserrat font-[600] text-[12px]"
                    : "font-cairo font-[500] text-[14px]"
                }`}
              >
                {t("plans.yearly.text")}{" "}
                <span className={local === "en" ? "font-[900]" : "font-[800]"}>
                  {t("plans.yearly.highlight")}
                </span>
              </p>
            </div>
          </BlackBox>
          <BlackBox className="flex md:w-[45%] w-[100%] px-[15px] items-center gap-[15px] h-[102px] ">
            <img
              data-aos="fade-out"
              src="/imge/home/6$.svg"
              alt="$4"
              width="67px"
              height="56px"
            ></img>
            <div>
              <h2
                data-aos="fade-up"
                className={`${local === "en" ? "font-montserrat " : "font-cairo"}md:font-[500] font-[600] md:text-[24px] text-[16px] text-primary`}
              >
                {t("plans.halfYear.title")}
              </h2>
              <p
                data-aos="fade-up"
                className={`${
                  local === "en"
                    ? "font-montserrat font-[600] text-[12px]"
                    : "font-cairo font-[500] text-[14px]"
                }`}
              >
                {t("plans.halfYear.text")}{" "}
                <span className={local === "en" ? "font-[900]" : "font-[800]"}>
                  {t("plans.halfYear.highlight")}
                </span>
              </p>
            </div>
          </BlackBox>
        </div>
      </div>
    </div>
  );
}
