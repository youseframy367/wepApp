import BanerCommponnt from "../../componnt/baner";
import FirstPoint from "../../componnt/firstPoint";
import AccordionGradientBox from "../../componnt/AccordionGradientBox";
import GradientBorderBox from "../../componnt/GradiantBox";
import { acknowledges } from "./RefundPolicyData";
import { useLocale } from "next-intl";
import { LegalGroundsForNoRefund } from "./RefundPolicyData";
import { PurchasesAndPayments } from "./RefundPolicyData";
import { NoRefundsOrCancellationsApplyTo } from "./RefundPolicyData";
import { ChargebacksAndFraudulentDisputes } from "./RefundPolicyData";
import { PlatformSpecificRefundNotes } from "./RefundPolicyData";
import { LegalGroundsForNoRefundSiven } from "./RefundPolicyData";
import { ContactBeforePurchase } from "./RefundPolicyData"
import ComponntBox from "./boxComponnt";
export default function RefundPolicy() {
  const local = useLocale();
  const ulacknowledges = acknowledges[local];
  const DataTwo = PurchasesAndPayments;
  const DataThree = LegalGroundsForNoRefund;
  const DataFor = NoRefundsOrCancellationsApplyTo;
  const DataFife = ChargebacksAndFraudulentDisputes[local];
  const DataSix = PlatformSpecificRefundNotes;
  const DataSevin = LegalGroundsForNoRefundSiven;
  const DataEight = ContactBeforePurchase
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
        <h2 className={`${local === "en"?"font-inter font-[700] ":"font-cairo font-[600]"} tracking-[-0.25px] text-[18px]`}>
         {local==="en"?" I acknowledges and agrees that ":"أقر وأوافق علي أن "}
        </h2>
      </div>
      <div className=" relative">
        <img
          src="/imge/effect.png"
          className="absolute top-[50%] 
        
          left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          alt="effect"
        />
        <GradientBorderBox className="flex items-center relative gap-[20px] w-[90%] mx-auto p-[20px] my-[5px]">
          <img
            src="/imge/policy/refundPolicy/labtobExPro.svg"
            alt="cknowledges" data-aos="fade-out"
          ></img>
          <ul className="list-disc pl-6">
            {ulacknowledges.map((item, index) => (
              <li
                key={index}
                data-aos="fade-up"
                className={` ${local ==="en" ? "font-inter font-[400]":"font-cairo font-[500]"} text-[16px] tracking-[-0.25px]`}
              >
                {item}
              </li>
            ))}
          </ul>
        </GradientBorderBox>
      </div>

      <FirstPoint
        className="my-[20px]"
        withContainer={false}
        urlImg="/imge/policy/refundPolicy/Purchases.svg"
        titleAr="2. المشتريات والمدفوعات"
        titleEn="2. Purchases and Payments"
        pragrafAr="عرض وتتبع طلباتك وتفاصيل الدفع بسهولة."
        pragrafEn="View and track your orders and payment details easily."
      />

      <ComponntBox data={DataTwo} />
      <FirstPoint
        urlImg="/imge/policy/refundPolicy/Legal.svg"
        titleAr="الأسس القانونية لعدم الاسترداد"
        titleEn="3. Legal Grounds for No Refund"
        pragrafAr="لا تتوفر عمليات الاسترداد في الحالات القانونية التالية:"
        pragrafEn="Refunds are not available under the following legal conditions."
      />

      <ComponntBox data={DataThree} className="mt-[-120px] " />
      <FirstPoint
        withContainer={false}
        className="my-[30px]"
        urlImg="/imge/policy/refundPolicy/NoRefunde.svg"
        titleAr="4. لا تنطبق عمليات الاسترداد أو الإلغاء على"
        titleEn="4. No Refunds or Cancellations Apply To"
        pragrafAr="العناصر والخدمات التالية غير مؤهلة للاسترداد أو الإلغاء:"
        pragrafEn="The following items and services are not eligible for refunds or cancellations."
      />

      <ComponntBox data={DataFor} />

      <FirstPoint
        urlImg="/imge/policy/refundPolicy/mony.svg"
        titleEn="5. Chargebacks and Fraudulent Disputes"
        titleAr="5. عمليات استرجاع المبالغ والنزاعات الاحتيالية"
        pragrafAr="يُعتبر تقديم طلبات استرجاع مبالغ احتيالية (Chargebacks) انتهاكًا لهذه الشروط، وقد يؤدي إلى الإنهاء الدائم للحساب."
        pragrafEn="Initiating fraudulent chargebacks is considered a violation of our terms and may result in permanent account termination."
      />

      <GradientBorderBox className="w-[90%] p-[20px] mt-[-120px] mx-auto flex flex-col gap-[5px] ">
        {DataFife.map((item, index) => (
          <div key={index} className="flex gap-[20px] items-center">
            <img src="/imge/policy/refundPolicy/point.svg" alt={item.titleEn} />
            <p className="text-[18px] font-[600] font-inter tracking-[-0.25px]">
              {item}
            </p>
          </div>
        ))}
      </GradientBorderBox>
      <FirstPoint
        urlImg="/imge/policy/refundPolicy/platform.svg"
        titleAr=""
        titleEn="6. Platform-Specific Refund Notes"
        pragrafAr=""
        pragrafEn="Refund policies may vary depending on the platform used for purchase."
      />
      <ComponntBox data={DataSix} className="mt-[-120px]" />

      <FirstPoint
      withContainer={false} className="my-[30px]"
      urlImg="/imge/policy/refundPolicy/Lega.svg"
      titleAr="" titleEn="7. Legal Grounds for No Refund"
      pragrafAr="" pragrafEn="No refunds will be granted based on these legal grounds."/>
     <div className=" relative">
        <img
          src="/imge/effect.png"
          className="absolute top-[50%] 
        
          left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          alt="effect"
        />
    <ComponntBox data={DataSevin}/>
    </div>
    <FirstPoint
    withContainer={false} className="my-[30px]"
    urlImg="/imge/policy/refundPolicy/contact.svg"
    titleAr="" titleEn="8. Contact Before Purchase"
    pragrafAr="" pragrafEn="We recommend contacting support prior to purchase for clarification."/>

    <ComponntBox data={DataEight}/>
    </div>
  )
}
