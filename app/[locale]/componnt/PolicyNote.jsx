import GradientBorderBox from "./GradiantBox";
import { useLocale, useTranslations } from "next-intl";
export default function PolicyNote({ NameParentSpace, className }) {
  const locale = useLocale();
  const t = useTranslations(NameParentSpace);
  const DataChargebacks = t.raw("ChargebacksAndFraudulentDisputes.list");
  return (
    <GradientBorderBox
      className={` ${className} w-[90%] p-[20px]  mx-auto flex flex-col gap-[5px]`}
    >
      {DataChargebacks.map((item, index) => (
        <div
          key={index}
          className="flex gap-[20px] items-center"
          data-aos="fade-up"
        >
          <img src="/imge/policy/refundPolicy/point.svg" alt="point" />

          <p
            className={`md:font-[600] font-[500] ${
              locale === "en"
                ? "font-inter md:text-[18px] text-[16px]"
                : "font-cairo md:text-[19px] text-[15px]"
            } tracking-[-0.25px]`}
          >
            {item}
          </p>
        </div>
      ))}
    </GradientBorderBox>
  );
}
