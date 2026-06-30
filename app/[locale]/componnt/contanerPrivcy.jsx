import GradientBorderBox from "../componnt/GradiantBox";
import { useLocale } from "next-intl";

export default function PrivcyComponnt({
    className="data",
    classNameP="",
    data="",

}) {
  const local = useLocale();
  return (
    <div className={`w-[90%] mx-auto relative  ${className} `}>
      <img
        src="/imge/effectTwo.svg"
        className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
        alt="effect"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {data.map((item, index) => (
          <GradientBorderBox key={index} className="h-[249px] p-[10px] ">
            <div className="flex md:gap-[20px]  gap-[2px]" data-aos="fade-up">
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
                  className={`font-[400]  min-h-[90px] md:mt-[10px] mt-[10px] md:pl-[10px] ${classNameP}  md:text-[14px] text-[12px] ${local === "en" ? "font-inter" : " tracking-[-.25px] font-cairo md:text-[14px] text-[12px] font-[500] pl-[10px] md:leading-[22px] leading-[20px]"}`}
                >
                  {local === "en" ? item.descriptionEn : item.descriptionAr}
                </p>
                <button
                  className={` md:w-[135px] w-[110px] md:h-[45px] h-[40px] border-[1px] border-[#FCD570] tracking-[-0.25px] text-[#000000] font-[600] md:mt-[-5px] mt-[10px] md:text-[16px] text-[15px] ${local === "ar" ? " font-cairo md:font-[700] font-[500]" : "font-inter "} flex justify-center items-center bg-primary rounded-[6px] `}
                >
                  {local === "en" ? "Read Policy" : "قراءة السياسة"}
                </button>
              </div>
            </div>
          </GradientBorderBox>
        ))}
      </div>
    </div>
  );
}
