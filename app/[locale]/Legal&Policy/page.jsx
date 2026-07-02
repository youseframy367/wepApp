import BanerCommponnt from "../componnt/baner";
import PrivcyComponnt from "../componnt/contanerPrivcy";
import { DeteGoToBage } from "./privcyDate";
import GradientBorderBox from "../componnt/GradiantBox";
import { aboutUs } from "./privcyDate";
import { useLocale } from "next-intl";
export default function Bolicy() {
  const DataPrivcy = DeteGoToBage;
  const DataAboutUs = aboutUs;
  const local = useLocale();
  return (
    <div>
      <BanerCommponnt
        classNameContainer="md:mt-[90px] mt-[100px]"
        imgUrl="/imge/policy/policyBaner.svg"
        titleAr="الشروط والسياسات القانونية"
        titleEn="Legal & Policy"
        subTitleAr="تاريخ السريان: 20 فبراير 2026"
        subtitleEn="Effective Date: 20 February 2026"
        pragrafAr="صادر عن: Exclusive LTD. | الموقع الإلكتروني: exclusivemovies.com"
        pragrafEn="Issued By: Exclusive LTD.  I  Website: exclusivemovies.com"
      ></BanerCommponnt>
      <PrivcyComponnt
        data={DataPrivcy}
        className="md:mt-[90px] mt-[140px]"
        classNameP="md:h-[70px] h-[80px]"
        positionEffect="90%"
        urlEffect="/imge/effect.png"
      />
      <div
        data-aos="fade-up"
        className="flex flex-col mb-[40px] mt-[60px] items-center"
      >
        <h2
          className={`font-[600] md:text-[36px] text-[22px] text-primary ${local === "ar" ? "font-cairo" : "font-montserrat"} `}
        >
          {local === "en"
            ? "About Us - Exclusive Movies LTD"
            : "عن الشركة – Exclusive Movies LTD"}
        </h2>
        <p
          className={`${local === "ar" ? "font-cairo" : "font-inter"} font-[500] md:text-[20px] text-[16px] text-center md:text-start`}
        >
          {" "}
          {local === "en"
            ? " Secure. Scalable. Compliant. Innovators of trusted media Player Technology."
            : "آمن، قابل للتوسع، ومتوافق مع المعايير. مبتكرون لتقنيات مشغلات الوسائط الموثوقة."}
        </p>
      </div>
      <div className="flex md:flex-row flex-col md:gap-[0px] gap-[20px] w-[90%] mx-auto md:justify-between">
        {DataAboutUs.map((item, index) => (
          <GradientBorderBox
            key={index}
            className="flex gap-[15px] p-[20px] md:w-[31%] w-[100%] h-[169px]"
          >
            <img
              data-aos="fade-out"
              src={item.img}
              alt={item.titleEn}
              width="68px"
            />
            <div data-aos="fade-up" className="flex flex-col gap-[10px]">
              <h1
                className={`font-[700] text-[22px] ${local === "en" ? " font-montserrat" : "font-cairo"} text-primary`}
              >
                {local === "en" ? item.titleEn : item.titleAr}
              </h1>
              <p
                className={`${local === "en" ? "font-inter" : "font-cairo"} font-[400] w-[95%] text-[14px] tracking-[-0.25px]`}
              >
                {local === "en" ? item.descriptionEn : item.descriptionAr}
              </p>
              <button
                className={`w-[136px] h-[29px] rounded-[4px] border-primary tracking-[-0.25px] flex justify-center items-center text-[#000] font-[600] text-[14px] ${local === "en" ? "font-inter" : "font-cairo"} bg-primary`}
              >
                {local === "en" ? "Learn More" : "اعرف المزيد"}
              </button>
            </div>
          </GradientBorderBox>
        ))}
      </div>
    </div>
  );
}
