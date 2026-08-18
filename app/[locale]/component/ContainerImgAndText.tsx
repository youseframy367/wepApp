import GradientBorderBox from "./GradientBox";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
interface ContanerTextAndImgProps {
  namespace: string;
  img?: string;
  ul?: boolean;
  effect?: string;
  positionEffect?: string;
}


export default function ContanerTextAndImg({
  namespace,
  img,
  ul = false,
  effect = "/imge/effect.webp",
  positionEffect = "50%",
}: ContanerTextAndImgProps) {
  const locale = useLocale();
  const t = useTranslations(namespace);
  const items = t.raw("items") as string[];

  return (
    <div className=" relative">
      <Image
        src={effect}
        alt="effect"
        width={3280}
        height={509}
        loading="lazy"
        unoptimized
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none w-full h-auto"
        style={{ top: positionEffect }}
      />
      <GradientBorderBox className="flex md:flex-row flex-col items-center relative gap-[20px] w-[90%] mx-auto md:p-[20px] p-[10px] my-[5px]">
        {img && (
        <Image
  src={img}
  alt="acknowledges"
  width={400}
  height={400}
  data-aos="fade-out"
  className="md:mx-0 mx-auto md:my-0 my-[20px] md:max-w-[30%] w-[70%] md:w-auto h-auto max-h-[400px] object-contain"
  unoptimized
  loading="lazy"
/>
        )}
        <ul
          className={`${ul ? "list-disc" : ""} ${locale === "ar" ? "pr-6" : "pl-6"} `}
        >
          {Array.isArray(items) &&
            items.map((item, index) => (
              <li
                key={index}
                data-aos="fade-up"
                className={` ${locale === "en" ? "font-inter font-[400]" : "font-cairo font-[500]"} text-[16px] leading-[30px] tracking-[-0.25px]`}
              >
                {item}
              </li>
            ))}
        </ul>
      </GradientBorderBox>
    </div>
  );
}
