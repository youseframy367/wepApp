import BanerCommponnt from "../../componnt/Baner";
import FirstPoint from "../../componnt/FirstPoint";
import { DataEULA } from "./DataEULA";
import MapOfAccorditionGradientBox from "../../componnt/MapOfAccordionGradientBox";
export default function EULA() {
  return (
    <div>
      <BanerCommponnt
        titleAr=""
        titleEn="End User License Agreement (EULA)"
        subTitleAr=""
        subtitleEn="Effective Date: 20 February 2026"
        pragrafAr=""
        pragrafEn="Issued By: Exclusive LTD.  I  Website: exclusivemovies.com"
      />

      <FirstPoint
      className="md:mt-[0px] mt-[20px]"
        withContainer={false}
        titleAr=""
        titleEn="1. Introduction"
        pragrafAr=""
        pragrafEn="This End User License Agreement (“Agreement” or “EULA”) is a legally binding contract between you (“User”, “you”, or “your”) and Exclusive Movies Ltd (“Company”, “we”, “us”, or “our”), governing your access to and use of the Ex Pro media player application (“Application” or “App”).
By downloading, installing, or using the App, you agree to be bound by this Agreement. If you do not agree to these terms, do not download, install, or use the App."
      />

      <MapOfAccorditionGradientBox data={DataEULA} visibleLines={2} parentClassName="mt-[20px]"/>
    </div>
  );
}
