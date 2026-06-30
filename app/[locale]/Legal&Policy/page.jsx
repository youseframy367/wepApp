import BanerCommponnt from "../componnt/baner";
import PrivcyComponnt from "../componnt/contanerPrivcy"
import {DeteGoToBage} from "./privcyDate"
export default function Bolicy() {
    const DataPrivcy=DeteGoToBage
  return (
    <div>
      <BanerCommponnt
        classNameContainer="md:mt-[90px] mt-[100px]"
        imgUrl="/imge/policy/policyBaner.svg"
        titleAr=""
        titleEn="Legal & Policy"
        subTitleAr=""
        subtitleEn="Effective Date: 20 February 2026"
        pragrafAr=""
        pragrafEn="Issued By: Exclusive LTD.  I  Website: exclusivemovies.com"
      ></BanerCommponnt>
      <PrivcyComponnt data={DataPrivcy} className="mt-[90px]" classNameP="md:h-[50px]"/>
    </div>
  );
}
