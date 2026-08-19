import { useTranslations, useMessages, useLocale } from "next-intl";
import GradientBorderBox from "../../component/GradientBox";

interface EvaluationCriterion {
  title: string;
  rating: string;
}
export default function EvaluationSummary() {
  const t = useTranslations("CompanyInfo");
  const messages = useMessages();
  const locale = useLocale();
  const criteria = messages.CompanyInfo.EvaluationSummary.criteria as EvaluationCriterion[];
  return (
    <div>
      <div className="flex flex-col items-center mt-[40px]">
        <h1
          className={`md:font-[600] font-[500] md:text-[60px] text-[30px] text-primary ${locale === "en" ? "font-montserrat" : "font-cairo"}`}
        >
          {t("EvaluationSummary.title")}
        </h1>

        <p
          className={`md:font-[700] font-[600] md:text-[24px] text-[20px] tracking-[-0.25px] ${locale === "en" ? "font-inter" : "font-cairo"}`}
        >
          {t("EvaluationSummary.subtitle")}
        </p>
      </div>

   <div className="md:w-[90%] w-full mx-auto my-[30px] overflow-x-auto overflow-y-hidden no-scrollbar relative">
  <div className="flex gap-4 min-w-max justify-around">
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
