import BanerCommponnt from "../componnt/Baner";
import PrivcyComponnt from "../componnt/ContanerPrivcy";
import GradientBorderBox from "../componnt/GradiantBox";
import { aboutUs, DeteGoToBage } from "./PrivcyData";
import { useLocale , useTranslations} from "next-intl";
export default function Bolicy() {
  const t = useTranslations("aboutUs");
  const local = useLocale();
  return (
    <div>
      <BanerCommponnt
        classNameContainer="md:mt-[90px] mt-[100px]"
        imgUrl="/imge/policy/policyBaner.svg"
        namespace="banner"
      ></BanerCommponnt>
      <PrivcyComponnt
        data={DeteGoToBage}
        namespace="legalPolicy"
        className="md:mt-[90px] mt-[140px]"
        classNameP="md:h-[70px] h-[80px]"
        positionEffect="90%"
        urlEffect="/imge/effect.png"
      />
      <div
        data-aos="fade-up"
        className="flex flex-col mb-[40px] mt-[60px] items-center"
      >
        <h2
          className={`font-[600] md:text-[36px] text-[22px] text-primary ${local === "ar" ? "font-cairo" : "font-montserrat"} `}
        >
          {t("title")}
        </h2>
        <p
          className={`${local === "ar" ? "font-cairo" : "font-inter"} font-[500] md:text-[20px] text-[16px] text-center md:text-start`}
        >
          {t("subtitle")}
        </p>
      </div>
      <div className="flex md:flex-row flex-col md:gap-[0px] gap-[20px] w-[90%] mx-auto md:justify-between">
        {aboutUs.map((item) => (
          <GradientBorderBox
            key={item.key}
            className="flex gap-[15px] p-[20px] md:w-[31%] w-[100%] h-[169px]"
          >
            <img
              data-aos="fade-out"
              src={item.img}
              alt={t(`cards.${item.key}.title`)}
              width="68px"
            />
            <div data-aos="fade-up" className="flex flex-col gap-[10px]">
              <h1
                className={`font-[700] text-[22px] ${local === "en" ? " font-montserrat" : "font-cairo"} text-primary`}
              >
                {t(`cards.${item.key}.title`)}
              </h1>
              <p
                className={`${local === "en" ? "font-inter" : "font-cairo"} font-[400] w-[95%] text-[14px] tracking-[-0.25px]`}
              >
                {t(`cards.${item.key}.description`)}
              </p>
              <button
                className={`w-[136px] h-[29px] rounded-[4px] border-primary tracking-[-0.25px] flex justify-center items-center text-[#000] font-[600] text-[14px] ${local === "en" ? "font-inter" : "font-cairo"} bg-primary`}
              >
                {t("button")}
              </button>
            </div>
          </GradientBorderBox>
        ))}
      </div>
    </div>
  );
}
