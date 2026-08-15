import BanerCommponnt from "../../component/Baner";
import FirstPoint from "../../component/FirstPoint";
import { useLocale, useTranslations } from "next-intl";
import ContanerTextAndImg from "../../component/ContnerImgAndText";
import {
  LegalGroundsForNoRefund,
  PurchasesAndPayments,
  NoRefundsOrCancellationsApplyTo,
  PlatformSpecificRefundNotes,
  LegalGroundsForNoRefundSiven,
  ContactBeforePurchase,
} from "./RefundPolicyData";
import PolicyNote from "../../component/PolicyNote";
import ComponntBox from "../../component/BoxComponent";
import { generateSeo } from "@/Metadata/Seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generateSeo({ locale, namespace: "Seo.RefundPolicy", path: "/legal-policy/RefundPolicy" });
}
export default function RefundPolicy() {
  const locale = useLocale();
  const t = useTranslations("refundPolicy");
  return (
    <div>
      <BanerCommponnt namespace="refundPolicy.banner" />
      <FirstPoint
        withContainer={false}
        urlImg="/imge/logo.svg"
        namespace="refundPolicy.firstPoint"
      />

      <div className="flex gap-[20px] items-center w-[90%] mx-auto mt-[20px] ">
        <img src="/imge/policy/refundPolicy/todoSmoll.png" alt="todo" width="40px" />
        <h2
          className={`${locale === "en" ? "font-inter md:font-[700] font-[600] " : "font-cairo md:font-[600] font-[500]"} tracking-[-0.25px] md:text-[18px] text-[16px]`}
        >
          {t("acknowledgement.title")}
        </h2>
      </div>

      <ContanerTextAndImg
        namespace="refundPolicy.acknowledges"
        ul={true}
        img="/imge/policy/refundPolicy/labtobExPro.png"
      />
      <FirstPoint
        className="md:my-[20px] my-[40px]"
        withContainer={false}
        urlImg="/imge/policy/refundPolicy/Purchases.png"
        namespace="refundPolicy.purchasesAndPayments"
      />

      <ComponntBox
        data={PurchasesAndPayments}
        namespace="refundPolicy.PurchasesAndPaymentsBox"
      />
      <FirstPoint
        className="md:my-[0px] mt-[-40px]"
        urlImg="/imge/policy/refundPolicy/Legal.png"
        namespace="refundPolicy.LegalGrounds"
      />

      <ComponntBox
        data={LegalGroundsForNoRefund}
        namespace="refundPolicy.LegalGroundsForNoRefund"
        className="md:mt-[-120px] mt-[-190px] "
      />
      <FirstPoint
        withContainer={false}
        className="my-[30px]"
        urlImg="/imge/policy/refundPolicy/NoRefunde.png"
        namespace="refundPolicy.NoRefundsOrCancellationsApplyToSection"
      />

      <ComponntBox
        data={NoRefundsOrCancellationsApplyTo}
        namespace="refundPolicy.NoRefundsOrCancellationsApplyTo"
      />

      <FirstPoint
        className="md:mt-[0px] mt-[-40px]"
        urlImg="/imge/policy/refundPolicy/mony.png"
        namespace="refundPolicy.ChargebacksAndFraudulent"
      />
      <PolicyNote
        NameParentSpace="refundPolicy"
        className="md:mt-[-120px] mt-[-190px]"
      />

      <FirstPoint
        className="md:mt-[0px] mt-[-40px]"
        urlImg="/imge/policy/refundPolicy/platform.png"
        namespace="refundPolicy.PlatformSpecificRefundNotes"
      />
      <ComponntBox
        data={PlatformSpecificRefundNotes}
        namespace="refundPolicy.PlatformSpecificRefund"
        className="md:mt-[-120px] mt-[-190px]"
      />

      <FirstPoint
        withContainer={false}
        className="my-[30px]"
        urlImg="/imge/policy/refundPolicy/Lega.png"
        namespace="refundPolicy.legalGroundsForNoRefund"
      />
      <div className=" relative">
        <img
          src="/imge/effect.png"
          className="absolute top-[50%] 
        
          left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          alt="effect"
        />
        <ComponntBox
          data={LegalGroundsForNoRefundSiven}
          namespace="refundPolicy.LegalGroundsForNoRefundSiven"
        />
      </div>
      <FirstPoint
        withContainer={false}
        className="my-[30px]"
        urlImg="/imge/policy/refundPolicy/contact.png"
        namespace="refundPolicy.contactBeforePurchase"
      />
      <div className=" relative">
        <img
          src="/imge/effect.png"
          className="absolute top-[50%] 
        
          left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          alt="effect"
        />
        <ComponntBox
          data={ContactBeforePurchase}
          namespace="refundPolicy.ContactBeforePurchase"
        />
      </div>
    </div>
  );
}
