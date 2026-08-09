
import { useLocale } from "next-intl";
import Container from "./Contaner";
import { useTranslations } from "next-intl";

interface FirstPointProps {
  urlImg?: string;
  withContainer?: boolean;
  className?: string;
  namespace: string;
}
export default function FirstPoint({
  urlImg = "/imge/agreement/reseller/i.svg",
  withContainer = true,
  className = "",
  namespace
}:FirstPointProps) {
  const locale = useLocale();
  const t = useTranslations(namespace)
  const content = (
    <div
      data-aos="fade-up"
      className={`relative ${withContainer == false ? "w-[90%] mx-auto" : ""} ${className} `}
    >
      <div className="flex gap-[10px] text-[#fff] items-center">
        <img src={urlImg} alt="i" />
        <p
          className={`text-primary-animated md:font-[500] font-[300] md:text-[30px] text-[20px] md:leading-[40px] leading-[25px]  ${locale === "ar" ? "font-cairo" : "font-Montserrat"
            }`}
        >
          {t("title")}
        </p>
      </div>

      <p
        className={`my-[10px] text-[#fff] md:font-[500] h-auto font-[400] tracking-[-0.25px] ${locale === "ar"
          ? "font-cairo md:leading-[33px] md:text-[18px] text-[16px]"
          : "font-inter md:text-[16px] text-[15px]"
          }`}
      >
        {t("description")}
      </p>
    </div>
  );

  if (!withContainer) {
    return content;
  }

  return (
    <Container className="w-[90%] mx-auto bg-cover md:mt-[-40px] mt-[-40px] min-h-[350px] mt-[40px]">
      {content}
    </Container>
  );
}
