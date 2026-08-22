import { ReactNode, HTMLAttributes } from "react";
import { useLocale } from "next-intl";
const MASK = "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)";
type GradientBorderBoxProps = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export default function GradientBorderBox({
  children,
  className,
  ...props
}: GradientBorderBoxProps) {

const locale=useLocale()

  return (
    <div    {...props}
  className={`relative rounded-xl ${className ?? ""}`}
  dir={locale === "ar" ? "rtl" : "ltr"}
  >
      <div
        className="absolute inset-0 pointer-events-none z-9"
        style={{ borderRadius: "inherit", filter: "blur(1.5px)" }}
      >
        <div
          className="absolute inset-0"
          style={{
            borderRadius: "inherit",
            padding: "3.5px",
            background: "var(--glow-gradient)",
            WebkitMask: MASK,
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
      </div>

      <div
        className="absolute inset-px pointer-events-none z-10"
        style={{
          borderRadius: "inherit",
          padding: "1.5px",
          background: "var(--glow-gradient)",
          WebkitMask: MASK,
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4.75 min-h-[15.5px] max-h-[15.5px] bg-fourth blur-[9.5px] z-10 pointer-events-none" />
      {/* Bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4.75 min-h-[15.5px] max-h-[15.5px] bg-fourth blur-[9.5px] z-10 pointer-events-none" />
      {/* Left */}
      <div className="  absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[15.5px] max-w-[15.5px] h-4.75 bg-fourth blur-[9.5px] z-10 pointer-events-none" />
      {/* Right */}
      <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 min-w-[15.5px] max-w-[15.5px] h-4.75 bg-fourth blur-[9.5px] z-10 pointer-events-none" />

      {children}
    </div>
  );
}
