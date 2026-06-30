import { twMerge } from "tailwind-merge";

export default function BlackBox({ children, className }) {
  return (
    <div
      className={twMerge(
        "w-[200px] h-[200px] border border-primary bg-black/10  rounded-[10px] border-[1px] backdrop-blur-[8.9px]",
        className
      )}
    >
      {children}
    </div>
  );
}