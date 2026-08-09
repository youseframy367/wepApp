"use client";

import GradientBorderBox from "./GradiantBox";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

interface PrivacyItem {
  key: string;
  img: string;
  navigate: string;
}
interface PrivacyComponentProps {
  className?: string;
  classNameP?: string;
  data?: PrivacyItem[];
  namespace: string;
  positionEffect?: string;
  urlEffect?: string;
}

export default function PrivcyComponnt({
  className = "data",
  classNameP = "",
  data = [],
  namespace,
  positionEffect = "25%",
  urlEffect = "/imge/effectTwo.svg",
}:PrivacyComponentProps) {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations(namespace);
  return (
    <div className={`w-[90%] mx-auto relative  ${className} `}>
      <img
        src={urlEffect}
        className={`absolute top-[${positionEffect}] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none`}
        alt="effect"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {data.map((item) => (
          <GradientBorderBox key={item.key} className="h-[249px] p-[10px] ">
            <div className="flex md:gap-[20px]  gap-[2px]" data-aos="fade-up">
              <img
                src={item.img}
                alt={t(`cards.${item.key}.title`)}
                className="md:mt-[50px] md:w-auto md:h-auto w-[120px] my-auto"
              ></img>
              <div className="flex flex-col justify-between  text-[#fff] mt-[15px]">
                <h3
                  className={`font-[600] md:text-[30px] text-[20px] text-primary ${locale === "en" ? "font-montserrat" : "font-cairo md:text-[30px] text-[20px] font-[600] leading-[30px]"} `}
                >
                  {t(`cards.${item.key}.title`)}
                </h3>
                <p
                  className={`font-[400]  md:mt-[10px] mt-[10px] md:pl-[10px] ${classNameP}  md:text-[14px] text-[12px] ${locale === "en" ? "font-inter" : " tracking-[-.25px] font-cairo md:text-[14px] text-[12px] font-[500] pl-[10px] md:leading-[22px] leading-[20px]"}`}
                >
                  {t(`cards.${item.key}.description`)}
                </p>
                <button
                  className={` md:w-[135px] w-[110px] md:h-[45px] h-[40px] border-[1px] border-[#FCD570] tracking-[-0.25px] text-[#000000] font-[600] md:mt-[-5px] mt-[10px] md:text-[16px] text-[15px] ${locale === "ar" ? " font-cairo md:font-[700] font-[500]" : "font-inter "} flex justify-center items-center bg-primary rounded-[6px] `}
                  onClick={() => router.push(item.navigate)}
                >
                  {locale === "en" ? "Read Policy" : "قراءة السياسة"}
                </button>
              </div>
            </div>
          </GradientBorderBox>
        ))}
      </div>
    </div>
  );
}
