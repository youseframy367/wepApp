import BanerCommponnt from "../../componnt/Baner";
import InfoOnBox from "./infoOnBox";
export default function AgreementReseller() {
  return (
    <section>
      <BanerCommponnt
        titleAr="اتفاقية تقديم خدمات العميل"
        titleEn="Agreement reseller"
        subtitleAr="تاريخ السريان: 20 فبراير 2026"
        subtitleEn=" Effective Date: 20 February 2026"
        pragrafAr="صادر عن: Exclusive Movies LTD | الموقع الإلكتروني: exclusivemovies.com"
        pragrafEn="Issued By: Exclusive LTD.  I  Website: exclusivemovies.com"
      />
      <InfoOnBox />
    </section>
  );
}
