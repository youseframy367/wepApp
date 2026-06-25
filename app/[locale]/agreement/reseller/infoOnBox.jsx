import GradientBorderBox from "../../componnt/GradiantBox";
import { notes } from "./AgreementResellerData";
import { useLocale } from "next-intl";
import Container from "../../componnt/contaner";
import { LegalTermsOfTheContract } from "./AgreementResellerData";
import AccordionGradientBox from "../../componnt/AccordionGradientBox";
import { choicesAdd } from "./AgreementResellerData";
import CheckAgreemnt from "../../componnt/checkAgreement"
export default function InfoOnBox() {
  const local = useLocale();
  const terms = LegalTermsOfTheContract;
  const add = choicesAdd;
  return (
    <div>
      <GradientBorderBox className="w-[90%] mx-auto py-[10px] px-[50px] h-[237px] text-[#fff] flex flex-col justify-around">
        {(local === "ar" ? notes.notesAr : notes.notesEn).map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-[10px]  ${
              local === "ar"
                ? "font-cairo font-[400] text-[18px]"
                : "font-inter font-[400] text-[18px]"
            }`}
          >
            <img
              src="/imge/checkBox.svg"
              alt="icon"
              width="30px"
              height="30px"
            ></img>
            <div className="flex flex-col gap-[16px]">
              <p
                className={`${local === "ar" ? " font-[400] text-[18px] font-cairo  tracking-[-0.25px] " : ""} `}
              >
                {item}
              </p>
            </div>
          </div>
        ))}
        <p
          className={` md:px-[40px] ${local === "ar" ? " font-[400] text-[18px] font-cairo  tracking-[-0.25px] " : ""} `}
        >
          {local === "ar" ? "يتم التعامل مع جميع البيانات الشخصية وفقًا" : ""}
          <span className=" text-[#DB9D39]">
            {local === "ar" ? " لسياسه الخصوصيه " : ""}
          </span>
        </p>
      </GradientBorderBox>
      <GradientBorderBox className="w-[90%] mx-[auto] my-[30px] md:h-[68px] h-auto flex md:gap-[24px] gap-[15px] items-center px-[20px]">
        <img src="/imge/agreement/worning.svg"></img>
        <p
          className={`${local === "en" ? "font-inter" : "font-cairo md:text-[20px] text-[17px]"} py-[10px] md:font-[400] font-[300] md:text-[19px] text-[16px] text-[#fff] `}
        >
          {local === "en"
            ? ' By clicking "I Agree", you legally accept all terms below even if you do not read them. '
            : 'بالضغط على "أوافق"، فإنك تقبل قانونيًا جميع الشروط الواردة أدناه حتى إذا لم تقم بقراءتها.'}
        </p>
      </GradientBorderBox>
      <Container className="w-[100%] bg-cover mt-[-80px] min-h-[400px]">
        <div className=" relative w-[100%] mt-[40px]  ">
          <div className="flex gap-[10px] text-[#fff] items-center">
            <img src="/imge/agreement/reseller/i.svg" alt="i"></img>
            <p
              className={` text-primary ${local === "ar" ? "font-cairo font-[500] text-[30px] leading-[40px]" : ""}`}
            >
              {local === "ar" ? "1. اتفاقية مُلزمة قانونيًا" : ""}
            </p>
          </div>
          <p
            className={`my-[10px] text-[#fff] font-[500] twxt-[18px] ${local === "ar" ? "font-cairo leading-[33px] tracking-[-0.25px]" : ""}`}
          >
            {local === "ar"
              ? 'من خلال الوصول إلى لوحة البائع أو التسجيل فيها أو استخدامها ("المنصة")، فإنك تقر وتوافق على أن هذه الاتفاقية تُعد عقدًا مُلزمًا قانونيًا بينك ("البائع") وبين شركة Exclusive Movies LTD ("الشركة" أو "نحن"). إذا كنت لا توافق على جميع الشروط، يجب عليك التوقف فورًا عن أي وصول أو استخدام.'
              : ""}
          </p>
        </div>
      </Container>

      <div className="w-[90%] mx-auto relative -mt-[100px]">
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
          {terms.map((item, index) => (
            <AccordionGradientBox
              key={index}
              icon={item.img}
              title={local === "en" ? item.titleEn : item.titleAr}
              paragraph={
                <div>
                  <p>
                    {local === "en" ? item.descriptionEn : item.descriptionAr}
                  </p>

                  {item.ul && (
                    <ul className="list-disc pr-5 mt-2">
                      {item.ul.map((i, key) => (
                        <li key={key}>{i}</li>
                      ))}
                    </ul>
                  )}
                </div>
              }
              visibleLines={3}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col w-[90%] mx-auto mt-[30px]">
        <div className="flex gap-[10px] text-[#fff] items-center">
          <img src="/imge/agreement/reseller/add.svg" alt="addIcon"></img>
          <p
            className={` text-primary ${local === "ar" ? "font-cairo font-[500] text-[30px] leading-[40px]" : ""}`}
          >
            {local === "ar" ? "12. الإضافات الاختيارية" : ""}
          </p>
        </div>
        <div className="flex flex-col relative gap-[40px] mt-[30px]">
          <img
            src="/imge/effectTwo.svg"
            className="absolute md:top-[15%] top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
            alt="effect"
          />

          {add.map((item, index) => (
            <GradientBorderBox
              key={index}
              className="flex gap-[10px] h-[143px] p-[20px]"
            >
              <img src={item.img} alt={item.titleAr} width="114px" />

              <div className="flex flex-col gap-[15px]">
                <h2
                  className={` text-primary ${local === "ar" ? "font-cairo font-[500] text-[30px] leading-[40px] " : ""}`}
                >
                  {local === "ar" ? item.titleAr : item.titleEn}
                </h2>
                <p
                  className={` text-[#fff] ${local === "ar" ? "font-cairo font-[500px] font-[20px] tracking-[-0.25px]" : ""}`}
                >
                  {local === "ar" ? item.descriptionAr : item.descriptionEn}
                </p>
              </div>
            </GradientBorderBox>
          ))}
        </div>
      </div>
 <CheckAgreemnt/>



    </div>
  );
}
