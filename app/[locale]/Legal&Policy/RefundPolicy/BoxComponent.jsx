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
            className={`flex flex-col gap-[10px]   ${ item.titleEn ? "font-montserrat" : "font-cairo"}`}
          >
            <h2
              className={`${item.titleAr || item.titleEn ? "md:text-[26px] text-[20px] font-[500] font-montserrat text-primary " : ""}`}
            >
              {local === "ar" ? item.titleAr : item.titleEn}
            </h2>
            <p className={`${local==="en"?"font-inter md:text-[16px] text-[13px] md:font-[600] font-[500]":"font-cairo md:text-[17px] text-[14px] font-[400]"}  tracking-[-0.25px]`}>
              {local === "en" ? item.textEn : item.textAr}
            </p>
          </div>
        </GradientBorderBox>
      ))}
    </div>
  );
}
