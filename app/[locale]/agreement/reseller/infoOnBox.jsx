import GradientBorderBox from "../../componnt/GradiantBox";
import { notes } from "./AgreementResellerData";
import { useLocale } from "next-intl";
import Container from "../../componnt/contaner";
import { LegalTermsOfTheContract } from "./AgreementResellerData";
import AccordionGradientBox from "../../componnt/AccordionGradientBox";
import { choicesAdd } from "./AgreementResellerData";
import CheckAgreemnt from "../../componnt/checkAgreement";
import Worning from "../../componnt/wrning";
export default function InfoOnBox() {
  const local = useLocale();
  const terms = LegalTermsOfTheContract;
  const add = choicesAdd;
  return (
    <div>
      <GradientBorderBox className="w-[90%] mx-auto py-[10px] md:px-[50px] px-[10px] md:h-[237px] h-auto text-[#fff] flex flex-col justify-around">
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
          className={` md:px-[40px] px-[40px] md:font-[400] font-[300] md:text-[18px] text-[16px] tracking-[-0.25px]  ${local === "ar" ? "  font-cairo  " : "font-inter "} `}
        >
          {local === "ar"
            ? "يتم التعامل مع جميع البيانات الشخصية وفقًا"
            : "All personal data handled per"}
          <span className=" text-[#DB9D39]">
            {local === "ar" ? " لسياسه الخصوصيه " : " Privacy Policy "}
          </span>
        </p>
      </GradientBorderBox>
  
      <Worning
      className="mt-[30px]"
      textAr='بالضغط على "أوافق"، فإنك تقبل قانونيًا جميع الشروط الواردة أدناه حتى إذا لم تقم بقراءتها.'
      textEn= ' By clicking "I Agree", you legally accept all terms below even if you do not read them. '/>
      <Container className="w-[90%] mx-auto bg-cover md:mt-[-80px] mt-[-40px] min-h-[400px]">
        <div data-aos="fade-up" className=" relative  mt-[40px]  ">
          <div className="flex gap-[10px] text-[#fff] items-center">
            <img src="/imge/agreement/reseller/i.svg" alt="i"></img>
            <p
              className={` text-primary md:font-[500] font-[400] md:text-[30px] text-[20px] md:leading-[40px] leading-[25px] ${local === "ar" ? "font-cairo " : "font-Montserrat"}`}
            >
              {local === "ar"
                ? "1. اتفاقية مُلزمة قانونيًا"
                : "1. LEGALLY BINDING AGREEMENT"}
            </p>
          </div>
          <p
            className={`my-[10px] text-[#fff] md:font-[500] font-[400]  tracking-[-0.25px] ${local === "ar" ? "font-cairo md:leading-[33px] md:text-[18px] text-[16px] " : "font-inter md:text-[16px] text-[15px]"}`}
          >
            {local === "ar"
              ? 'من خلال الوصول إلى لوحة البائع أو التسجيل فيها أو استخدامها ("المنصة")، فإنك تقر وتوافق على أن هذه الاتفاقية تُعد عقدًا مُلزمًا قانونيًا بينك ("البائع") وبين شركة Exclusive Movies LTD ("الشركة" أو "نحن"). إذا كنت لا توافق على جميع الشروط، يجب عليك التوقف فورًا عن أي وصول أو استخدام.'
              : "By accessing, registering, or using the Reseller Panel (“Platform”), you acknowledge and agree that this Agreement is a legally binding contract between you (“Reseller”) and Exclusive Movies LTD (“Company”, “we”, “our”, or “us”). If you do not agree to all terms, you must immediately discontinue all access and use."}
          </p>
        </div>
      </Container>

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

                  {(item.ulAr || item.ulEn) && (
                    <ul className="list-disc pr-5 mt-1" data-aos="fade-up">
                      {(local === "ar" ? item.ulAr : item.ulEn)?.map(
                        (i, key) => (
                          <li key={key}>{i}</li>
                        ),
                      )}
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
            className={` text-primary font-[500] md:text-[30px] text-[20px] md:leading-[40px] leading-[25px] ${local === "ar" ? "font-cairo " : "font-montserrat"}`}
          >
            {local === "ar"
              ? "12. الإضافات الاختيارية"
              : " 12. OPTIONAL ADDENDUMS"}
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
              className="flex md:gap-[10px] gap-[10px] md:h-[143px] h-auto p-[20px]"
            >
              <img src={item.img} alt={item.titleAr} width="114px" className="md:w-[114px] w-[90px]" data-aos="fade-up"/>

              <div className="flex flex-col md:gap-[15px] gap-[5px]"  data-aos="fade-up">
                <h2
                  className={` text-primary font-[500] md:text-[30px] text-[20px] md:leading-[40px] leading-[25px] ${local === "ar" ? "font-cairo  " : "font-montserrat"}`}
                >
                  {local === "ar" ? item.titleAr : item.titleEn}
                </h2>
                <p
                  className={` text-[#fff]  tracking-[-0.25px] ${local === "ar" ? "font-cairo font-[500px] md:text-[20px] text-[17px]" : "font-[400] md:text-[14px] text-[12px] font-inter"}`}
                >
                  {local === "ar" ? item.descriptionAr : item.descriptionEn}
                </p>
              </div>
            </GradientBorderBox>
          ))}
        </div>
      </div>
      <CheckAgreemnt agreementType="reseller" />
    </div>
  );
}
