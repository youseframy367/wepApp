import BanerCommponnt from "../../componnt/Baner";
import FirstPoint from "../../componnt/FirstPoint";
import { DataEULA } from "./DataEULA";
import MapOfAccorditionGradientBox from "../../componnt/MapOfAccordionGradientBox";
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
