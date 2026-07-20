import { useTranslations, useMessages ,useLocale } from "next-intl";
import GradientBorderBox from "../../componnt/GradiantBox";

export default function EvaluationSummary() {
  const t = useTranslations("CompanyInfo");
  const messages = useMessages();
  const local = useLocale()
  const criteria = messages.CompanyInfo.EvaluationSummary.criteria;

  return (
    <div>
      <div className="flex flex-col items-center mt-[40px]">
        <h1 className={`md:font-[600] font-[500] md:text-[60px] text-[30px] text-primary ${local ==="en"?"font-montserrat":"font-cairo"}`}>
          {t("EvaluationSummary.title")}
        </h1>

        <p className={`md:font-[700] font-[600] md:text-[24px] text-[20px] tracking-[-0.25px] ${local === "en" ?"font-inter":"font-cairo"}`}>
          {t("EvaluationSummary.subtitle")}
        </p>
      </div>

    <div className="md:w-[90%] w-[100%] mx-auto my-[30px] overflow-x-auto md:overflow-visible">
  <div className="flex justify-around md:justify-around gap-4 min-w-max">
    {criteria.map((item, index) => (
      <GradientBorderBox
        key={index}
        className="w-[194px] h-[98px] shrink-0 py-[13px] px-[5px] flex justify-center items-center font-[700] text-[14px] text-primary text-center font-Montserrat"
      >
        {item.title}
        <br />
        {item.rating}
      </GradientBorderBox>
    ))}
  </div>
</div>
    </div>
  );
}