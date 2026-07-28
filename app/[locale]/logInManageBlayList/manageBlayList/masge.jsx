import { useLocale } from "next-intl";

export default function MasgePop({ masege = "", onClose }) {
  const locale =useLocale()
    const fontClass = locale === "en" ? "font-inter" : "font-cairo";

  const styleButton =
    `w-[70px] h-[25px] rounded-[7px] cursor-pointer flex justify-center items-center font-[500] text-[10px] ${ fontClass} tracking-[-0.25px] text-[#fff]`;
  return (
    <div className="fixed top-0 left-0 w-[100%] h-[100%] z-[999999] flex justify-center items-center bg-black/50">
      <div
        className="md:w-[626px] w-[90%] h-[137px] m-[1.5px] rounded-[16px]
                bg-[linear-gradient(135deg,_#DFC486C2_0%,_#DFC082CC_25%,_#DAAA6CB2_50%,_#A97A39B2_75%,_#F3DCA8B2_100%)]

        "
      >
        <div className="w-full h-full bg-[#F8E5BD36] rounded-[16px] md:px-[30px] px-4 flex flex-col justify-around">
          <h2 className={`md:text-[18px] text-[16px] md:font-[600] font-[500] ${fontClass} tracking-[-0.25px]  text-primary`}>
            {masege}
          </h2>
          <input
            type="text"
            placeholder={locale === "en" ?"Enter your Pin":"ادخل Pin لخاص بك"}
            required
            className={`bg-[#D9D9D9]/20 border-[#fff] border-[1px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] h-[35px] rounded-[8px] px-[10px] font-[500] ${fontClass} text-[11px] tracking-[-0.25px] outline-none`}
          />
          <div className="flex gap-[10px] items-center">
            <button className={` ${styleButton} bg-[#22B934]`}>{locale === "en" ? "Confirm":"تأكيد "}</button>
            <button
              className={` ${styleButton} bg-[#FF0011]`}
              onClick={onClose}
            >
              {locale === "en" ? "Cancel" : "الغاء"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
