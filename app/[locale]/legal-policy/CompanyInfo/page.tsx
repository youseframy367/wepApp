import Image from "next/image";
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
        imgUrl="/imge/policy/CompanyInfo/CompanyInfo.webp"
        classNameImg="w-[193px] md:mt-[270px] mt-[200px] "
        classNameContainer="md:mt-[-150px]"
      />
      <PrivacyPolicyHero
        nameSpace="CompanyInfo"
        className="mt-[200px]"
        showLaws={false}
        img="/imge/policy/CompanyInfo/Egypt.webp"
        effect={true}
      />
      <div className="w-[90%] mx-auto flex md:flex-row flex-col-reverse justify-between relative items-center my-[80px] ">
        <Image
        src="/imge/effectTwo.webp"
        className="absolute md:top-[70%] top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none w-[100%] h-auto"
        alt="effect"
        loading="lazy"
        unoptimized
        width="1280"
        height="508"
      />

        <div className="flex flex-col gap-[22px] z-50 min-w-0 flex-1  ">
          <h2
            data-aos="fade-up"
            className="md:font-[600] font-[500] md:text-[52px] lg:text-[60px] text-[36px] text-primary font-montserrat"
          >
            {t("OurMission.title")}
          </h2>
          <p
            data-aos="fade-up"
            className={`${locale === "en" ? "font-[400]" : "font-[500] text-[18px] leading-[32px]"} tracking-[-0.25px] max-w-[620px]`}
          >
            {t("OurMission.description")}
          </p>
        </div>
        <Image
        src="/imge/policy/CompanyInfo/OurMission.webp"
        data-aos="fade-up"
        alt="Our Mission"
        sizes="(max-width: 768px) 40vw, 38vw"
        className="z-50 mx-[10px] w-full max-w-[240px] md:max-w-[300px] lg:max-w-[360px] h-auto"
        loading="lazy"
        unoptimized
        width="242"
        height="222"
      />
      </div>
      <div className="flex flex-col items-center relative">
        <h1
          data-aos="fade-up"
          className="md:font-[600] font-[500] md:text-[44px] lg:text-[60px] text-[40px] text-primary mx-auto"
        >
          {t("WhatWeOffer.title")}
        </h1>
        <ContanerTextAndImg
          namespace="CompanyInfo.Offer"
          ul={true}
          img="/imge/policy/CompanyInfo/Offer.webp"
          effect="/imge/effectThree.webp"
          positionEffect="50%"
        />
      </div>
      <div className="flex flex-col gap-[15px] items-center relative mt-[30px]">
        <Image
        src="/imge/effectTwo.webp"
        data-aos="fade-up"
        className="absolute md:top-[50%] top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none w-[100%] h-auto"
        alt="effect"
        loading="lazy"
        unoptimized
        width="1280"
        height="508"
      />
        <h1
          data-aos="fade-up"
          className="md:font-[600] font-[500] md:text-[44px] lg:text-[60px] text-[30px] text-primary mx-auto"
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
          imgOne="/imge/policy/CompanyInfo/Egyption.webp"
          imgTwo="/imge/policy/CompanyInfo/USA.webp"
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
        icon="/imge/policy/CompanyInfo/contact.webp"
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
