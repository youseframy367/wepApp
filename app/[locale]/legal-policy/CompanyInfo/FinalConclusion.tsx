import Agreement from "../../component/Agreement";
import { useTranslations ,useLocale } from "next-intl";
export default function FinalConclusion() {
  const t=useTranslations("CompanyInfo.FinalConclusion")
  const locale=useLocale()
  return (
    <div>
      <div className="flex flex-col items-center mt-[40px] ">
        <h1 className="md:font-[600] font-[500] md:text-[60px] text-[30px] text-primary font-montserrat">
          {t("title")}
        </h1>

        <p className={`${locale === "en"?"font-[400] font-inter":"font-[500] font-cairo"} md:text-[16px] text-[14px]  tracking-[-0.25px]`}>
          {t("subtitle")}
        </p>
      </div>
      <Agreement
        nameSpace="agrrmant"
        className="my-[30px]"
        imgOne="/imge/policy/GlobalCompliance/stor.webp"
        imgTwo="/imge/policy/GlobalCompliance/rr.webp"
        imgThree="/imge/policy/GlobalCompliance/world.webp"
      />
      <p className={`${locale === "en" ?"font-inter":"font-cairo md:font-[500] font-[400] md:text-[16px] text-[12px]"} font-[400] md:text-[12px] text-[12px] md:w-auto w-[90%] mx-auto tracking-[-0.25px] text-center`}>
        {t("description")}
       <br/> <span className="md:font-[700] font-[600]">
        {t("highlight")}
        </span>
      </p>
    </div>
  );
}
