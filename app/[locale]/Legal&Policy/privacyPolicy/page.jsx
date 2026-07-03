import BanerCommponnt from "../../componnt/baner";
import GradientBorderBox from "../../componnt/GradiantBox";
import Worning from "../../componnt/wrning";
import { useLocale } from "next-intl";
import { notes } from "./privacyPolicyDate";
import FirstPoint from "../../componnt/firstPoint";
import AccordionGradientBox from "../../componnt/AccordionGradientBox";
import { PrivacyPolicyData } from "./privacyPolicyDate";


export default  function PrivacyPolicy() {
  const local = useLocale();
  const PrivacyPolicDataOnBox = PrivacyPolicyData;

  return (
    <div>
      <BanerCommponnt
        titleAr="سياسة الخصوصية"
        titleEn="Privacy Policy"
        subTitleAr="تاريخ السريان: 20 فبراير 2026"
        subtitleEn="Effective Date: 20 February 2026"
        pragrafEn="Issued By: Exclusive LTD.  I  Website: exclusivemovies.com"
        pragrafAr="صادر عن: Exclusive LTD. | الموقع الإلكتروني: exclusivemovies.com"
      />

      <FirstPoint
        titleAr="1. المقدمة"
        titleEn="1. Introduction"
        pragrafAr="في شركة Exclusive Movies Ltd، نحن نُقدّر خصوصيتك ونلتزم التزامًا كاملًا بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع معلوماتك ومعالجتها وتخزينها والكشف عنها وحمايتها عند استخدام Ex Pro، تطبيق مشغل الوسائط الخاص بنا. تتوافق ممارساتنا المتعلقة بالبيانات بشكل صارم مع:"
    pragrafEn={`At Exclusive Movies Ltd, we value your privacy and are fully committed to protecting your personal data.

This Privacy Policy explains how we collect, process, store, disclose, and safeguard your information when using Ex Pro, our media player application.

Our data practices strictly comply with:`}
        withContainer={false}
      />

      <GradientBorderBox className="w-[90%] mx-auto py-[10px] md:px-[50px] px-[10px] md:h-[237px] h-auto  mt-[20px] text-[#fff] flex flex-col justify-around">
        {(local === "ar" ? notes.notesAr : notes.notesEn).map((item, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className={"flex items-center md:gap-[10px] gap-[7px] "}
          >
            <img
              src="/imge/checkBox.svg"
              alt="icon"
              width="30px"
              height="30px"
            ></img>
            <div className="flex flex-col gap-[16px]">
              <p
                className={`  md:font-[400] font-[300] md:text-[18px] text-[16px]  tracking-[-0.25px]${local === "ar" ? "  font-cairo  " : "font-inter"} `}
              >
                {item}
              </p>
            </div>
          </div>
        ))}
        <p
          data-aos="fade-up"
          className={`  md:font-[400] font-[300] md:text-[18px] text-[16px]  tracking-[-0.25px]${local === "ar" ? "  font-cairo  " : "font-inter"} `}
        >
          {local === "ar"
            ? "من خلال تنزيل أو استخدام تطبيق Ex Pro، فإنك تؤكد أنك قد قرأت وفهمت ووافقت على هذه السياسة."
            : "By downloading or using Ex Pro, you confirm that you have read, understood, and agreed to this Policy."}
        </p>
      </GradientBorderBox>
      <Worning
        className="my-[20px]"
        textAr="إذا كنت تحت سن 18 عامًا، يجب عليك الحصول على موافقة أحد الوالدين أو ولي الأمر لاستخدام خدماتنا في Exclusive Movies LTD."
        textEn="If you under 18, you must obtain parental or guardian consent to use our Services at Exclusive Movies LTD."
      />
      <FirstPoint
className={`${local === "en" ? "mt-[-56px] md:mt-0 " : ""}`}
        urlImg="/imge/policy/ddd.svg"
        titleAr="إخلاء المسؤولية – مشغل وسائط فقط (لا يتم توفير أي محتوى)"
        titleEn="Disclaimer – Media Player Only (No Content Provided)"
        pragrafAr="Ex Pro هو مجرد مشغل وسائط لا يتضمن أي قنوات أو محتوى مدمج، والمستخدم وحده المسؤول عن إضافة مصادره، ولا تتحمل الشركة أو المطورون أي مسؤولية عن أي محتوى أو روابط خارجية أو انتهاكات حقوق نشر أو أنشطة غير قانونية تتم عبر التطبيق واستخدام المصادر الخارجية يكون على مسؤولية المستخدم فقط."
        pragrafEn="Ex Pro is strictly a media player. It does NOT include any built-in channels, playlists, movies, series, or copyrighted content. Users are fully responsible for adding their own media sources. Exclusive Movies Ltd and its developers are not responsible for:
Any third-party media sources added by users Content accessed, streamed, or uploaded through the App Copyright violations committed by users
Any unauthorized links, illegal content, or infringement activities Use of third-party links is at the user's own risk."
      />

      <div className="w-[90%] mx-auto relative md:-mt-[100px] -mt-[50px]">
        <img
          src="/imge/effectTwo.svg"
          className="absolute md:top-[30%] top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          alt="effect"
        />

        <img
          src="/imge/effect.png"
          className="absolute top-[50%] 
                md:hidden
                left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          alt="effect"
        />
        <img
          src="/imge/effectTwo.svg"
          className="absolute 
                md:hidden 
                top-[67%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          alt="effect"
        />

        <img
          src="/imge/effectThree.svg"
          className="absolute md:top-[90%] top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          alt="effect"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {PrivacyPolicDataOnBox.map((item, index) => (
            <AccordionGradientBox
              key={index}
              icon={item.img}
              title={local === "en" ? item.titleEn : item.titleAr}
              paragraph={
                <div>
                  <p>
                    {local === "en" ? item.descriptionEn : item.descriptionAr}
                  </p>

                  {(item.ulAr ?? []).map((group, index) => (
                    <div key={index} className="mt-0">
                      <p className="font-semibold">
                        {local === "en" ? group.titleEn : group.titleAr}
                      </p>

                      <ul className="list-disc pr-5 mt-1">
                        {(local === "en" ? group.itemsEn : group.itemsAr)?.map(
                          (text, key) => (
                            <li key={key}>{text}</li>
                          ),
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              }
              visibleLines={3}
            />
          ))}
        </div>
      </div>
      <GradientBorderBox className="w-[90%] mx-auto p-[20px] flex gap-[15px] mt-[20px] ">
        <img src="/imge/policy/cuntactUs.svg" alt="contactUs" className="md:w-auto w-[60px]" />
        <div className="flex flex-col gap-[5px]">
          <h2 className="md:text-[26px] text-[20px] font-[500] font-montserrat text-primary">20. Contact Us</h2>

          <p className="font-[400] font-inter text-[14px] tracking-[-0.25px]">
            For inquiries, concerns, or data-access requests: Exclusive Movies
            Ltd
          </p>

          <div className="flex gap-[10px]  items-center">
            <img src="/imge/policy/email.svg" alt="Email"></img>
            <p className="font-[400] font-inter md:text-[14px] text-[12px] tracking-[-0.25px]">Email: info@exclusivemoviess.com </p>
          </div>

          <div className="flex gap-[10px]  items-center" >
            <img src="/imge/policy/location.svg" alt="location"></img>
            <p className="font-[400] font-inter md:text-[14px] text-[12px] tracking-[-0.25px]">
              Address: 71-75 Shelton Street, Covent Garden, London, UK, WC2H 9JQ
            </p>
          </div>
        </div>
      </GradientBorderBox>
    </div>
  );
}
