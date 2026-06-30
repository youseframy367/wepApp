import Worning from "../componnt/wrning";
import { useLocale } from "next-intl";
export default function Baner() {
  const local = useLocale();
  return (
    <div className="md:mt-[180px] mt-[150px] relative">
      <img

        src="/imge/effectTwo.svg"
        className="absolute md:hidden block w-[100%] top-[10%]  z-0 pointer-events-none"
        alt="effect"
      />

      <img
        src="/imge/effectTwo.svg"
        className="absolute md:w-[100%] w-[100%] md:top-[50%] top-[35%] md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-0 pointer-events-none"
        alt="effect"
      />
      <div className="flex md:flex-row flex-col-reverse flex-col w-[90%] md:justify-between md:mx-auto md:items-center">
        <div className="flex flex-col gap-[14px] md:w-[450px] w-[100%] ">
          <h1
          data-aos="fade-up"
            className={`md:font-[700] font-[500] md:text-[56px] text-[35px] md:mx-0 mx-auto  md:w-[100%] w-[90%] text-primary ${local === "ar" ? "font-montserrat " : ""}`}
          >
            EX PRO Player
          </h1>
          <h2
          data-aos="fade-up"
            className={`${local === "en" ? "font-inter " : "font-cairo"} font-[600] mt-[-10px] md:text-[32px] text-[30px] md:w-[100%] w-[90%] md:mx-0 mx-auto  text-primary leading-[42px]`}
          >
            {local === "en"
              ? "Premium Media Playback. Designed for the Big Screen."
              : "تشغيل وسائط مميز، مصمم خصيصًا للشاشة الكبيرة"}
          </h2>
          <p
          data-aos="fade-up"
            className={`${local === "en" ? "font-inter" : "font-cairo font-[600] leading-[25px]"} md:font-[500] font-[300]  md:w-[100%] w-[90%] md:mx-0 mx-auto  md:text-[16px] text-[12px] leading-[22px] tracking-[-0.25px]`}
          >
            {local === "en"
              ? `EX PRO Player is a modern media player application built for Smart TVs and supported devices. It delivers smooth playback, elegant visuals, and effortless navigation—so you can enjoy your own legally obtained media sources in one refined interface.`
              : `EX PRO Player هو تطبيق مشغل وسائط حديث تم تصميمه لأجهزة التلفزيون الذكية والأجهزة المدعومة. يوفّر تشغيلًا سلسًا، وواجهة بصرية أنيقة، وتنقلًا سهلًا، لتتمكن من الاستمتاع بمصادر الوسائط الخاصة بك التي تم الحصول عليها بشكل قانوني ضمن واجهة متكاملة وراقية.`}
          </p>
          <button
          data-aos="fade-up"
            className={`md:w-[305px] w-[250px] md:h-[63px] h-[50px] md:mx-0 mx-[5%] flex justify-center items-center bg-primary text-[#000000] ${local === "en" ? "font-inter md:font-[600] font-[500]  " : "font-cairo md:font-[700] font-[600]"}  md:text-[24px] text-[20px] leading-[40px] tracking-[-0.25px] rounded-[10px] border-[1px] border-[#FCD570]`}
          >
            {local === "en" ? "Activate Your Device" : "تفعيل الوصول على جهازك"}
          </button>
          <p
          data-aos="fade-up"
            className={`${local === "en" ? "font-inter font-[400]" : "font-cairo font-[700]"} md:mx-0 mx-[5%]   md:text-[14px] text-[12px] leading-[42px]`}
          >
            {local === "en"
              ? "7-day free trial · then XX/year per device"
              : "تجربة مجانية لمدة 7 أيام XX سنويًا لكل جهاز"}
          </p>
        </div>
        <img
          data-aos="fade-out"
          src="/imge/home/EXBRO.svg"
          alt="EX-PRO"
          className="z-5 mx-auto md:mx-0"
        ></img>
      </div>

      <Worning
        textSpanEn="Important Notice:"
        className="md:mt-[40px] mt-[20px] "
        textSpanAr="ملاحظه هامه "
        textAr="  هذا التطبيق هو مشغل وسائط مستقل فقط. لا يوفّر أو يستضيف أو يبيع أو يتضمن أي محتوى أو قنوات أو اشتراكات. ويتحمل المستخدم مسؤولية إضافة وإدارة مصادر الوسائط الخاصة به التي تم الحصول عليها بشكل قانوني"
        textEn=" EX PRO Player is a standalone media player only. It does not provide, host, sell, or include any media content, channels, or subscriptions. Users are responsible for adding and managing their own legally obtained media sources."
      />
    </div>
  );
}
