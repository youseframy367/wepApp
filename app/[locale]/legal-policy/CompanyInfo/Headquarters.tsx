import Image from "next/image";
import { useTranslations ,useLocale } from "next-intl";

export default function Headquarters() {
  const t = useTranslations("CompanyInfo.Headquarters");
  const locale =useLocale()
  return (
    <div className="w-[90%] mx-auto my-[30px]">
      <h1 data-aos="fade-up" className={`md:text-[60px] text-[30px] md:font-[600] font-[500] ${locale === "en" ?"font-montserrat":"font-cairo"} text-primary text-center`}>
        {t("title")}
      </h1>

      <div className="flex md:flex-row flex-col-reverse justify-between items-center md:p-[20px] py-[20px]">
        <div className="flex flex-col gap-[20px]">
        
          <div className="flex gap-[27px] items-start">
            <Image
        alt=""
        src="/imge/policy/CompanyInfo/UK.webp"
        data-aos="fade-out"
        loading="lazy"
        unoptimized
        width="50"
        height="50"
      />

            <div className="flex flex-col gap-[16px]">
              <h2 data-aos="fade-up" className={`md:font-[600] font-[500] md:text-[24px] text-[20px] ${locale === "en" ?"font-inter":"font-cairo"} text-primary tracking-[-0.25px]`}>
                {t("uk.title")}
              </h2>

              <p data-aos="fade-up" className={`font-[400] md:text-[16px] text-[14px] tracking-[-0.25px] ${locale === "en"?"font-inter":"font-cairo md:font-[500] font-[400] md:text-[18px] text-[16px]"} md:w-[432px]`}>
                {t("uk.description")}
              </p>
            </div>
          </div>

        
          <div className="flex gap-[27px] items-start">
            <Image
        alt=""
        src="/imge/policy/CompanyInfo/EG.webp"
        data-aos="fade-out"
        loading="lazy"
        unoptimized
        width="50"
        height="50"
      />

            <div className="flex flex-col gap-[16px]">
              <h2 data-aos="fade-up" className={`md:font-[600] font-[500] md:text-[24px] text-[20px] ${locale === "en" ?"font-inter":"font-cairo"} text-primary tracking-[-0.25px]`}>
                {t("eg.title")}
              </h2>

              <p data-aos="fade-up" className={`font-[400] md:text-[16px] text-[14px] tracking-[-0.25px] ${locale === "en"?"font-inter":"font-cairo md:font-[500] font-[400] md:text-[18px] text-[16px]"} md:w-[432px]`}>
                {t("eg.description")}
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-[35%] md:max-w-[300px] h-[90px] md:h-[220px] min-w-0">
          <Image
            alt=""
            src="/imge/policy/CompanyInfo/map.webp"
            loading="lazy"
            unoptimized
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}