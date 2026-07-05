"use client";
import { useLocale } from "next-intl";
import GradientBorderBox from "../../componnt/GradiantBox";
import DateAgreementCustomer from "./AgreementCustomerDate";
import AccordionGradientBox from "../../componnt/AccordionGradientBox";
import { DeteGoToBage } from "./AgreementCustomerDate";

import CheckAgreemnt from "../../componnt/CheckAgreement";
import Worning from "../../componnt/warning";
import PrivcyComponnt from "../../componnt/ContanerPrivcy";

export default function InfoOnBox() {
  const local = useLocale();
  const data = DeteGoToBage;

  return (
    <div className="md:h-auto md:min-h-[200px] ">
      <Worning
        textEn=' By clicking "I Agree", you legally accept all terms below even if you do not read them. '
        textAr='بالضغط على "أوافق"، فإنك تقبل قانونيًا جميع الشروط الواردة أدناه حتى إذا لم تقم بقراءتها.'
      />

      <div className="w-[90%] mx-auto relative mt-[40px]">
        <img
          src="/imge/effect.png"
          className="absolute md:top-[20%] top-[10%]  left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          alt="effect"
        />
        <img
          src="/imge/effectTwo.svg"
          className="absolute md:top-[50%] top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          alt="effect"
        />

        <img
          src="/imge/effect.png"
          className="absolute top-[50%] 
          md:hidden
          left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          alt="effect"
        />
        <img
          src="/imge/effectTwo.svg"
          className="absolute 
          md:hidden 
          top-[67%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          alt="effect"
        />

        <img
          src="/imge/effectThree.svg"
          className="absolute md:top-[93%] top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          alt="effect"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {DateAgreementCustomer.map((item, index) => (
            <AccordionGradientBox
              key={index}
              icon={item.img}
              title={local === "en" ? item.titleEn : item.titleAr}
              paragraph={
                local === "en" ? item.descriptionEn : item.descriptionAr
              }
              visibleLines={3}
            />
          ))}
        </div>
      </div>

      <GradientBorderBox className="w-[90%] my-[40px] mx-[auto] md:h-[143px] h-[155px] flex gap-[24px] items-center px-[20px]">
        <div
          data-aos="fade-up"
          className={`${local === "ar" ? "font-cairo " : ""} flex md:gap-[20px] gap-[10px]`}
        >
          <img
            src="/imge/agreement/customer/about.svg"
            alt="aboutIcon"
            className="w-auto md:w-[120px]"
          ></img>
          <div className=" flex flex-col md:gap-[10px] gap-[5px]">
            <h2
              className={`${local === "ar" ? "font-cairo md:text-[30px] md:font-[500] text-[20px] font-[400]" : "md:font-[500] text-[20px] mb-[-5px]"} text-start text-primary font-medium md:text-[26px] min-[425px]:text-xl text-base`}
            >
              {local === "en" ? " About US " : "من نحن"}
            </h2>
            <p
              className={` ${local === "ar" ? "font-cairo md:font-[500] font-[400] " : "font-inter"} font-[400] md:leading-[22px] leading-[20px] text-[#fff] md:text-[14px] text-[12px] md:w-[90%]`}
            >
              {local === "en"
                ? "This service complies with GDPR and UK GDPR. Limited technical data (device, browser, language) may be processed solely for security, fraud prevention, and legal compliance"
                : "هذه الخدمة تتوافق مع اللائحة العامة لحماية البيانات (GDPR) وUK GDPR. قد تتم معالجة بيانات تقنية محدودة (مثل الجهاز، المتصفح، واللغة) فقط لأغراض الأمان، ومنع الاحتيال، والامتثال القانوني."}
            </p>
          </div>
        </div>
      </GradientBorderBox>

      <PrivcyComponnt data={data} classNameP="md:h-[110px]" />

      <CheckAgreemnt agreementType="customer" />
    </div>
  );
}
