import GradientBorderBox from "../componnt/GradiantBox";
import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";
import api from "@/app/services/api";
export default function TransferDevice() {
  const t = useTranslations("TransferDevice");
  const locale = useLocale();
  const fontClass = locale === "en" ? "font-inter" : "font-cairo";
  const [deviceMac, setDeviceMac] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post("/transfer-device", {
        deviceMac,
      });

      console.log(data);

      setDeviceMac("");
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };
  return (
    <div className="flex flex-col gap-[15px]">
      <h1
        className={` text-primary ${locale === "en" ? "font-[400] font-inter" : "font-[500] font-cairo"} text-[18px] tracking-[-0.25px]`}
      >
        {t("title")}
      </h1>
      <p
        className={`font-[500] ${fontClass} text-[10px] tracking-[-0.25px] text-primary`}
      >
        {t("subtitle")}
      </p>
      <p className={`${fontClass} font-[500] text-[10px] tracking-[-0.25px]`}>
        {t("description")}
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex md:flex-row flex-col items-start md:items-center gap-[10px] w-full"
      >
        <GradientBorderBox className="rounded-[4px] md:w-[574px] w-[90%] h-[30px] flex items-center  px-3 gap-2">
          <input
            type="text"
            value={deviceMac}
            onChange={(e) => setDeviceMac(e.target.value)}
            placeholder={t("placeholder")}
            className={`flex-1 bg-transparent outline-none text-primary placeholder:text-primary/60 text-[8px] font-[500] ${locale === "en" ? "font-inter" : "font-cairo"}`}
          />
        </GradientBorderBox>
        <button
          type="submit"
          className={`font-[600] text-[12px] ${locale === "en" ? "font-inter" : "font-cairo font-[700]"} flex justify-center items-center bg-primary text-[#000000] tracking-[-0.25px] w-[141px] h-[30px] rounded-[6px]`}
        >
          {t("button")}
        </button>
      </form>
      <div className={` ${fontClass} flex items-center gap-[5px] `}>
        <p className=" font-[500] text-[10px] text-primary">{t("WordNot")}</p>
        <p className="w-[535px] font-[500]  text-[10px] tracking-[-0.25px]">
          {t("note")}
        </p>
      </div>
    </div>
  );
}
