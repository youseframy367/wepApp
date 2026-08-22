import Image from "next/image";
import GradientBorderBox from "./GradientBox";
import { useLocale, useTranslations } from "next-intl";

interface PolicyNoteProps {
  NameParentSpace: string;
  className?: string;
}

export default function PolicyNote({ NameParentSpace, className }: PolicyNoteProps) {
  const locale = useLocale();
  const t = useTranslations(NameParentSpace);
  const DataChargebacks = t.raw("ChargebacksAndFraudulentDisputes.list") as string[];
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
          <Image
        src="/imge/policy/refundPolicy/point.webp"
        alt="point"
        loading="lazy"
        unoptimized
        width="50"
        height="40"
      />

          <p
            className={`md:font-[600] font-[500] ${locale === "en"
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
