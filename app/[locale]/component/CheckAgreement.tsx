"use client";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { setAgreementStep } from "../actions";
import { useState } from "react";
import GradientBorderBox from "./GradientBox";
import ImageCheckbox from "./CheckBox";
import { useLocale , useTranslations} from "next-intl";

type Props = {
  agreementType: "customer" | "reseller";
};

export default function CheckAgreement({ agreementType }: Props) {
  const locale = useLocale();
  const [agree, setAgree] = useState(false);
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const t = useTranslations("agreementConfirmation");

  const handleAccept = () => {
    if (!agree) return;
    startTransition(async () => {
      if (agreementType === "customer") {
        await setAgreementStep("customer");
        router.push(`/${locale}`);
      } else {
        await setAgreementStep("done");
        router.push(`/${locale}/Dashboard`);
      }
      router.refresh();
    });
  };

  return (
    <div>
      <GradientBorderBox className="w-[90%] block mx-auto flex px-[20px] items-center h-[68px] md:my-[40px] my-[30px]">
        <div
          className="flex gap-[30px] items-center  w-[100%] shrink-0"
          
        >
          <ImageCheckbox checked={agree} onChange={setAgree} name="agree" />
          <p
            className={`text-[#fff] font-[400] md:text-[16px] text-[14px] ${locale === "en" ? "font-inter ml-[-15px] " : " font-cairo font-[400] md:text-[19px] text-[15px] tracking-[-0.25px] mr-[-15px]"}`}
          >
             {t("checkbox")}
          </p>
        </div>
      </GradientBorderBox>
      <button
        disabled={!agree || pending}
        onClick={handleAccept}
        className={` w-[90%] md:h-[65px] h-[60px] rounded-[15px] flex justify-center items-center mx-auto leading-[40px] mb-[30px] shadow-[0px_4px_4px_0px_#00000040]
                   ${locale === "ar" ? "font-cairo md:text-[22px] text-[19px] leading-[40px] md:font-[600] font-[500]" : ""}
                  ${agree ? "bg-gradient-to-r from-[#DB9D39] via-[#FCD570] to-[#DB9D39] font-[600]  text-[20px] text-[#000000] font-Montserrat" : "bg-[rgba(223,196,134,0.76)] text-[#494747]"}  `}
      >
        {t("button")}
      </button>
    </div>
  );
}
