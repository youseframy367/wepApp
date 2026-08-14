import BanerCommponnt from "../../componnt/Baner";
import FirstPoint from "../../componnt/FirstPoint";
import { TermsStructure } from "./TermsAndConditionsData";
import MapOfAccorditionGradientBox from "../../componnt/MapOfAccordionGradientBox";

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
        visibleLines={1}
      />
    </div>
  );
}
