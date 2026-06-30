import { WhatIsEXPRO } from "../home/HomeData";
import GradientBorderBox from "../componnt/GradiantBox";
import { useLocale } from "next-intl";
export default function WhatIsExpro() {
  const local = useLocale();
  const ExPro = WhatIsEXPRO;
  const ulEn = [
    "Supports widely used playlist formats (including M3U / M3U8)",
    "Optimized for Smart TVs and large displays",
    "Dedicated sections for Live streams, Movies, Series, and Catch-up (when supported by the source)",
    "Favorites, categories, and search for fast navigation",
  ];
  const ulAr =[
    "يدعم صيغ قوائم التشغيل الشائعة (مثل M3U و M3U8)",
    "مُحسّن لأجهزة التلفزيون الذكية والشاشات الكبيرة ",
    " أقسام مخصصة للبث المباشر، والأفلام، والمسلسلات، وإعادة المشاهدة (حسب دعم المصدر)",
    "لمفضلة، والتصنيفات، والبحث لتسهيل وسرعة التصفح"
  ]
  return (
    <div className="flex flex-col">
      <div className="flex md:flex-row flex-col  w-[90%] mx-auto md:justify-between my-[70px] items-center">
        <img src="/imge/home/WhatIsEXPRO.svg" alt="WhatIsExPro"  data-aos="fade-out"></img>

        <div className="flex items-center flex-col gap-[14px] md:w-[520px] w-[100%] items-start">
          <h1
             data-aos="fade-up"
            className={`font-[600] ${local === "en" ? "font-inter" : "font-cairo"} md:text-[40px] text-[27px] leading-[42px] text-primary`}
          >
            {local === "en" ? "What is EX PRO Player?" : "ما هو EX PRO Player؟"}
          </h1>
          <p
          data-aos="fade-up"
          className={` ${local==="en"?"font-inter leading-[22px] md:text-[14px] text-[12px] font-[500]":"font-cairo leading-[26px] text-[13px] font-[600]"}   tracking-[-0.25px]`}>
            {local === "en"
              ? `EX PRO Player is a premium playback application developed by Exclusive Movies Ltd. It allows users to organize and play their personal or third-party media sources using supported playlist formats, optimized for TV screens and remote-control navigation. We focus on performance, stability, privacy, and compliance—not content distribution.`
              : `EX PRO Player هو تطبيق تشغيل وسائط مميز تم تطويره بواسطة شركة Exclusive Movies Ltd. يتيح للمستخدمين تنظيم وتشغيل مصادر الوسائط الخاصة بهم أو من أطراف خارجية باستخدام صيغ قوائم تشغيل مدعومة، مع تحسين العرض لشاشات التلفزيون والتصفح باستخدام جهاز التحكم عن بُعد. يركز التطبيق على الأداء، والثبات، والخصوصية، والالتزام بالقوانين، وليس على توفير أو توزيع المحتوى.`}
          </p>
          <h2 data-aos="fade-up" className={`${local ==="en" ?"font-inter":"font-cairo"} md:font-[700] font-[600] md:text-[20px] text-[18px] leading-[22px] tracking-[-0.25px] text-primary`}>
           {local==="en"? " Highlights":"المزايا الرئيسية"}
          </h2>
          <ul data-aos="fade-up" className={`list-disc ${local ==="en"? "pl-6": "pr-6"}  flex flex-col md:gap-2 gap-1`}>
            {local === "en"? ulEn:ulAr.map((item, index) => (
              <li
                key={index}
                className={`${local === "en" ?"font-inter md:text-[16px] text-[14px] md:font-[500] font-[400]":"font-cairo md:text-[13px] text-[11px] md:font-[600] font-[500]"}   tracking-[-0.25px]  leading-[26px]`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 w-[90%] mx-auto md:my-[20px] my-[10px]">
        <img
          src="/imge/effect.png"
          className="absolute md:top-[40%] top-[10%]  left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          alt="effect"
        />

         <img
          src="/imge/effect.png"
          className="absolute md:hidden block top-[60%]  left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          alt="effect"
        />
        {ExPro.map((item, index) => (
          <GradientBorderBox
            key={index}
            className="flex md:gap-[15px] gap-[10px] md:h-[181px] h-auto p-[20px]"
          >
            <img
              src={item.img}
              alt={item.titleAr}
              className="md:w-[90px] md:mt-[-60px] mt-[-50px] w-[80px]"
              data-aos="fade-up"
            />

            <div
              className="flex flex-col md:gap-[15px] gap-[5px]"
              data-aos="fade-up"
            >
              <h2
                className={` text-primary font-[600] md:text-[24px] text-[20px] md:leading-[30px] leading-[20px] ${local === "ar" ? "font-cairo  " : "font-montserrat"}`}
              >
                {local === "ar" ? item.titleAr : item.titleEn}
              </h2>
              <p
                className={` text-[#fff]  tracking-[-0.25px] ${local === "ar" ? "font-cairo font-[500px] text-[14px] md:text-[17px] leading-[24px] pl-[20px]" : "font-[400] md:text-[14px] text-[12px] font-inter"}`}
              >
                {local === "ar" ? item.textAr : item.textEn}
              </p>
            </div>
          </GradientBorderBox>
        ))}
      </div>
    </div>
  );
}
