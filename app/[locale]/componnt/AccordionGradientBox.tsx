"use client";

import { useLayoutEffect, useRef, useState, useEffect, ReactNode } from "react";
import GradientBorderBox from "./GradiantBox";
import { useLocale } from "next-intl";

interface AccordionGradientBoxProps {
  icon: string;
  iconAlt?: string;
  title: ReactNode;
  paragraph: ReactNode;
  visibleLines?: 2 | 3;
  children?: ReactNode;
  className?: string;
  iconClassName?: string;
  titleClassName?: string;
  paragraphClassName?: string;
}

export default function AccordionGradientBox({
  icon,
  iconAlt,
  title,
  paragraph,
  visibleLines = 2,
  children,
  className,
  iconClassName = "3xl:min-w-30! lg:w-21 md:w-18 sm:w-16 w-12 mx-0 aspect-square object-contain",
  titleClassName = "text-start text-primary font-medium md:text-[26px] min-[425px]:text-xl text-base",
  paragraphClassName = "text-start  2xl:max-w-max max-w-220.25 font-normal 3xl:text-2xl! lg:text-base min-[425px]:text-sm text-xs tracking-[-0.25px] text-basic-white 3xl:leading-7! min-[425px]:leading-6.5 leading-5",
}: AccordionGradientBoxProps) {
  const [open, setOpen] = useState(false);
  const paragraphRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [collapsedHeight, setCollapsedHeight] = useState(26 * visibleLines);
  const [expandedHeight, setExpandedHeight] = useState<number>(26 * visibleLines);
  const [hasOverflow, setHasOverflow] = useState(false);

  const local = useLocale();
  const isRTL = local !== "en";
  const hasTitle =
    title !== null &&
    title !== undefined &&
    !(typeof title === "string" && title.trim() === "");

  useLayoutEffect(() => {
    const recalculate = () => {
      const p = paragraphRef.current;
      if (!p) return;

      const lineHeight = parseFloat(window.getComputedStyle(p).lineHeight);
      const collapsed = lineHeight * visibleLines;

      setCollapsedHeight(collapsed);
      setHasOverflow(p.scrollHeight > collapsed);
    };

    recalculate();
    window.addEventListener("resize", recalculate);
    return () => window.removeEventListener("resize", recalculate);
  }, [visibleLines]);

  useEffect(() => {
    const recalculateExpanded = () => {
      if (contentRef.current) {
        setExpandedHeight(contentRef.current.scrollHeight);
      }
    };

    recalculateExpanded();
    window.addEventListener("resize", recalculateExpanded);
    return () => window.removeEventListener("resize", recalculateExpanded);
  }, [children, paragraph, open]);

  const showToggle = hasOverflow || !!children;

  return (
    <GradientBorderBox
      dir={isRTL ? "rtl" : "ltr"}
      className={`relative flex flex-col sm:flex-row sm:items-center min-[425px]:py-3.75 py-4.5 min-[425px]:pl-7.5 pl-5 sm:pr-15 pr-5 gap-2.5 sm:gap-6 ${className ?? ""}`}
    >
      <div className="flex sm:contents items-center space-x-2.5">
        <img
          src={icon}
          alt={iconAlt}
          className={`shrink-0 ${iconClassName}`}
          data-aos="fade-up"
        />
        {hasTitle && (
          <h3
            className={`sm:hidden flex-1 min-w-0 ${titleClassName}`}
            data-aos="fade-up"
          >
            {title}
          </h3>
        )}

        {showToggle && (
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="sm:hidden shrink-0 cursor-pointer"
            aria-expanded={open}
            aria-label={open ? "Collapse" : "Expand"}
          >
            <img
              src={open ? "/imge/mins.svg" : "/imge/plus.svg"}
              alt={open ? "Collapse" : "Expand"}
              className="3xl:w-8! md:w-6 w-5"
            />
          </button>
        )}
      </div>

      <div className="flex-1 min-w-0">
        {hasTitle && (
          <h3
            className={`hidden sm:block ${titleClassName} ${
              local === "ar"
                ? "font-cairo text-[22px] font-[500] leading-[40px]"
                : "font-inter"
            }`}
            data-aos="fade-up"
          >
            {title}
          </h3>
        )}
        <div
          style={{
            height: open ? `${expandedHeight}px` : `${collapsedHeight}px`,
            overflow: "hidden",
            transition: "height 0.22s ease-out",
          }}
        >
          <div ref={contentRef}>
            <div
              data-aos="fade-up"
              ref={paragraphRef}
              className={`${paragraphClassName} ${
                local === "ar"
                  ? "font-cairo text-[14px] font-[500]"
                  : "font-inter"
              }`}
            >
              {paragraph}
            </div>

            {children}
          </div>
        </div>
      </div>

      {showToggle && (
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={`hidden sm:block absolute ${
            isRTL ? "left-5" : "right-5"
          } top-5 cursor-pointer`}
          aria-expanded={open}
          aria-label={open ? "Collapse" : "Expand"}
        >
          <img
            src={open ? "/imge/mins.svg" : "/imge/plus.svg"}
            alt={open ? "Collapse" : "Expand"}
            className="3xl:w-8! w-6"
          />
        </button>
      )}
    </GradientBorderBox>
  );
}