import { ReactNode, CSSProperties } from "react";
interface ContainerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  withBackground?: boolean;
}

export default function Container({
  children,
  className = "",
  style,
  withBackground = true,
}: ContainerProps) {
  return (
    <div
      style={
        withBackground
          ? {
              backgroundImage: "url(/imge/effect.png)",
              ...style,
            }
          : style
      }
      className={`
        w-full 2xl:w-360 3xl:w-500! 4xl:w-900! 2xl:mx-auto 2xl:px-0 xl:px-25 lg:px-10 md:px-12.5 sm:px-6.25 px-4
        ${
          withBackground
            ? "bg-no-repeat bg-contain bg-center lg:pt-20 md:pt-15 pt-10"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}
