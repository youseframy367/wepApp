import BanerCommponnt from "../../componnt/Baner";
import Worning from "../../componnt/warning";
import { useLocale, useTranslations } from "next-intl";
import FirstPoint from "../../componnt/FirstPoint";
import { LegalTermsOfTheContract } from "./AgreementResellerData";
import MapOfAccorditionGradientBox from "../../componnt/MapOfAccordionGradientBox";
import { choicesAdd } from "./AgreementResellerData";
import CheckAgreemnt from "../../componnt/CheckAgreement";
import Agreement from "../../componnt/Agreement";
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
        parentClassName="md:-mt-[100px] -mt-[50px]"
        visibleLines={3}
        CuntEffect={1}
      />
      <div
        className="flex gap-[15px] items-center w-[90%] mx-auto my-[30px]"
        data-aos="fade-up"
      >
        <img src="/imge/agreement/reseller/add.svg" alt="addIcon"></img>
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

      <CheckAgreemnt agreementType="reseller" />
    </section>
  );
}
