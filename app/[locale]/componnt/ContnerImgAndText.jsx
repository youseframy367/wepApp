import GradientBorderBox from "./GradiantBox";
import { useLocale, useTranslations } from "next-intl";
export default function ContanerTextAndImg({
  namespace,
  img,
  ul = false,
  effect = "/imge/effect.png",
  positionEffect = "50%",
}) {
  const local = useLocale();
  const t = useTranslations(namespace);
  const items = t.raw("items");

  return (
    <div className=" relative">
      <img
        src={effect}
         style={{ top: positionEffect }}
        className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none`}
        alt="effect"
      />
      <GradientBorderBox className="flex md:flex-row flex-col items-center relative gap-[20px] w-[90%] mx-auto md:p-[20px] p-[10px] my-[5px]">
        <img
          src={img}
          alt="cknowledges"
          data-aos="fade-out"
          className="md:mx-0 mx-auto md:my-0  my-[20px]"
        ></img>
        <ul
          className={`${ul ? "list-disc" : ""} ${local === "ar" ? "pr-6" : "pl-6"} `}
        >
          {Array.isArray(items) &&
            items.map((item, index) => (
              <li
                key={index}
                data-aos="fade-up"
                className={` ${local === "en" ? "font-inter font-[400]" : "font-cairo font-[500]"} text-[16px] leading-[30px] tracking-[-0.25px]`}
              >
                {item}
              </li>
            ))}
        </ul>
      </GradientBorderBox>
    </div>
  );
}
