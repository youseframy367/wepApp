import Container from "../componnt/contaner";
import { useLocale } from "next-intl";
export default function BanerCommponnt({
  imgUrl = "",
  titleAr = "",
  titleEn = "",
  subTitleAr = "",
  subtitleEn = "",
  pragrafAr = "",
  pragrafEn = "",
  classNameContainer = "",
  classNameImg = "",
}) {
  const local = useLocale();
  return (
    <Container
      className={` md:h-[400px] h-[270px]  w-[100%]  md:bg-cover md:mt-[-90px] mt-[-70px] ${classNameContainer}`}
    >
      <div className="w-[100%] h-[115px] flex flex-col gap-[15px] justify-center items-center md:mt-[100px] mt-[90px]">
        {imgUrl && (
          <img src={imgUrl} className={classNameImg} alt={titleAr || titleEn} />
        )}{" "}
        <h1
          className={`font-[500] text-center px-auto
                  md:text-[46px] text-[30px] ${local === "ar" ? "font-cairo" : "font-Montserrat"}
                    bg-gradient-to-r from-[#FCD570] via-[#DB9D39] via-[#FEF2B4] via-[#F5C35E] via-[#F5C35E] to-[#FCD570] 
                    bg-clip-text text-transparent 

                
                `}
        >
          {" "}
          {local === "en" ? titleEn : titleAr}
        </h1>
        <p
          className={`font-[500] text-[19px] md:text-[22px] ${local === "ar" ? "font-cairo" : "font-inter "}
                 bg-gradient-to-r from-[#F0DFC5] to-[#DAB377] 
                    bg-clip-text text-transparent  leading-[20px]
                `}
        >
          {local === "en" ? subtitleEn : subTitleAr}
        </p>
        <p
          className={`${local === "ar" ? "font-cairo" : "font-inter "} font-[500] text-[10px] md:text-[14px]
                  bg-gradient-to-r from-[#FCD570] via-[#DB9D39] via-[#FEF2B4] via-[#F5C35E] via-[#F5C35E] to-[#FCD570] 
                    bg-clip-text text-transparent  leading-[20px]
                `}
        >
          {local === "en" ? pragrafEn : pragrafAr}
        </p>
        {imgUrl && (
          <div className="relative md:w-[600px] w-[90%] h-[3.5px] mt-2 flex items-center justify-center">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1.5px] bg-ternary" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1.5px] bg-navbar-shimmer backdrop-blur-[5px]" />
            <div className="relative z-10 w-5 h-[3.5px] bg-ternary blur-[9.5px]" />
          </div>
        )}
      </div>
    </Container>
  );
}
