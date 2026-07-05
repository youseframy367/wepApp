"use client";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { setAgreementStep } from "../actions";
import { useState } from "react";
import GradientBorderBox from "./GradiantBox";
import ImageCheckbox from "./CheckBox";
import { useLocale } from "next-intl";

type Props = {
  agreementType: "customer" | "reseller";
};

export default function CheckAgreement({ agreementType }: Props) {
  const local = useLocale();
  const [agree, setAgree] = useState(false);
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const handleAccept = () => {
    if (!agree) return;

    startTransition(async () => {
      if (agreementType === "customer") {
        await setAgreementStep("reseller");
        router.push(`/${local}/agreement/reseller`);
        return;
      }

      // agreementType === "reseller"
      await setAgreementStep("done");
      router.push(`/${local}`);
      router.refresh();
    });
  };
  return (
    <div>
      <GradientBorderBox className="w-[90%] block mx-auto flex px-[20px] items-center h-[68px] md:my-[40px] my-[30px]">
        <div
          className="flex gap-[30px] items-center  w-[100%] shrink-0"
          data-aos="fade-up"
        >
          <ImageCheckbox checked={agree} onChange={setAgree} name="agree" />
          <p
            className={`text-[#fff] font-[400] md:text-[16px] text-[14px] ${local === "en" ? "font-inter ml-[-15px] " : " font-cairo font-[400] md:text-[19px] text-[15px] tracking-[-0.25px] mr-[-15px]"}`}
          >
            {local === "en"
              ? "I confirm that I have legal capacity and agree to all terms above"
              : "أؤكد أنني أتمتع بالأهلية القانونية وأوافق على جميع الشروط المذكورة أعلاه."}
          </p>
        </div>
      </GradientBorderBox>

      <button
        disabled={!agree || pending}
        onClick={handleAccept}
        className={` w-[90%] md:h-[65px] h-[60px] rounded-[15px] flex justify-center items-center mx-auto leading-[40px] mb-[30px] shadow-[0px_4px_4px_0px_#00000040]
                   ${local === "ar" ? "font-cairo md:text-[22px] text-[19px] leading-[40px] md:font-[600] font-[500]" : ""}
                  ${agree ? "bg-gradient-to-r from-[#DB9D39] via-[#FCD570] to-[#DB9D39] font-[600]  text-[20px] text-[#000000] font-Montserrat" : "bg-[rgba(223,196,134,0.76)] text-[#494747]"}  `}
      >
        {local === "en" ? "I Agree & Proceed" : "أوافق وأتابع"}
      </button>
    </div>
  );
}
