import GradientBorderBox from "./GradiantBox";
import { useLocale, useTranslations } from "next-intl";
import type { StaticImageData } from "next/image";
interface ComponentBoxItem {
  img: string | StaticImageData;
  key: string;
}
interface ComponentBoxProps {
  data: ComponentBoxItem[];
  namespace: string;
  className?: string;
}

export default function ComponntBox({ data, namespace, className }: ComponentBoxProps) {
  const locale = useLocale();
  const t = useTranslations(namespace);

  return (
    <div className={`w-[90%] mx-auto ${className} flex flex-col gap-[20px]`}>
      {data.map((item) => (
        <GradientBorderBox
          key={item.key}
          className="flex gap-[20px] items-center p-[15px]"
        >

          <img
            src={typeof item.img === "string" ? item.img : item.img.src}
            alt="logo" />


          <div
            data-aos="fade-up"
            className={`flex flex-col gap-[10px] ${locale === "en" ? "font-montserrat" : "font-cairo"
              }`}
          >
            {t.has(`${item.key}.title`) && (
              <h2 className={`md:text-[26px] text-[20px] font-[500] ${locale === "en" ? "font-montserrat" : "font-cairo"} text-primary`}>
                {t(`${item.key}.title`)}
              </h2>
            )}

            <p
              className={`${locale === "en"
                ? "font-inter md:text-[16px] text-[13px] md:font-[600] font-[500]"
                : "font-cairo md:text-[17px] text-[14px] font-[400]"
                } tracking-[-0.25px]`}
            >
              {t(`${item.key}.text`)}
            </p>
          </div>
        </GradientBorderBox>
      ))}
    </div>
  );
}