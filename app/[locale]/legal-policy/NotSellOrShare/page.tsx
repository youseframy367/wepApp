import BanerCommponnt from "../../component/Banner";
import { useLocale, useTranslations } from "next-intl";
import Title from "../../component/TitleComponent";
import Worning from "../../component/Warning";
import {
  optOutRightsData,
  relationshipWithPrivacy,
  contact,
} from "./NotSellOrSheraData";
import Agreement from "../../component/Agreement"
import PrivacyPolicyHero from "../../component/PrivacyPolicyHero"
import ContanerTextAndImg from "../../component/ContainerImgAndText";
import MapOfAccorditionGradientBox from "../../component/MapOfAccordionGradientBox";
import { generateSeo } from "@/Metadata/Seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generateSeo({ locale, namespace: "Seo.NotSellOrShare", path: "/legal-policy/NotSellOrShare" });
}
export default function NotSellOrSheer() {
  const locale = useLocale();
  const t = useTranslations("doNotSellOrShare");
  return (
    <div>
      <BanerCommponnt namespace="doNotSellOrShare.banner" />
      <PrivacyPolicyHero nameSpace="doNotSellOrShare"/>
   
      <Title titleKey="importantLegalNotice" />
      <Worning
        img="/imge/policy/DoNotSellOrShare/EXPROIcon.webp"
        text={t("warning.text")}
      />
      <Title titleKey="sharingLegalDefinition" />
      <ContanerTextAndImg
        namespace="doNotSellOrShare.legalDefinition"
        img="/imge/policy/DoNotSellOrShare/LegalDefinition.webp"
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
        img="/imge/policy/DoNotSellOrShare/chexkHand.webp"
        positionEffect="20%"
      />
      <Title titleKey="nonDiscrimination" />
      <p
        className={`${locale === "ar" ? "font-cairo" : ""} font-[500] mx-[5%] mt-[-10px] mb-[17px]`}
      >
        {t("text")}
      </p>
      <Agreement nameSpace="doNotSellOrShare" className="mt-[10px]" />


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
