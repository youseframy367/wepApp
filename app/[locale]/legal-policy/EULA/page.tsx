import BanerCommponnt from "../../component/Banner";
import FirstPoint from "../../component/FirstPoint";
import { DataEULA } from "./DataEULA";
import MapOfAccorditionGradientBox from "../../component/MapOfAccordionGradientBox";
import { generateSeo } from "@/Metadata/Seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generateSeo({ locale, namespace: "Seo.EULA", path: "/legal-policy/EULA" });
}
export default function EULA() {
  return (
    <div>
      <BanerCommponnt namespace="EULA.banner" />

      <FirstPoint
        namespace="EULA.firstPoint"
        className="md:mt-[0px] mt-[20px]"
        withContainer={false}
      />

      <MapOfAccorditionGradientBox
        data={DataEULA}
        visibleLines={2}
        namespace="EULABox"
        parentClassName="mt-[20px]"
      />
    </div>
  );
}
