import BanerCommponnt from "../../componnt/Baner";
import GradientBorderBox from "../../componnt/GradiantBox";
import Worning from "../../componnt/warning";
import { useLocale, useTranslations } from "next-intl";
import FirstPoint from "../../componnt/FirstPoint";
import { LegalTermsOfTheContract } from "./AgreementResellerData";
import MapOfAccorditionGradientBox from "../../componnt/MapOfAccordionGradientBox";
import { choicesAdd } from "./AgreementResellerData";
import CheckAgreemnt from "../../componnt/CheckAgreement";
export default function AgreementReseller() {
  const local = useLocale();
  const t = useTranslations("AgreementReseller");
  const notes = t.raw("notes.list");

  return (
    <section>
      <BanerCommponnt namespace="AgreementReseller.banner" />
      <GradientBorderBox className="w-[90%] mx-auto py-[10px] md:px-[50px] px-[10px] md:h-[237px] h-auto text-[#fff] flex flex-col justify-around">
        {notes.map((item, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className={"flex items-center md:gap-[10px] gap-[7px] "}
          >
            <img
              src="/imge/checkBox.svg"
              alt="icon"
              width="30px"
              height="30px"
            ></img>
            <div className="flex flex-col gap-[16px]">
              <p
                className={`  md:font-[400] font-[300] md:text-[18px] text-[16px]  tracking-[-0.25px]${local === "ar" ? "  font-cairo  " : "font-inter"} `}
              >
                {item}
              </p>
            </div>
          </div>
        ))}
        <p
          data-aos="fade-up"
          className={` md:px-[40px] px-[40px] md:font-[400] font-[300] md:text-[18px] text-[16px] tracking-[-0.25px]  ${local === "ar" ? "  font-cairo  " : "font-inter "} `}
        >
          {t("notes.footer.text")}
          <span className=" text-[#DB9D39]">{t("notes.footer.highlight")}</span>
        </p>
      </GradientBorderBox>

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
