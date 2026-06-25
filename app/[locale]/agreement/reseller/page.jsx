"use client";
import { useLocale } from "next-intl";

import Container from "../../componnt/contaner";
import InfoOnBox from "./infoOnBox";
export default function AgreementReseller() {



  const local = useLocale();
  return (
    <section>
      <Container className="md:h-[400px] h-[270px]  w-[100%]  md:bg-cover md:mt-[-90px] mt-[-70px] ">
        <div className="w-[100%] h-[115px] flex flex-col gap-[15px] justify-center items-center md:mt-[100px] mt-[70px]">
          <h1
            className={`font-[500] text-center px-auto
                  md:text-[46px] text-[30px] ${local === "ar" ? "font-cairo" : "font-Montserrat"}
                    bg-gradient-to-r from-[#FCD570] via-[#DB9D39] via-[#FEF2B4] via-[#F5C35E] via-[#F5C35E] to-[#FCD570] 
                    bg-clip-text text-transparent 

                
                `}
          >
            {" "}
            {local === "en"
              ? "Agreement reseller"
              : "اتفاقية تقديم خدمات العميل"}
          </h1>

          <p
            className={`font-[500] text-[19px] md:text-[22px] ${local === "ar" ? "font-cairo" : "font-inter "}
                 bg-gradient-to-r from-[#F0DFC5] to-[#DAB377] 
                    bg-clip-text text-transparent  leading-[20px]
                `}
          >
            {local === "en"
              ? " Effective Date: 20 February 2026"
              : "تاريخ السريان: 20 فبراير 2026"}
          </p>
          <p
            className={`${local === "ar" ? "font-cairo" : "font-inter "} font-[500] text-[10px] md:text-[14px]
                  bg-gradient-to-r from-[#FCD570] via-[#DB9D39] via-[#FEF2B4] via-[#F5C35E] via-[#F5C35E] to-[#FCD570] 
                    bg-clip-text text-transparent  leading-[20px]
                `}
          >
            {local === "en"
              ? "Issued By: Exclusive LTD.  I  Website: exclusivemovies.com"
              : "صادر عن: Exclusive Movies LTD | الموقع الإلكتروني: exclusivemovies.com"}
          </p>
        </div>
      </Container>
      <InfoOnBox/>
      </section>
  )
}