import BanerCommponnt from "../../component/Banner";
import Image from "next/image";
import FirstPoint from "../../component/FirstPoint";
import { useLocale, useTranslations } from "next-intl";
import ContanerTextAndImg from "../../component/ContainerImgAndText";
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
        urlImg="/imge/logo.webp"
        namespace="refundPolicy.firstPoint"
      />

      <div className="flex gap-[20px] items-center w-[90%] mx-auto mt-[20px] ">
        <Image src="/imge/policy/refundPolicy/todoSmoll.webp" alt="todo" width={40} height={37} />
        <h2
          className={`${locale === "en" ? "font-inter md:font-[700] font-[600] " : "font-cairo md:font-[600] font-[500]"} tracking-[-0.25px] md:text-[18px] text-[16px]`}
        >
          {t("acknowledgement.title")}
        </h2>
      </div>

      <ContanerTextAndImg
        namespace="refundPolicy.acknowledges"
        ul={true}
        img="/imge/policy/refundPolicy/labtobExPro.webp"
      />
      <FirstPoint
        className="md:my-[20px] my-[40px]"
        withContainer={false}
        urlImg="/imge/policy/refundPolicy/Purchases.webp"
        namespace="refundPolicy.purchasesAndPayments"
      />

      <ComponntBox
        data={PurchasesAndPayments}
        namespace="refundPolicy.PurchasesAndPaymentsBox"
      />
      <FirstPoint
        className="md:my-[0px] mt-[-40px]"
        urlImg="/imge/policy/refundPolicy/Legal.webp"
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
        urlImg="/imge/policy/refundPolicy/NoRefunde.webp"
        namespace="refundPolicy.NoRefundsOrCancellationsApplyToSection"
      />

      <ComponntBox
        data={NoRefundsOrCancellationsApplyTo}
        namespace="refundPolicy.NoRefundsOrCancellationsApplyTo"
      />

      <FirstPoint
        className="md:mt-[0px] mt-[-40px]"
        urlImg="/imge/policy/refundPolicy/mony.webp"
        namespace="refundPolicy.ChargebacksAndFraudulent"
      />
      <PolicyNote
        NameParentSpace="refundPolicy"
        className="md:mt-[-120px] mt-[-190px]"
      />

      <FirstPoint
        className="md:mt-[0px] mt-[-40px]"
        urlImg="/imge/policy/refundPolicy/platform.webp"
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
        urlImg="/imge/policy/refundPolicy/Lega.webp"
        namespace="refundPolicy.legalGroundsForNoRefund"
      />
      <div className=" relative">
        <Image src="/imge/effect.webp" alt="effect" width={1280} height={509} loading="lazy"  className="absolute top-[50%] 
        
          left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none" />
        <ComponntBox
          data={LegalGroundsForNoRefundSiven}
          namespace="refundPolicy.LegalGroundsForNoRefundSiven"
        />
      </div>
      <FirstPoint
        withContainer={false}
        className="my-[30px]"
        urlImg="/imge/policy/refundPolicy/contact.webp"
        namespace="refundPolicy.contactBeforePurchase"
      />
      <div className=" relative">
        <Image src="/imge/effect.webp" alt="effect" width={1280} height={509} loading="lazy"  className="absolute top-[50%] 
        
          left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none" />
        <ComponntBox
          data={ContactBeforePurchase}
          namespace="refundPolicy.ContactBeforePurchase"
        />
      </div>
    </div>
  );
}
