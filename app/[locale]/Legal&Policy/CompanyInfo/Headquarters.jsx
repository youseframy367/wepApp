import { useTranslations ,useLocale } from "next-intl";

export default function Headquarters() {
  const t = useTranslations("CompanyInfo.Headquarters");
  const local =useLocale()
  return (
    <div className="w-[90%] mx-auto my-[30px]">
      <h1 data-aos="fade-up" className={`md:text-[60px] text-[30px] md:font-[600] font-[500] ${local === "en" ?"font-montserrat":"font-cairo"} text-primary text-center`}>
        {t("title")}
      </h1>

      <div className="flex md:flex-row flex-col-reverse justify-between items-center md:p-[20px] py-[20px]">
        <div className="flex flex-col gap-[20px]">
        
          <div className="flex gap-[27px] items-start">
            <img
            data-aos="fade-out"
              src="/imge/policy/CompanyInfo/UK.svg"
              alt={t("images.ukAlt")}
            />

            <div className="flex flex-col gap-[16px]">
              <h2 data-aos="fade-up" className={`md:font-[600] font-[500] md:text-[24px] text-[20px] ${local === "en" ?"font-inter":"font-cairo"} text-primary tracking-[-0.25px]`}>
                {t("uk.title")}
              </h2>

              <p data-aos="fade-up" className={`font-[400] md:text-[16px] text-[14px] tracking-[-0.25px] ${local === "en"?"font-inter":"font-cairo md:font-[500] font-[400] md:text-[18px] text-[16px]"} md:w-[432px]`}>
                {t("uk.description")}
              </p>
            </div>
          </div>

        
          <div className="flex gap-[27px] items-start">
            <img
            data-aos="fade-out"
              src="/imge/policy/CompanyInfo/EG.svg"
              alt={t("images.egAlt")}
            />

            <div className="flex flex-col gap-[16px]">
              <h2 data-aos="fade-up" className={`md:font-[600] font-[500] md:text-[24px] text-[20px] ${local === "en" ?"font-inter":"font-cairo"} text-primary tracking-[-0.25px]`}>
                {t("eg.title")}
              </h2>

              <p data-aos="fade-up" className={`font-[400] md:text-[16px] text-[14px] tracking-[-0.25px] ${local === "en"?"font-inter":"font-cairo md:font-[500] font-[400] md:text-[18px] text-[16px]"} md:w-[432px]`}>
                {t("eg.description")}
              </p>
            </div>
          </div>
        </div>

        <img
          src="/imge/policy/CompanyInfo/map.svg"
          alt={t("images.mapAlt")}
        />
      </div>
    </div>
  );
}