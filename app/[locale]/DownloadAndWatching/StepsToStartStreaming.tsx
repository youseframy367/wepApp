import Image from "next/image";
import BlackBox from "../component/BlackBox";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
export default function BlatformSupport() {
  const t = useTranslations("DownloadAndWatching.platformSupport");
  const locale = useLocale();
  return (
    <div className="w-[90%] mx-auto my-[40px]">
     

      <div className="w-[90%] flex flex-col items-center mx-auto my-[60px]">
        <h1
          
          className={`${locale === "en" ? "font-inter" : "font-cairo"} font-[600] md:text-[40px] text-[20px] leading-[42px] text-primary md:mt-[50px] mt-`}
        >
          {t("title")}
        </h1>
        <div className="w-[100%] md:my-[50px] my-[30px] flex md:flex-row flex-col md:gap-[10px] gap-[15px] relative">
          <Image
        src="/imge/effectTwo.webp"
        className="absolute md:top-[0%] top-[-8%]  left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none w-[100%] h-auto"
        alt="effect"
        loading="lazy"
        unoptimized
        width="1280"
        height="508"
      />
          <BlackBox borderEfect={false} className="flex flex-col  justify-center items-center md:w-[33%] w-[100%] h-[175px]">
            <h1
              
              className={`${locale === "en" ? "font-montserrat" : "font-cairo"} md:font-[900] font-[800] text-[60px]  mt-[-10px]  text-primary`}
            >
              {t("stepOne.id")}
            </h1>
            <h2
              
              className={`${locale === "en" ? "font-montserrat" : "font-cairo"}  font-[500] text-[20px] text-primary mt-[-15px]`}
            >
             {t("stepOne.title")}
            </h2>
            <p
              
              className={`w-[180px] mt-[10px] ${locale === "ar" ? "font-montserrat font-[400]" : "font-cairo font-[500]"} text-[12px] leading-[17px] text-center`}
            >
              {t("stepOne.description")}
            </p>
          </BlackBox>
          <BlackBox borderEfect={false} className="flex flex-col  justify-center items-center md:w-[33%] w-[100%] h-[175px]">
            <h1
              
              className={`${locale === "en" ? "font-montserrat" : "font-cairo"} md:font-[900] font-[800] text-[60px]  mt-[-10px]  text-primary`}
            >
              {t("stepTwo.id")}
            </h1>
            <h2
              
              className={`${locale === "en" ? "font-montserrat" : "font-cairo"}  font-[500] text-[20px] text-primary mt-[-15px]`}
            >
              {t("stepThree.title")}
            </h2>
            <p
              
              className={`w-[241px] mt-[10px] ${
                locale === "en" ? "font-montserrat" : "font-cairo"
              } font-[400] text-[12px] leading-[17px] text-center`}
            >
              {t("stepThree.description")}
            </p>
          </BlackBox>
          <BlackBox borderEfect={false} className="flex flex-col justify-center items-center md:w-[33%] w-[100%] h-[175px]">
            <h1
              
              className={`${locale === "en" ? "font-montserrat" : "font-cairo"} md:font-[900] font-[800] text-[60px]  mt-[-10px] text-primary`}
            >
              {t("stepThree.id")}
            </h1>

            <h2
              
              className={`${locale === "en" ? "font-montserrat" : "font-cairo"} font-[500] text-[20px] text-primary mt-[-15px]`}
            >
              {t("stepThree.title")}
            </h2>

            <p
              
              className={`w-[241px] mt-[10px] ${
                locale === "en" ? "font-montserrat" : "font-cairo"
              } font-[400] text-[12px] leading-[17px] text-center`}
            >
              {t("stepThree.description")}
            </p>
          </BlackBox>
        </div>
      </div>
     
  
    </div>
  );
}
