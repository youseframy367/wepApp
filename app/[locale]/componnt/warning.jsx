import { useLocale } from "next-intl";
import GradientBorderBox from "./GradiantBox";

export default function Worning({
  textAr,
  textEn,
  className,
  textSpanAr = "",
  textSpanEn = "",
  styleSpan,
}) {
  const local = useLocale();
  return (
    <GradientBorderBox
      className={` ${className}  w-[90%] mx-[auto] md:h-[68px] h-auto flex md:gap-[24px] gap-[15px] items-center px-[20px]`}
    >
      <img src="/imge/agreement/worning.svg" data-aos="fade-up"></img>
      <p
        data-aos="fade-up"
        className={`  ${local === "en" ? "font-inter md:font-[400]" : "font-cairo md:font-[500] md:text-[20px] text-[17px]"} py-[10px]  font-[300]  text-[16px] text-[#fff] `}
      >
        <span className="text-primary">
          {local === "en" ? textSpanEn : textSpanAr}
        </span>
        {local === "en" ? textEn : textAr}
      </p>
    </GradientBorderBox>
  );
}
