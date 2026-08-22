"use client";
import Image from "next/image";
import BanerCommponnt from "../../component/Banner";
import Worning from "../../component/Warning";
import { agreementCustomerData } from "./AgreementCustomerDate";
import GradientBorderBox from "../../component/GradientBox";
import MapOfAccorditionGradientBox from "../../component/MapOfAccordionGradientBox";
import { useTranslations , useLocale } from "next-intl";
import PrivcyComponnt from "../../component/ContainerPrivacy";
import { DeteGoToBage } from "./AgreementCustomerDate";
import CheckAgreement from "../../component/CheckAgreement";
export default function AgreementCustomer(){
  const t = useTranslations("agreementCustomer");
  const local = useLocale();
  
  return (
    <section >
      <BanerCommponnt namespace="agreementCustomer.banner" />
      <Worning text={t("warning.text")} />
      <MapOfAccorditionGradientBox
        namespace="agreementCustomer.agreementCustomerSectiones"
        data={agreementCustomerData}
        AccordionGradientBoxclassName=" md:grid-cols-2"
        parentClassName="my-[40px]"
      />
      <GradientBorderBox className="w-[90%] my-[40px] mx-[auto] md:h-[143px] h-[155px] flex gap-[24px] items-center px-[20px]">
        <div
          data-aos="fade-up"
          className={`${local === "ar" ? "font-cairo " : ""} flex md:gap-[20px] gap-[10px]`}
        >
          <Image src="/imge/agreement/customer/about.webp" alt="aboutIcon" width={114} height={108} loading="lazy"  className="w-auto md:w-[120px]" />
          <div className=" flex flex-col md:gap-[10px] gap-[5px]">
            <h2
              className={`${local === "ar" ? "font-cairo md:text-[30px] md:font-[500] text-[20px] font-[400]" : "md:font-[500] text-[20px] mb-[-5px]"} text-start text-primary font-medium md:text-[26px] min-[425px]:text-xl text-base`}
            >
              {t("aboutUs.title")}
            </h2>
            <p
              className={` ${local === "ar" ? "font-cairo md:font-[500] font-[400] " : "font-inter"} font-[400] md:leading-[22px] leading-[20px] text-[#fff] md:text-[14px] text-[12px] md:w-[90%]`}
            >
              {t("aboutUs.description")}
            </p>
          </div>
        </div>
      </GradientBorderBox>
      <PrivcyComponnt data={DeteGoToBage} namespace="agreementCustomer" classNameP="md:h-[110px]" />
      <CheckAgreement agreementType="customer" />

    
    </section>
  );
}
