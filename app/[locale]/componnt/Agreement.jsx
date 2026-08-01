import GradientBorderBox from "./GradiantBox";
import { useTranslations, useLocale } from "next-intl";
import { twMerge } from "tailwind-merge";

export default function Agreement({ nameSpace, className, imgOne, imgTwo ,imgThree }) {
  const t = useTranslations(nameSpace);
  const locale = useLocale();

  const notes = t.raw("notes.list");
  const fontClass =locale === "ar" ? "font-cairo" : "font-inter"
  const hasFooterText = t.has("notes.footer.text");
  const hasFooterHighlight = t.has("notes.footer.highlight");

  return (
  <GradientBorderBox
  className={twMerge(
    `w-[90%] mx-auto py-[20px] md:px-[50px] px-[10px] h-auto text-white flex ${
      imgOne || imgTwo ? "flex-row justify-between" : "flex-col"
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
            <img src="/imge/checkBox.svg" alt="icon" width="22" height="22" />

              <p
                className={`md:font-[400] font-[300] md:text-[18px] text-[16px] tracking-[-0.25px] ${fontClass}`}
              >
                {item}
              </p>
          </div>
        ))}

        {(hasFooterText || hasFooterHighlight) && (
          <p
            data-aos="fade-up"
            className={`md:px-[40px] px-[40px] md:font-[400] font-[300] md:text-[18px] text-[16px] tracking-[-0.25px] ${fontClass}`}
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
          {imgOne && <img src={imgOne} className="max-w-[150px]" alt="icon" />}
          {imgTwo && <img src={imgTwo}className="max-w-[150px]" alt="icon" />}
          {imgThree && <img src={imgThree} className="max-w-[150px]" alt="icon"/>}
        </div>
      )}
    </GradientBorderBox>
  );
}
