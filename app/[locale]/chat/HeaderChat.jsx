import Image from "next/image";

export default function Headr() {
  return (
    <div className="w-full h-[72px] px-[7px] rounded-t-[18px] flex gap-[10px] text-white bg-[linear-gradient(90deg,#FCD570,#DB9D39,#FFFFFF,#DB9D39)]">
   
      <Image src="/imge/Chat/MREX.webp" alt="MR EX" width={63} height={67} />
      <div className="my-auto">
        <h1 className="font-[500] text-[16px] font-inter tracking-[-0.25px]">
          MR EX
        </h1>
        <p className="font-[400] font-inter text-[10px] text-white/60">
          Exclusive Movies AI Assistant
        </p>
      </div>
    </div>
  );
}
