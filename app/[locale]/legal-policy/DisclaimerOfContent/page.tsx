import BanerCommponnt from "../../component/Baner";
import FirstPoint from "../../component/FirstPoint";
import MapOfAccorditionGradientBox from "../../component/MapOfAccordionGradientBox";
import AccordionGradientBox from "../../component/AccordionGradientBox";
import {  useTranslations } from "next-intl";
import { sections } from "./DisclaimerData";
import { generateSeo } from "@/Metadata/Seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generateSeo({ locale, namespace: "Seo.DisclaimerOfContent", path: "/legal-policy/DisclaimerOfContent" });
}
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
