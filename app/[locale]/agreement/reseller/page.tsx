import BanerCommponnt from "../../component/Banner";
import Worning from "../../component/Warning";
import { useLocale, useTranslations } from "next-intl";
import FirstPoint from "../../component/FirstPoint";
import { LegalTermsOfTheContract } from "./AgreementResellerData";
import MapOfAccorditionGradientBox from "../../component/MapOfAccordionGradientBox";
import { choicesAdd } from "./AgreementResellerData";
import CheckAgreement from "../../component/CheckAgreement";
import Agreement from "../../component/Agreement";
import { generateSeo } from "@/Metadata/Seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generateSeo({ locale, namespace: "Seo.AgreementReseller", path: "/agreement/reseller" });
}
export default function AgreementReseller() {
  const local = useLocale();
  const t = useTranslations("AgreementReseller");

  return (
    <section>
      <BanerCommponnt namespace="AgreementReseller.banner" />
      <Agreement nameSpace="AgreementReseller" />

      <Worning className="mt-[30px]" text={t("warning.text")} />
      <FirstPoint namespace="AgreementReseller.firstPoint" />
      <MapOfAccorditionGradientBox
        data={LegalTermsOfTheContract}
        namespace="LegalTermsOfTheContract"
        AccordionGradientBoxclassName=" md:grid-cols-2"
        parentClassName="md:-mt-[100px] -mt-[60px]"
        visibleLines={3}
        CuntEffect={1}
      />
      <div
        className="flex gap-[15px] items-center w-[90%] mx-auto my-[30px]"
        
      >
        <img src="/imge/agreement/reseller/add.webp" alt="addIcon"></img>
        <p
          className={` text-primary font-[500] md:text-[30px] text-[20px] md:leading-[40px] leading-[25px] ${local === "ar" ? "font-cairo " : "font-montserrat"}`}
        >
          {t("optionalAddendums.title")}
        </p>
      </div>
      <MapOfAccorditionGradientBox
        data={choicesAdd}
        namespace="optionalAddendums"
        CuntEffect={1}
      />

      <CheckAgreement agreementType="reseller" />
    </section>
  );
}
