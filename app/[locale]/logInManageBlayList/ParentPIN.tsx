import GradientBorderBox from "../componnt/GradiantBox";
import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";
import api from "@/app/services/api";
import axios from "axios";
export default function ParentPIN() {
  const [parentPin, setParentPin] = useState<string>("");
  const locale = useLocale();

  const fontClass = locale === "en" ? "font-inter" : "font-cairo"
  const t = useTranslations("ParentPIN");

const handleSubmit = async ( e: React.FormEvent<HTMLFormElement> ): Promise<void> => { e.preventDefault(); try { const { data } = await api.post("/parent-pin", { parentPin, }); console.log(data); setParentPin(""); } catch (error: unknown) { if (axios.isAxiosError(error)) { console.error( error.response?.data || error.message ); } else { console.error("Unexpected error:", error); } } };
  return (
    <div
      className={`flex flex-col gap-[15px] ${fontClass}`}
    >
      <h2
        className={`${locale === "en" ? "font-inter" : "font-cairo font-[600] text-[18px]"} text-primary`}
      >
        {t("parentPinTitle")}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex md:flex-row flex-col items-start md:items-center gap-[10px] w-full"
      >
        <GradientBorderBox className="rounded-[4px] md:w-[574px] w-[90%] h-[30px] flex items-center  px-3 gap-2">
          <input
            type="text"
            value={parentPin}
            onChange={(e) => setParentPin(e.target.value)}
            placeholder={t("parentPinPlaceholder")}
            className={`flex-1 bg-transparent outline-none text-primary placeholder:text-primary/60 text-[11px] font-[500] ${fontClass}`}
          />
        </GradientBorderBox>

        <button
          type="submit"
          className={`font-[600] text-[12px] ${locale === "en" ? "font-inter" : "font-cairo font-[700]"} flex justify-center items-center bg-primary text-[#000000] tracking-[-0.25px] w-[141px] h-[30px] rounded-[6px]`}
        >
          {t("confirm")}
        </button>
      </form>

      <div className="flex items-center gap-[5px] tracking-[-0.25px]">
        <p
          className={`${fontClass} font-[500] whitespace-nowrap text-[12px] text-primary`}
        >
          {t("note")}
        </p>

        <p
          className={`w-[535px] font-[500] ${fontClass} text-[12px] `}
        >
          {t("parentPinNote")}
        </p>
      </div>
    </div>
  );
}
