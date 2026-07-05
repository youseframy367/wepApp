import BanerCommponnt from "../../componnt/Baner";
import FirstPoint from "../../componnt/FirstPoint";
import { TremsData } from "./TermsAndConditionsData";
import MapOfAccorditionGradientBox from "../../componnt/MapOfAccordionGradientBox";

export default function TermsAndConditions() {
  return (
    <div>
      <BanerCommponnt
        titleAr="الشروط والأحكام"
        titleEn="Terms & Conditions"
        subTitleAr="تاريخ السريان: 20 فبراير 2026"
        subtitleEn="Effective Date: 20 February 2026"
        pragrafAr="صادر عن: Exclusive LTD. | الموقع الإلكتروني: exclusivemovies.com"
        pragrafEn="Issued by: Exclusive Movies Ltd – United Kingdom"
      />
      <FirstPoint
        titleAr="1. المقدمة"
        titleEn="1. Introduction"
        withContainer={false}
        pragrafEn="Welcome to Ex Pro, a media player application owned and operated by Exclusive Movies Ltd (“Company”, “we”, “our”, or “us”). These Terms & Conditions (“Terms”) govern your access to and use of the Ex Pro application (“App”).
By downloading, accessing, or using the App, you agree to be bound by these Terms. If you do not agree, you must not use the App."
        pragrafAr="مرحبًا بك في Ex Pro، وهو تطبيق مشغل وسائط مملوك ومدار بواسطة شركة Exclusive Movies Ltd (“الشركة”، “نحن”، “لنا”). تحكم هذه الشروط والأحكام (“الشروط”) وصولك إلى تطبيق Ex Pro (“التطبيق”) واستخدامك له من خلال تنزيل أو الوصول إلى التطبيق أو استخدامه، فإنك توافق على الالتزام بهذه الشروط. إذا كنت لا توافق، يجب عليك عدم استخدام التطبيق."
      />

      <MapOfAccorditionGradientBox
        parentClassName="mt-[30px]"
        data={TremsData}
        visibleLines={1}
      />
    </div>
  );
}
