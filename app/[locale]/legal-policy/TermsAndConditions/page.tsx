import BanerCommponnt from "../../component/Baner";
import FirstPoint from "../../component/FirstPoint";
import { TermsStructure } from "./TermsAndConditionsData";
import MapOfAccorditionGradientBox from "../../component/MapOfAccordionGradientBox";
import { generateSeo } from "@/Metadata/Seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generateSeo({ locale, namespace: "Seo.TermsAndConditions", path: "/legal-policy/TermsAndConditions" });
}

export default function TermsAndConditions() {
  return (
    <div>
      <BanerCommponnt namespace="termsAndConditions.banner" />
      <FirstPoint
        withContainer={false}
        namespace="termsAndConditions.firstPoint"
      />

      <MapOfAccorditionGradientBox
        parentClassName="mt-[30px]"
        data={TermsStructure}
        namespace="termsAndConditions"
        visibleLines={2}
      />
    </div>
  );
}
