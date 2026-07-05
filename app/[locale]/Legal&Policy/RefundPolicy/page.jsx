import BanerCommponnt from "../../componnt/Baner";
import FirstPoint from "../../componnt/FirstPoint";
import GradientBorderBox from "../../componnt/GradiantBox";
import { useLocale } from "next-intl";
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
  const ulacknowledges = acknowledges[local];
  const DataChargebacks = ChargebacksAndFraudulentDisputes[local];

  return (
    <div>
      <BanerCommponnt
        titleAr="سياسة الاسترداد"
        titleEn="Refund Policy"
        subTitleAr="تاريخ السريان: 20 فبراير 2026"
        subtitleEn="Effective Date:  20 August 2026"
        pragrafAr="صادر عن: Exclusive LTD. | الموقع الإلكتروني: exclusivemovies.com"
        pragrafEn="Issued By: Exclusive Moviess LTD.  I  Website: exclusivemoviess.com"
      />
      <FirstPoint
        withContainer={false}
        urlImg="/imge/logo.svg"
        titleAr="1. طبيعة خدمتنا"
        titleEn="1. Nature of  Our Service"
        pragrafAr="تنطبق سياسة الاسترداد هذه على جميع عمليات الشراء التي تتم عبر Ex Pro أو أي منصات رقمية تابعة ومملوكة ومدارة بواسطة شركة Exclusive Movies Ltd من خلال إتمام عملية الشراء أو تفعيل النسخة التجريبية، يقر العميل صراحةً بما يلي:"
        pragrafEn="This Refund Policy applies to all purchases made through Ex Pro or any affiliated digital platforms owned and operated by Exclusive Movies Ltd.
By completing a purchase or activating a trial, the customer expressly:"
      />

      <div className="flex gap-[20px] items-center w-[90%] mx-auto mt-[20px] ">
        <img src="/imge/policy/todo.svg" alt="todo" width="40px" />
        <h2
          className={`${local === "en" ? "font-inter md:font-[700] font-[600] " : "font-cairo md:font-[600] font-[500]"} tracking-[-0.25px] md:text-[18px] text-[16px]`}
        >
          {local === "en"
            ? " I acknowledges and agrees that "
            : "أقر وأوافق علي أن "}
        </h2>
      </div>
      <div className=" relative">
        <img
          src="/imge/effect.png"
          className="absolute top-[50%] 
        
          left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          alt="effect"
        />
        <GradientBorderBox className="flex md:flex-row flex-col items-center relative gap-[20px] w-[90%] mx-auto p-[20px] my-[5px]">
          <img
            src="/imge/policy/refundPolicy/labtobExPro.svg"
            alt="cknowledges"
            data-aos="fade-out"
            className="md:mx-0 mx-auto md:my-0  my-[20px]"
          ></img>
          <ul className={`list-disc ${local === "ar" ? "pr-6" : "pl-6"} `}>
            {ulacknowledges.map((item, index) => (
              <li
                key={index}
                data-aos="fade-up"
                className={` ${local === "en" ? "font-inter font-[400]" : "font-cairo font-[500]"} text-[16px] tracking-[-0.25px]`}
              >
                {item}
              </li>
            ))}
          </ul>
        </GradientBorderBox>
      </div>

      <FirstPoint
        className="md:my-[20px] my-[40px]"
        withContainer={false}
        urlImg="/imge/policy/refundPolicy/Purchases.svg"
        titleAr="2. المشتريات والمدفوعات"
        titleEn="2. Purchases and Payments"
        pragrafAr="عرض وتتبع طلباتك وتفاصيل الدفع بسهولة."
        pragrafEn="View and track your orders and payment details easily."
      />

      <ComponntBox data={PurchasesAndPayments} />
      <FirstPoint
        className="md:my-[0px] mt-[-40px]"
        urlImg="/imge/policy/refundPolicy/Legal.svg"
        titleAr="3. الأسس القانونية لعدم الاسترداد"
        titleEn="3. Legal Grounds for No Refund"
        pragrafAr="لا تتوفر عمليات الاسترداد في الحالات القانونية التالية:"
        pragrafEn="Refunds are not available under the following legal conditions."
      />

      <ComponntBox
        data={LegalGroundsForNoRefund}
        className="md:mt-[-120px] mt-[-190px] "
      />
      <FirstPoint
        withContainer={false}
        className="my-[30px]"
        urlImg="/imge/policy/refundPolicy/NoRefunde.svg"
        titleAr="4. لا تنطبق عمليات الاسترداد أو الإلغاء على"
        titleEn="4. No Refunds or Cancellations Apply To"
        pragrafAr="العناصر والخدمات التالية غير مؤهلة للاسترداد أو الإلغاء:"
        pragrafEn="The following items and services are not eligible for refunds or cancellations."
      />

      <ComponntBox data={NoRefundsOrCancellationsApplyTo} />

      <FirstPoint
        className="md:mt-[0px] mt-[-40px]"
        urlImg="/imge/policy/refundPolicy/mony.svg"
        titleEn="5. Chargebacks and Fraudulent Disputes"
        titleAr="5. عمليات استرجاع المبالغ والنزاعات الاحتيالية"
        pragrafAr="يُعتبر تقديم طلبات استرجاع مبالغ احتيالية (Chargebacks) انتهاكًا لهذه الشروط، وقد يؤدي إلى الإنهاء الدائم للحساب."
        pragrafEn="Initiating fraudulent chargebacks is considered a violation of our terms and may result in permanent account termination."
      />

      <GradientBorderBox className="w-[90%] p-[20px] md:mt-[-120px] mt-[-190px] mx-auto flex flex-col gap-[5px] ">
        {DataChargebacks.map((item, index) => (
          <div
            key={index}
            className="flex gap-[20px] items-center"
            data-aos="fade-up"
          >
            <img src="/imge/policy/refundPolicy/point.svg" alt={item.titleEn} />
            <p
              className={` md:font-[600] font-[500] ${local === "en" ? "font-inter md:text-[18px] text-[16px]" : "font-cairo md:text-[19px] text-[15px]"} tracking-[-0.25px]`}
            >
              {item}
            </p>
          </div>
        ))}
      </GradientBorderBox>
      <FirstPoint
        className="md:mt-[0px] mt-[-40px]"
        urlImg="/imge/policy/refundPolicy/platform.svg"
        titleAr="6. ملاحظات الاسترداد الخاصة بالمنصات"
        titleEn="6. Platform-Specific Refund Notes"
        pragrafAr="قد تختلف سياسات الاسترداد حسب المنصة المستخدمة لإتمام عملية الشراء."
        pragrafEn="Refund policies may vary depending on the platform used for purchase."
      />
      <ComponntBox
        data={PlatformSpecificRefundNotes}
        className="md:mt-[-120px] mt-[-190px]"
      />

      <FirstPoint
        withContainer={false}
        className="my-[30px]"
        urlImg="/imge/policy/refundPolicy/Lega.svg"
        titleAr="7. الأسس القانونية لعدم الاسترداد"
        titleEn="7. Legal Grounds for No Refund"
        pragrafAr="لن يتم منح أي استرداد بناءً على هذه الأسس القانونية."
        pragrafEn="No refunds will be granted based on these legal grounds."
      />
      <div className=" relative">
        <img
          src="/imge/effect.png"
          className="absolute top-[50%] 
        
          left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          alt="effect"
        />
        <ComponntBox data={LegalGroundsForNoRefundSiven} />
      </div>
      <FirstPoint
        withContainer={false}
        className="my-[30px]"
        urlImg="/imge/policy/refundPolicy/contact.svg"
        titleAr="8. التواصل قبل الشراء"
        titleEn="8. Contact Before Purchase"
        pragrafAr="نوصي بالتواصل مع الدعم قبل إتمام عملية الشراء للحصول على أي توضيحات."
        pragrafEn="We recommend contacting support prior to purchase for clarification."
      />
      <div className=" relative">
        <img
          src="/imge/effect.png"
          className="absolute top-[50%] 
        
          left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          alt="effect"
        />
        <ComponntBox data={ContactBeforePurchase} />
      </div>
    </div>
  );
}
