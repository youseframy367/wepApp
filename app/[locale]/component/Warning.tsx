import { useLocale } from "next-intl";
import GradientBorderBox from "./GradientBox";
import Image from "next/image";

interface WorningProps {
  title?: string;
  text: string;
  className?: string;
  classNamep?: string;
  reverse?: boolean;
  img?: string;
}
export default function Worning({
  title,
  text,
  className,
  classNamep,
  reverse = false,
  img = "/imge/worning.webp",
}: WorningProps) {
  const locale = useLocale();
  return (
    <GradientBorderBox
      className={`${className} w-[90%] mx-auto md:h-[68px] h-auto flex md:gap-[24px] gap-[15px] items-center px-[20px]`}
    >
      <Image
        src={img}
        alt="Worning"
        width={40}
        height={40}
        
      />
      <p
        className={`${classNamep} ${locale === "en"
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
