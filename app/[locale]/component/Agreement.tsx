import GradientBorderBox from "./GradientBox";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { twMerge } from "tailwind-merge";


interface AgreementProps {
  nameSpace: string;
  className?: string;
  imgOne?: string;
  imgTwo?: string;
  imgThree?: string;
}


export default function Agreement({ nameSpace, className, imgOne, imgTwo, imgThree }: AgreementProps) {
  const t = useTranslations(nameSpace);
  const locale = useLocale();

  const notes = t.raw("notes.list") as string[];
  const fontClass = locale === "ar" ? "font-cairo" : "font-inter"
  const hasFooterText = t.has("notes.footer.text");
  const hasFooterHighlight = t.has("notes.footer.highlight");

  return (
    <GradientBorderBox
      className={twMerge(
        `w-[90%] mx-auto py-[20px] md:px-[50px] px-[15px] h-auto text-white flex ${imgOne || imgTwo ? "flex-row justify-between" : "flex-col"
        }`,
        className
      )}
    >
      <div>
        {notes.map((item, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className="flex items-center md:gap-[30px] gap-[7px]"
          >
            <img src="/imge/checkBox.webp" alt="icon" width="22" height="22" />

            <p
              className={`md:font-[400] font-[300] md:text-[18px] text-[14px] tracking-[-0.25px] ${fontClass}`}
            >
              {item}
            </p>
          </div>
        ))}

        {(hasFooterText || hasFooterHighlight) && (
          <p
            data-aos="fade-up"
            className={`md:px-[40px] px-[30px] md:font-[400] font-[300] md:text-[18px] text-[16px] tracking-[-0.25px] ${fontClass}`}
          >
            {hasFooterText && t("notes.footer.text")}
            {hasFooterHighlight && (
              <span className="text-[#DB9D39]">
                {" "}
                {t("notes.footer.highlight")}
              </span>
            )}
          </p>
        )}
      </div>
     {(imgOne || imgTwo || imgThree) && (
  <div className="flex gap-[30px]">
    {imgOne && (
      <Image
        src={imgOne}
        alt="icon"
        width={150}
        height={150}
        className="max-w-[150px] h-auto object-contain"
        unoptimized
        loading="lazy"
      />
    )}

    {imgTwo && (
      <Image
        src={imgTwo}
        alt="icon"
        width={150}
        height={150}
        className="max-w-[150px] h-auto object-contain"
        unoptimized
        loading="lazy"
      />
    )}

    {imgThree && (
      <Image
        src={imgThree}
        alt="icon"
        width={150}
        height={150}
        className="max-w-[150px] h-auto object-contain"
        unoptimized
        loading="lazy"
      />
    )}
  </div>
)}
    </GradientBorderBox>
  );
}
