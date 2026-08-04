import BanerCommponnt from "../../componnt/Baner";
import Image from "next/image";
import GradientBorderBox from "../../componnt/GradiantBox";
import Worning from "../../componnt/warning";
import { useLocale, useTranslations } from "next-intl";
import { PrivacyPolicyData } from "./PrivacyPolicyDate";
import FirstPoint from "../../componnt/FirstPoint";
import Agreement from "../../componnt/Agreement";
import MapOfAccorditionGradientBox from "../../componnt/MapOfAccordionGradientBox";
export default function PrivacyPolicy() {
  const locale = useLocale();
  const fontClass = locale === "en" ? "font-inter" : "font-cairo";
  const t = useTranslations("privacyPolicy");
  return (
    <div>
      <BanerCommponnt namespace="privacyPolicy.banner" />

      <FirstPoint withContainer={false} namespace="privacyPolicy.firstPoint" />
      <Agreement nameSpace="privacyPolicy" />

      <Worning text={t("note.text")} className="my-[20px]" />
      <FirstPoint
        className={`${locale === "en" ? "mt-[-56px] md:mt-0 " : ""}`}
        namespace="privacyPolicy.disclaimer"
        urlImg="/imge/policy/ddd.png"
      />

      <MapOfAccorditionGradientBox
        data={PrivacyPolicyData}
        namespace="privacyPolicy"
        AccordionGradientBoxclassName="md:grid-cols-2"
        visibleLines={3}
        parentClassName="md:-mt-[100px] -mt-[50px]"
      />

      <GradientBorderBox className="w-[90%] mx-auto p-[20px] flex gap-[15px] mt-[20px] ">
        <Image
          data-aos="fade-out"
          src="/imge/policy/privacyPolicy/cuntactUs.png"
          alt="contactUs"
          width={70}
          height={70}
          className="md:w-auto w-[60px]"
        />
        <div className="flex flex-col gap-[5px]" data-aos="fade-up">
          <h2
            className={`md:text-[26px] text-[20px] font-[500] ${locale === "en" ? "font-montserrat" : "font-cairo"} text-primary`}
          >
            {t("contact.title")}
          </h2>

          <p
            className={`font-[400] ${fontClass} text-[14px] tracking-[-0.25px]`}
          >
            {t("contact.description")}
          </p>

          <div className="flex gap-[10px]  items-center">
            <img src="/imge/policy/privacyPolicy/email.svg" alt="Email"></img>
            <p
              className={`font-[400] ${fontClass} md:text-[14px] text-[12px] tracking-[-0.25px]`}
            >
              {t("contact.email")}
            </p>
          </div>

          <div className="flex gap-[10px]  items-center">
            <img src="/imge/policy/privacyPolicy/location.svg" alt="location"></img>
            <p
              className={`font-[400] ${fontClass} md:text-[14px] text-[12px] tracking-[-0.25px]`}
            >
              {t("contact.address")}
            </p>
          </div>
        </div>
      </GradientBorderBox>
    </div>
  );
}
