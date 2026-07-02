import { useLocale } from "next-intl";
import Container from "./contaner";

export default function FirstPoint({
  urlImg = "/imge/agreement/reseller/i.svg",
  titleAr = "",
  titleEn = "",
  pragrafAr = "",
  pragrafEn = "",
  withContainer = true, 
}) {
  const local = useLocale();

  const content = (
    <div data-aos="fade-up" className={`relative ${withContainer == false ? "w-[90%] mx-auto":""}`}>
      <div className="flex gap-[10px] text-[#fff] items-center">
        <img src={urlImg} alt="i" />
        <p
          className={`text-primary md:font-[500] font-[400] md:text-[30px] text-[20px] md:leading-[40px] leading-[25px] ${
            local === "ar" ? "font-cairo" : "font-Montserrat"
          }`}
        >
          {local === "ar" ? titleAr : titleEn}
        </p>
      </div>

      <p
        className={`my-[10px] text-[#fff] md:font-[500] font-[400] tracking-[-0.25px] ${
          local === "ar"
            ? "font-cairo md:leading-[33px] md:text-[18px] text-[16px]"
            : "font-inter md:text-[16px] text-[15px]"
        }`}
      >
        {local === "ar" ? pragrafAr : pragrafEn}
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