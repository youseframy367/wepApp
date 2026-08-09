import BanerCommponnt from "../../componnt/Baner";
import FirstPoint from "../../componnt/FirstPoint";
import MapOfAccorditionGradientBox from "../../componnt/MapOfAccordionGradientBox";
import AccordionGradientBox from "../../componnt/AccordionGradientBox";
import {  useTranslations } from "next-intl";
import { sections } from "./DisclaimerData";
export default function DisclaimerContent() {
  const t = useTranslations("disclaimerOfContent");

  return (
    <div>
      <BanerCommponnt namespace="disclaimerOfContent.banner" />

      <FirstPoint
        withContainer={false}
        namespace="disclaimerOfContent.natureOfService"
      />

      <MapOfAccorditionGradientBox
        data={sections}
        namespace="disclaimerOfContent.sections"
        AccordionGradientBoxclassName=" md:grid-cols-2"
        visibleLines={3}
        parentClassName="md:mt-[10px]"
        CuntEffect={1}
      />

      <AccordionGradientBox
        className="w-[90%] mx-auto my-[30px]"
        icon="/imge/policy/DisclaimerOfContent/ACCEPTANCE.svg"
        title={t("acceptance.title")}
        paragraph={<p>{t("acceptance.description")}</p>}
        visibleLines={2}
      />
    </div>
  );
}
