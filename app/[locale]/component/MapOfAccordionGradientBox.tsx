import Image from "next/image";
import AccordionGradientBox from "./AccordionGradientBox";
import { useTranslations } from "next-intl";

interface AccordionItem {
  key: string;
  img: string;
}
interface MapOfAccordionGradientBoxProps {
  AccordionGradientBoxclassName?: string;
  data: AccordionItem[];
  visibleLines?: 2|3;
  parentClassName?: string;
  CuntEffect?: number;
  namespace: string;
}

export default function MapOfAccorditionGradientBox({
  AccordionGradientBoxclassName,
  data,
  visibleLines = 2,
  parentClassName,
  CuntEffect = 3,
  namespace,
}:MapOfAccordionGradientBoxProps) {
  const t = useTranslations(namespace);

  return (
    <div className={`w-[90%] mx-auto relative ${parentClassName}`}>
      <Image src="/imge/effect.webp" alt="effect" width={1280} height={509} loading="lazy" priority  className=" w-[100%] h-auto" />

      <Image
        src="/imge/effectTwo.webp"
        alt="effect"
        loading="lazy"
        unoptimized
        width="1280"
        height="508"
      />

      <Image src="/imge/effect.webp" alt="effect" width={1280} height={509} loading="lazy" priority  className=" w-[100%] h-auto" />

      <Image
        src="/imge/effectTwo.webp"
        alt="effect"
        loading="lazy"
        unoptimized
        width="1280"
        height="508"
      />

      <Image
        src="/imge/effectThree.webp"
        alt="effect"
        loading="lazy"
        unoptimized
        width="1280"
        height="661"
      />

      <div
        className={`grid grid-cols-1 gap-6 relative z-10 ${AccordionGradientBoxclassName}`}
      >
        {data.map((item) => {
          const description = t.raw(`${item.key}.description`);
          const list = t.has(`${item.key}.list`)
            ? t.raw(`${item.key}.list`)
            : [];
          return (
            <AccordionGradientBox
              key={item.key}
              icon={item.img}
              title={t(`${item.key}.title`)}
              visibleLines={visibleLines}
              paragraph={
                <div>
                  {typeof description === "string" && <p>{description}</p>}

                  {Array.isArray(description) && (
                    <ul className="list-disc pr-5 space-y-1">
                      {description.map((text, index) => (
                        <li key={index}>{text}</li>
                      ))}
                    </ul>
                  )}

                  {Array.isArray(list) && (
                    <ul className="list-disc pr-5 mt-1 space-y-1">
                      {list.map((text, index) => (
                        <li key={index}>{text}</li>
                      ))}
                    </ul>
                  )}
                </div>
              }
            />
          );
        })}
      </div>
    </div>
  );
}
