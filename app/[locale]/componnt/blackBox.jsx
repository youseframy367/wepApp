import { twMerge } from "tailwind-merge";
import GradientBorderBox from "./GradiantBox";

export default function BlackBox({
  children,
  className,
  borderEfect = true,
}) {
  const classes = twMerge(
    "w-[200px] h-auto bg-black/20 rounded-[10px] backdrop-blur-[8.9px]",
    className
  );

  if (borderEfect) {
    return (
      <GradientBorderBox className={classes}>
        {children}
      </GradientBorderBox>
    );
  }

  return <div className={`${classes} bg-black/70 border-[1px] border-primary`}>{children}</div>;
}