import AccordionGradientBox from "./AccordionGradientBox"
import { useLocale } from "next-intl"
export default function MapOfAccorditionGradientBox ({AccordionGradientBoxclassName , data , visibleLines=2 ,parentClassName}){
    const local=useLocale()
    return(
         <div className={`w-[90%] mx-auto relative ${parentClassName}`}>
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
              <div className={`grid grid-cols-1  gap-6 relative z-10 ${AccordionGradientBoxclassName}`}>
                {data.map((item, index) => (
                  <AccordionGradientBox
                    key={index}
                    icon={item.img}
                    title={local === "en" ? item.titleEn : item.titleAr}
                   
                       paragraph={
                <div>
                  <p>
                    {local === "en" ? item.DescriptionEn : item.DescriptionAr}
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
                    visibleLines={visibleLines}
                  />

                  
                ))}
              </div>
            </div>
    )
}