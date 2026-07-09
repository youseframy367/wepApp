import BanerCommponnt from "../../componnt/Baner";
import FirstPoint from "../../componnt/FirstPoint";
import GradientBorderBox from "../../componnt/GradiantBox";
import { useLocale, useTranslations } from "next-intl";
import ContanerTextAndImg from "../../componnt/ContnerImgAndText";
import {
  LegalGroundsForNoRefund,
  PurchasesAndPayments,
  NoRefundsOrCancellationsApplyTo,
  ChargebacksAndFraudulentDisputes,
  PlatformSpecificRefundNotes,
  LegalGroundsForNoRefundSiven,
  ContactBeforePurchase,
  acknowledges,
} from "./RefundPolicyData";

import ComponntBox from "./BoxComponent";
export default function RefundPolicy() {
  const local = useLocale();
  const t = useTranslations("refundPolicy");
  const DataChargebacks = t.raw("ChargebacksAndFraudulentDisputes.list");
  return (
    <div>
      <BanerCommponnt namespace="refundPolicy.banner" />
      <FirstPoint
        withContainer={false}
        urlImg="/imge/logo.svg"
        namespace="refundPolicy.firstPoint"
      />

      <div className="flex gap-[20px] items-center w-[90%] mx-auto mt-[20px] ">
        <img src="/imge/policy/todo.svg" alt="todo" width="40px" />
        <h2
          className={`${local === "en" ? "font-inter md:font-[700] font-[600] " : "font-cairo md:font-[600] font-[500]"} tracking-[-0.25px] md:text-[18px] text-[16px]`}
        >
          {t("acknowledgement.title")}
        </h2>
      </div>

      <ContanerTextAndImg
        namespace="refundPolicy.acknowledges"
        ul={true}
        img="/imge/policy/refundPolicy/labtobExPro.svg"
      />
      <FirstPoint
        className="md:my-[20px] my-[40px]"
        withContainer={false}
        urlImg="/imge/policy/refundPolicy/Purchases.svg"
        namespace="refundPolicy.purchasesAndPayments"
      />

      <ComponntBox
        data={PurchasesAndPayments}
        namespace="refundPolicy.PurchasesAndPaymentsBox"
      />
      <FirstPoint
        className="md:my-[0px] mt-[-40px]"
        urlImg="/imge/policy/refundPolicy/Legal.svg"
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
        urlImg="/imge/policy/refundPolicy/NoRefunde.svg"
        namespace="refundPolicy.NoRefundsOrCancellationsApplyTo"
      />

      <ComponntBox
        data={NoRefundsOrCancellationsApplyTo}
        namespace="refundPolicy.NoRefundsOrCancellationsApplyTo"
      />

      <FirstPoint
        className="md:mt-[0px] mt-[-40px]"
        urlImg="/imge/policy/refundPolicy/mony.svg"
        namespace="refundPolicy.ChargebacksAndFraudulent"
      />

      <GradientBorderBox className="w-[90%] p-[20px] md:mt-[-120px] mt-[-190px] mx-auto flex flex-col gap-[5px]">
        {DataChargebacks.map((item, index) => (
          <div
            key={index}
            className="flex gap-[20px] items-center"
            data-aos="fade-up"
          >
            <img src="/imge/policy/refundPolicy/point.svg" alt="point" />

            <p
              className={`md:font-[600] font-[500] ${
                local === "en"
                  ? "font-inter md:text-[18px] text-[16px]"
                  : "font-cairo md:text-[19px] text-[15px]"
              } tracking-[-0.25px]`}
            >
              {item}
            </p>
          </div>
        ))}
      </GradientBorderBox>
      <FirstPoint
        className="md:mt-[0px] mt-[-40px]"
        urlImg="/imge/policy/refundPolicy/platform.svg"
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
        urlImg="/imge/policy/refundPolicy/Lega.svg"
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
        urlImg="/imge/policy/refundPolicy/contact.svg"
        titleAr="8. التواصل قبل الشراء"
        titleEn="8. Contact Before Purchase"
        pragrafAr="نوصي بالتواصل مع الدعم قبل إتمام عملية الشراء للحصول على أي توضيحات."
        pragrafEn="We recommend contacting support prior to purchase for clarification."
        namespace='refundPolicy.contactBeforePurchase'
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
