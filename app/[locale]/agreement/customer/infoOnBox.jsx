"use client";
import { useLocale } from "next-intl";
import GradientBorderBox from "../../componnt/GradiantBox";
import AccordionGradientBox from "../../componnt/AccordionGradientBox";

import CheckAgreemnt from "../../componnt/CheckAgreement";
import Worning from "../../componnt/warning";

export default function InfoOnBox() {
  const local = useLocale();
  const data = DeteGoToBage;

  return (
    <div className="md:h-auto md:min-h-[200px] ">
     

      <div className="w-[90%] mx-auto relative mt-[40px]">
        <img
          src="/imge/effect.png"
          className="absolute md:top-[20%] top-[10%]  left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          alt="effect"
        />
        <img
          src="/imge/effectTwo.svg"
          className="absolute md:top-[50%] top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
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
          className="absolute md:top-[93%] top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          alt="effect"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {DateAgreementCustomer.map((item, index) => (
            <AccordionGradientBox
              key={index}
              icon={item.img}
              title={local === "en" ? item.titleEn : item.titleAr}
              paragraph={
                local === "en" ? item.descriptionEn : item.descriptionAr
              }
              visibleLines={3}
            />
          ))}
        </div>
      </div>




    </div>
  );
}
