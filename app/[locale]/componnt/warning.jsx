import { useLocale } from "next-intl";
import GradientBorderBox from "./GradiantBox";
export default function Worning({
  title,
  text,
  className,
  classNamep,
  reverse = false,
  img = "/imge/agreement/worning.svg",
}) {
  const local = useLocale();
  return (
    <GradientBorderBox
      className={`${className} w-[90%] mx-auto md:h-[68px] h-auto flex md:gap-[24px] gap-[15px] items-center px-[20px]`}
    >
      <img src={img} data-aos="fade-up" />

      <p
        className={`${classNamep} ${
          local === "en"
            ? "font-inter md:font-[400]"
            : "font-cairo md:font-[500] md:text-[20px] text-[17px]"
        } py-[10px] font-[300] text-[16px] text-[#fff]`}
      >
        {reverse ? (
          <>
            {text} <span className="text-primary">{title}</span>
          </>
        ) : (
          <>
            <span className="text-primary">{title}</span> {text}
          </>
        )}
      </p>
    </GradientBorderBox>
  );
}
