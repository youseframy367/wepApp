import BanerCommponnt from "../../componnt/Baner";
import { useLocale, useTranslations } from "next-intl";
import Title from "./TitleComponent";
import Worning from "../../componnt/warning";
import {
  optOutRightsData,
  relationshipWithPrivacy,
  contact,
} from "./NotSellOrSheraData";
import ContanerTextAndImg from "../../componnt/ContnerImgAndText";
import MapOfAccorditionGradientBox from "../../componnt/MapOfAccordionGradientBox";
import GradientBorderBox from "../../componnt/GradiantBox";
export default function NotSellOrSheer() {
  const local = useLocale();
  const t = useTranslations("doNotSellOrShare");
  const list = t.raw("nonDiscrimination.list");
  return (
    <div>
      <BanerCommponnt namespace="doNotSellOrShare.banner" />

      <div className="w-[90%] md:flex-row flex-col  mx-auto flex items-center justify-between ">
        <img
          src="/imge/policy/DoNotSellOrShare/Ltd.svg"
          alt="Ltd"
          className="md:my-auto my-[30px] md:w-auto w-[90%]"
        />
        <div className="md:w-[60%] w-[100%] flex flex-col">
          <h2
            className={`${local === "en" ? "font-montserrat" : "font-cairo"} font-[600] md:text-[60px] text-[35px] text-primary`}
          >
            {t("Policy.companyTitle")}
          </h2>
          <p
            className={`${local === "en" ? "font-inter" : "font-cairo"} font-[400] text-[16px] leading-[26px] tracking-[-0.25px]`}
          >
            {t("Policy.description")}
            <br />
            {t("Policy.laws.ccpa")}
            <br />
            {t("Policy.laws.cpra")}
            <br />
            {t("Policy.laws.gdpr")}
            <br />
            {t("Policy.laws.egypt")}
            <br />
            {t("Policy.footer")}
          </p>
        </div>
      </div>
      <Title titleKey="importantLegalNotice" />
      <Worning
        img="/imge/policy/DoNotSellOrShare/EXPROIcon.svg"
        text={t("warning.text")}
      />
      <Title titleKey="sharingLegalDefinition" />
      <ContanerTextAndImg
        namespace="doNotSellOrShare.legalDefinition"
        img="/imge/policy/DoNotSellOrShare/LegalDefinition.svg"
        positionEffect="50%"
      />
      <Title titleKey="optOutRights" />
      <MapOfAccorditionGradientBox
        data={optOutRightsData}
        namespace="doNotSellOrShare.optOutRights"
        CuntEffect={0}
      />
      <Title titleKey="globalPrivacyControl" />
      <ContanerTextAndImg
        namespace="doNotSellOrShare.globalPrivacyControl"
        img="/imge/policy/DoNotSellOrShare/chexkHand.svg"
        positionEffect="20%"
      />
      <Title titleKey="nonDiscrimination" />
      <p
        className={`${local === "ar" ? "font-cairo" : ""} font-[500] mx-[5%] mt-[0px]`}
      >
        {t("nonDiscrimination.description")}
      </p>

      <GradientBorderBox className="w-[90%] mx-auto py-[10px] md:px-[50px] px-[10px] md:h-[237px] h-auto mt-[20px] text-[#fff] flex flex-col justify-around">
        {list.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="flex items-center md:gap-[10px] gap-[7px]"
          >
            <img src="/imge/checkBox.svg" alt="icon" width="30" height="30" />

            <p className="md:font-[400] font-[300] md:text-[18px] text-[16px] tracking-[-0.25px]">
              {item}
            </p>
          </div>
        ))}
      </GradientBorderBox>
      <Title titleKey="relationshipWithPrivacyLaws" />
      <MapOfAccorditionGradientBox
        data={relationshipWithPrivacy}
        namespace="doNotSellOrShare"
        CuntEffect={1}
      />
      <Title titleKey="contactInformation" />
      <MapOfAccorditionGradientBox
        data={contact}
        namespace="doNotSellOrShare.contactInformation"
        CuntEffect={0}
      />
    </div>
  );
}
