"use client";
import { useLocale } from "next-intl";
import Container from "../../componnt/contaner";
import GradientBorderBox from "../../componnt/GradiantBox";
import DateAgreementCustomer from "./AgreementCustomerDate";
import AccordionGradientBox from "../../componnt/AccordionGradientBox";
import { DeteGoToBage } from "./AgreementCustomerDate";
import ImageCheckbox from "../../componnt/GradiantBox";
import { useState } from "react";
import CheckAgreemnt from "../../componnt/checkAgreement"
export default function InfoOnBox() {
  const local = useLocale();
  const data = DeteGoToBage;

  return (
    <div className="md:h-auto md:min-h-[200px] ">
      <GradientBorderBox className="w-[90%] mx-[auto] md:h-[68px] h-auto flex md:gap-[24px] gap-[15px] items-center px-[20px]">
        <img src="/imge/agreement/worning.svg"></img>
        <p
          className={`${local === "en" ? "font-inter" : "font-cairo md:text-[20px] text-[17px]"} py-[10px] md:font-[400] font-[300] md:text-[19px] text-[16px] text-[#fff] `}
        >
          {local === "en"
            ? ' By clicking "I Agree", you legally accept all terms below even if you do not read them. '
            : 'بالضغط على "أوافق"، فإنك تقبل قانونيًا جميع الشروط الواردة أدناه حتى إذا لم تقم بقراءتها.'}
        </p>
      </GradientBorderBox>

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
          className={`${local === "ar" ? "font-cairo " : ""} flex md:gap-[20px] gap-[10px]`}
        >
          <img src="/imge/agreement/customer/about.svg" alt="aboutIcon" className="w-auto md:w-[120px]"></img>
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

      <div className="w-[90%] mx-auto relative ">
        <img
          src="/imge/effectTwo.svg"
          className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          alt="effect"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {data.map((item, index) => (
            <GradientBorderBox key={index} className="h-[249px] p-[10px] ">
              <div className="flex md:gap-[20px]  gap-[2px]">
                <img
                  src={item.img}
                  alt={item.titleAr}
                  className="md:mt-[50px] md:w-auto md:h-auto w-[120px] my-auto"
                ></img>
                <div className="flex flex-col justify-between  text-[#fff] mt-[15px]">
                  <h3
                    className={`font-[600] md:text-[30px] text-[20px] text-primary ${local === "en" ? "font-montserrat" : "font-cairo md:text-[30px] text-[20px] font-[600] leading-[30px]"} `}
                  >
                    {local === "en" ? item.titleEn : item.titleAr}
                  </h3>
                  <p
                    className={`font-[400] md:h-auto min-h-[115px] md:mt-[10px] md:pl-[10px]  md:text-[14px] text-[12px] ${local === "en" ? "font-inter" : " tracking-[-.25px] font-cairo md:text-[14px] text-[12px] font-[500] pr-[10px] md:leading-[22px] leading-[20px]"}`}
                  >
                    {local === "en" ? item.descriptionEn : item.descriptionAr}
                  </p>
                  <button
                    className={` md:w-[135px] w-[110px] md:h-[45px] h-[40px] border-[1px] border-[#FCD570] tracking-[-0.25px] text-[#000000] font-[600] md:mt-[-10px] mt-[10px] md:text-[16px] text-[15px] ${local === "ar" ? " font-cairo md:font-[700] font-[500]" : "font-inter "} flex justify-center items-center bg-primary rounded-[6px] `}
                  >
                    {local === "en" ? "Read Policy" : "قراءة السياسة"}
                  </button>
                </div>
              </div>
            </GradientBorderBox>
          ))}
        </div>
      </div>

    

      <CheckAgreemnt/>
    </div>
  );
}
