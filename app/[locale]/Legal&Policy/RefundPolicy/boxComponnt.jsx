import GradientBorderBox from "../../componnt/GradiantBox";
import { useLocale } from "next-intl";
export default function ComponntBox({ data, className }) {
  const local = useLocale();

  return (
    <div className={`w-[90%] mx-auto ${className}  flex flex-col gap-[20px] `}>
      {data.map((item, index) => (
        <GradientBorderBox
          key={index}
          className="flex gap-[20px] items-center p-[15px]"
        >
          <div data-aos="fade-up" className="w-[120px] h-[100%] flex justify-center items-center">
            <img src={item.img} alt="logo"></img>
          </div>
          <div
          data-aos="fade-up"
            className={`${item.titleAr || item.titleEn ? "flex flex-col " : ""}`}
          >
            <h2
              className={`${item.titleAr || item.titleEn ? "text-[26px] font-[500] font-montserrat text-primary " : ""}`}
            >
              {local === "ar" ? item.titleAr : item.titleEn}
            </h2>
            <p className="font-inter font-[600] tracking-[-0.25px]">
              {local === "en" ? item.textEn : item.textAr}
            </p>
          </div>
        </GradientBorderBox>
      ))}
    </div>
  );
}
