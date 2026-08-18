import BanerCommponnt from "../../component/Banner";
import { useTranslations, useLocale } from "next-intl";
import { OurMission } from "./OurMissionData";
import GradientBorderBox from "../../component/GradientBox";
import { generateSeo } from "@/Metadata/Seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generateSeo({ locale, namespace: "Seo.OurMission", path: "/legal-policy/OurMission" });
}
export default function OurMissionPage() {
  const t = useTranslations("OurMission");
  const locale = useLocale();
  return (
    <div className="flex flex-col">
      <BanerCommponnt
        namespace="OurMission.banner"
        imgUrl="/imge/policy/OurMission/OurMission.webp"
        classNameImg="w-[193px] mt-[270px] "
        classNameContainer="md:mt-[-150px]"
      />
      <p
        className={`md:mt-[170px] mt-[240px] md:max-w-[980px] w-[90%] text-center mx-auto ${locale === "en" ? "font-inter" : "font-cairo"} font-[500] tracking-[-0.25px]`}
      >
        {t("text")}
      </p>
      <h1 className="md:font-[600] font-[500] md:text-[44px] text-[30px] md:text-start text-center text-primary font-montserrat mx-auto my-[40px]">
        {t("heading")}
      </h1>
      <div className="flex flex-col gap-[40px]">
        {OurMission.map((item, index) => (
          <GradientBorderBox
            key={index}
            className=" mx-auto w-[85%] flex gap-[20px] py-[20px] px-[10px]"
          >
            <img
              src={item.img}
              alt="icon"
              className={` ${locale === "en" ? "md:ml-[-60px] ml-[-50px] " : "md:mr-[-60px] mr-[-50px]"} z-[91] relative md:w-[110px] w-[80px] `}
            />
            <div className="flex flex-col gap-[8px]">
              <h2
                className={`md:font-[700] font-[600] md:text-[26px] text-[20px] text-primary ${locale === "en" ? "font-montserrat" : "font-cairo"}`}
              >
                {t(`containers.${item.key}.title`)}
              </h2>
              <p
                className={`${locale === "en" ? "md:text-[14px] text-[12px]" : "md:text-[16px] text-[14px] leading-[24px]"} font-[500]`}
              >
                {t(`containers.${item.key}.description`)}
              </p>
            </div>
          </GradientBorderBox>
        ))}
      </div>
    </div>
  );
}
