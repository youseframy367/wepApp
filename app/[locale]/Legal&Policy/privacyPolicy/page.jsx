import BanerCommponnt from "../../componnt/Baner";
import GradientBorderBox from "../../componnt/GradiantBox";
import Worning from "../../componnt/warning";
import { useLocale, useTranslations } from "next-intl";
import { PrivacyPolicyData } from "./PrivacyPolicyDate";
import FirstPoint from "../../componnt/FirstPoint";
import AccordionGradientBox from "../../componnt/AccordionGradientBox";
import MapOfAccorditionGradientBox from "../../componnt/MapOfAccordionGradientBox";
export default function PrivacyPolicy() {
  const local = useLocale();
  const t = useTranslations("privacyPolicy");
  const notes = t.raw("notes");
  return (
    <div>
      <BanerCommponnt namespace="privacyPolicy.banner" />

      <FirstPoint withContainer={false} namespace="privacyPolicy.firstPoint" />

      <GradientBorderBox className="w-[90%] mx-auto py-[10px] md:px-[50px] px-[10px] md:h-[237px] h-auto mt-[20px] text-[#fff] flex flex-col justify-around">
        {notes.map((item, index) => (
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

        <p
          data-aos="fade-up"
          className="md:font-[400] font-[300] md:text-[18px] text-[16px] tracking-[-0.25px]"
        >
          {t("agreement")}
        </p>
      </GradientBorderBox>
      <Worning text={t("note.text")} className="my-[20px]" />
      <FirstPoint
        className={`${local === "en" ? "mt-[-56px] md:mt-0 " : ""}`}
        namespace="privacyPolicy.disclaimer"
        urlImg="/imge/policy/ddd.svg"
      
      />

      <MapOfAccorditionGradientBox
        data={PrivacyPolicyData}
        namespace="privacyPolicy"
        AccordionGradientBoxclassName="md:grid-cols-2"
        visibleLines={3}
        parentClassName="md:-mt-[100px] -mt-[50px]"
      />

      <GradientBorderBox className="w-[90%] mx-auto p-[20px] flex gap-[15px] mt-[20px] ">
        <img
          src="/imge/policy/cuntactUs.svg"
          alt="contactUs"
          className="md:w-auto w-[60px]"
        />
        <div className="flex flex-col gap-[5px]">
          <h2 className={`md:text-[26px] text-[20px] font-[500] ${local ==="en"  ?"font-montserrat":"font-cairo"} text-primary`}>
            {t("contact.title")}
          </h2>

          <p className={`font-[400] ${local ==="en"  ?"font-inter":"font-cairo"} text-[14px] tracking-[-0.25px]`}>
            {t("contact.description")}
          </p>

          <div className="flex gap-[10px]  items-center">
            <img src="/imge/policy/email.svg" alt="Email"></img>
            <p className={`font-[400] ${local ==="en" ?" font-inter":"font-cairo"} md:text-[14px] text-[12px] tracking-[-0.25px]`}>
              {t("contact.email")}
            </p>
          </div>

          <div className="flex gap-[10px]  items-center">
            <img src="/imge/policy/location.svg" alt="location"></img>
            <p className={`font-[400] ${local ==="en" ?" font-inter":"font-cairo"} md:text-[14px] text-[12px] tracking-[-0.25px]`}>
              {t("contact.address")}
            </p>
          </div>
        </div>
      </GradientBorderBox>
    </div>
  );
}
