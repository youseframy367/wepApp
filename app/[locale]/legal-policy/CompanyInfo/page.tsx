import BanerCommponnt from "../../component/Banner";
import { useTranslations, useLocale } from "next-intl";
import PrivacyPolicyHero from "../../component/PrivacyPolicyHero";
import ContanerTextAndImg from "../../component/ContainerImgAndText";
import Agreement from "../../component/Agreement";
import Title from "../../component/TitleComponent";
import ComponntBox from "../../component/BoxComponent";
import { ImportantLegalNotice, Differentiators } from "./CompanyInfoData";
import Headquarters from "./Headquarters";
import UXEnhancement from "./UXEnhancement";
import FinalConclusion from "./FinalConclusion";
import EvaluationSummary from "./EvaluationSummary";

import MapOfAccorditionGradientBox from "../../component/MapOfAccordionGradientBox";
import AccordionGradientBox from "../../component/AccordionGradientBox";
import { generateSeo } from "@/Metadata/Seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generateSeo({ locale, namespace: "Seo.CompanyInfo", path: "/legal-policy/CompanyInfo" });
}
export default function CompanyInfo() {
  const t = useTranslations("CompanyInfo");
  const locale = useLocale();
  return (
    <div>
      <BanerCommponnt
        namespace="CompanyInfo.Banner"
        imgUrl="/imge/policy/CompanyInfo/CompanyInfo.svg"
        classNameImg="w-[193px] md:mt-[270px] mt-[200px] "
        classNameContainer="md:mt-[-150px]"
      />
      <PrivacyPolicyHero
        nameSpace="CompanyInfo"
        className="mt-[200px]"
        showLaws={false}
        img="/imge/policy/CompanyInfo/Egypt.svg"
        effect={true}
      />
      <div className="w-[90%] mx-auto flex md:flex-row flex-col-reverse justify-between relative items-center my-[80px] ">
        <img
          src="/imge/effectTwo.svg"
          className="absolute md:top-[70%] top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          alt="effect"
        />

        <div className="flex flex-col gap-[22px] z-50  ">
          <h2
            data-aos="fade-up"
            className="md:font-[600] font-[500] md:text-[60px] text-[40px] text-primary font-montserrat"
          >
            {t("OurMission.title")}
          </h2>
          <p
            data-aos="fade-up"
            className={`${locale === "en" ? "font-[400]" : "font-[500] text-[18px] leading-[32px]"} tracking-[-0.25px] md:w-[742px]`}
          >
            {t("OurMission.description")}
          </p>
        </div>
        <img
          data-aos="fade-up"
          src="/imge/policy/CompanyInfo/OurMission.svg"
          alt="Our Mission"
          className="z-50 mx-[30px]"
        />
      </div>
      <div className="flex flex-col items-center relative">
        <h1
          data-aos="fade-up"
          className="md:font-[600] font-[500] md:text-[60px] text-[40px] text-primary mx-auto"
        >
          {t("WhatWeOffer.title")}
        </h1>
        <ContanerTextAndImg
          namespace="CompanyInfo.Offer"
          ul={true}
          img="/imge/policy/CompanyInfo/Offer.svg"
          effect="/imge/effectThree.svg"
          positionEffect="50%"
        />
      </div>
      <div className="flex flex-col gap-[15px] items-center relative mt-[30px]">
        <img
          data-aos="fade-up"
          src="/imge/effectTwo.svg"
          className="absolute md:top-[50%] top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          alt="effect"
        />
        <h1
          data-aos="fade-up"
          className="md:font-[600] font-[500] md:text-[60px] text-[30px] text-primary mx-auto"
        >
          {t("ComplianceLegality.title")}
        </h1>
        <p
          data-aos="fade-up"
          className="font-[400] md:text-[16px] text-[12px] mt-[-10px] tracking-[-0.25px]"
        >
          {t("ComplianceLegality.description")}
        </p>
        <Agreement
          nameSpace="CompanyInfo"
          imgOne="/imge/policy/CompanyInfo/Egyption.svg"
          imgTwo="/imge/policy/CompanyInfo/USA.svg"
          className="md:flex-row flex-col-reverse md:gap-auto gap-[20px]"
        />
      </div>
      <Title titleKey="ImportantLegalNotice" />
      <ComponntBox
        data={ImportantLegalNotice}
        namespace="CompanyInfo.ImportantLegalNotice"
      />
      <Headquarters />
      <AccordionGradientBox
        icon="/imge/policy/CompanyInfo/contact.svg"
        title={t("ContactUs.title")}
        paragraph={t("ContactUs.description")}
        className="w-[90%] mx-auto"
      />
      <div className="flex flex-col gap-[15px] items-center  mt-[60px]">
        <h1
          data-aos="fade-up"
          className="font-[600]  md:text-[60px] text-[23px] text-primary mx-auto"
        >
          {t("KeyStrengths.title")}
        </h1>
        <MapOfAccorditionGradientBox
          data={Differentiators}
          namespace="CompanyInfo.Differentiators"
          CuntEffect={1}
          AccordionGradientBoxclassName="md:grid-cols-2"
          visibleLines={3}
        />
      </div>
      <UXEnhancement />
      <EvaluationSummary />
      <FinalConclusion />
    </div>
  );
}
