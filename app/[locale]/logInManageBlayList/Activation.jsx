"use client";
import { useState } from "react";
import BlackBox from "../componnt/BlackBox";
import { useLocale, useTranslations } from "next-intl";
export default function Activation() {
  const locale = useLocale();
  const t = useTranslations("Activation");
  const [selectPlan, setSelectPlan] = useState(1);
  const [indexSelect, setIndexSelect] = useState(0);
  const [cartActive, setCartActive] = useState(0);
  const fontClass = locale === "en" ? "font-inter" : "font-cairo";


  const paymentMethods = [
  {
    id: "credit-card",
    img: "/imge/manageBlayList/CreditCard.svg",
    title: "paymentMethods.creditCard.title",
    text: "paymentMethods.creditCard.text",
  },
  {
    id: "paypal",
    img: "/imge/manageBlayList/PayPal.svg",
    title: "paymentMethods.paypal.title",
    text: "paymentMethods.paypal.text",
  },
  {
    id: "wallet",
    img: "/imge/manageBlayList/E-Wallet.svg",
    title: "paymentMethods.eWallet.title",
    text: "paymentMethods.eWallet.text",
  },
];

  return (
    <div>
      <h1 className={`text-primary font-[400] ${fontClass} text-[18px] md:mb-0 mb-[20px] tracking-[-0.25px]`}>
        {t("title")}
      </h1>
      <h2 className={`font-[600] text-[24px] ${fontClass} text-primary tracking-[-0.25px] text-center`}>
        {t("titleOfSelectPlan")}
      </h2>

      <div className="w-[100%] md:my-[30px] my-[40px] flex md:flex-row flex-col md:justify-between md:gap-[10px] gap-[15px] ">
        <BlackBox
          borderEfect={false}
          className={` ${selectPlan !== 2 ? "opacity-60" : ""} flex md:w-[45%] w-[100%] px-[15px] items-center gap-[15px] h-[102px] `}
          onClick={() => setSelectPlan(2)}
        >
          <img
            data-aos="fade-out"
            src="/imge/home/4$.svg"
            alt="$4"
            width="67px"
            height="56px"
          ></img>
          <div>
            <h2
              data-aos="fade-up"
              className={`${locale === "en" ? "font-montserrat " : "font-cairo"} md:font-[500] font-[600] md:text-[24px] text-[16px] text-primary`}
            >
              {t("plans.yearly.title")}
            </h2>
            <p
              data-aos="fade-up"
              className={`${
                locale === "en"
                  ? "font-montserrat font-[600] text-[12px]"
                  : "font-cairo font-[500] text-[14px]"
              }`}
            >
              {t("plans.yearly.text")}{" "}
              <span className={locale === "en" ? "font-[900]" : "font-[800]"}>
                {t("plans.yearly.highlight")}
              </span>
            </p>
          </div>
        </BlackBox>
        <BlackBox
          borderEfect={false}
          className={` ${selectPlan !== 1 ? "opacity-60" : ""}  flex md:w-[45%] w-[100%] px-[15px] items-center gap-[15px] h-[102px] `}
          onClick={() => setSelectPlan(1)}
        >
          <img
            data-aos="fade-out"
            src="/imge/home/6$.svg"
            alt="$4"
            width="67px"
            height="56px"
          ></img>
          <div>
            <h2
              data-aos="fade-up"
              className={`${locale === "en" ? "font-montserrat " : "font-cairo"}md:font-[500] font-[600] md:text-[24px] text-[16px] text-primary`}
            >
              {t("plans.halfYear.title")}
            </h2>
            <p
              data-aos="fade-up"
              className={`${
                locale === "en"
                  ? "font-montserrat font-[600] text-[12px]"
                  : "font-cairo font-[500] text-[14px]"
              }`}
            >
              {t("plans.halfYear.text")}{" "}
              <span className={locale === "en" ? "font-[900]" : "font-[800]"}>
                {t("plans.halfYear.highlight")}
              </span>
            </p>
          </div>
        </BlackBox>
      </div>

      <h2 className={`font-[600] text-[24px] ${fontClass} text-primary tracking-[-0.25px] text-center`}>
        {t("titleOfTypePayment")}
      </h2>
      <div className="flex justify-around my-[40px]">
        {["stripe", "stripe", "stripe", "stripe", "stripe"].map(
          (item, index) => (
            <div
              key={index}
              className={`${
                indexSelect === index
                  ? "opacity-100 font-[800] "
                  : "opacity-25 font-[500]"
              } w-[113px] h-[44px] flex justify-center items-center font-inter text-[18px]  text-primary border-[1px] border-primary rounded-[4px]`}
              onClick={() => setIndexSelect(index)}
            >
              {item}
            </div>
          ),
        )}
      </div>
      <h2 className={`font-[600] text-[24px] ${fontClass} text-primary tracking-[-0.25px] text-center`}>
        {t("ChooseyourPaymentType")}
      </h2>

      <div className="flex md:flex-row flex-col justify-between md:gap-0 gap-[10px] my-[40px] ">
        {paymentMethods.map((item, index) => (
          <div
            key={index}
            className={`md:w-[258px] w-[80%] md:mx-0 mx-auto px-[20px] h-[100px] rounded-[12px] flex gap-[10px] md:justify-center justify-start items-center ${
              cartActive === index
                ? "border-[1.5px] border-primary bg-[#261D08]"
                : " border-[#D4A82A33]/20 bg-[#0F0A03] "
            }relative z-[9999]`}
            onClick={() => setCartActive(index)}
          >
            <div className="w-[48px] px-[10px] h-[48px] bg-[#D4A82A]/[0.12] border border-[#D4A82A]/20 rounded-[10px] flex items-center justify-center">
              <img src={item.img} alt={item.title} className="max-w-[34px]" />
            </div>
            <div>
              <h1 className={`${fontClass} text-[#fff] font-[600] text-[14px]`}>
                {t(item.title)}
              </h1>
              <p className={`font[400] ${fontClass} text-[11px] w-[100%] text-[#ffffff85]`}>
               {t(item.text)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
