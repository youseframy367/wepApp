import { useTranslations ,useLocale } from "next-intl";

export default function UsersStatus() {
  const t = useTranslations("UsersStatus");
  const locale =useLocale()
  const data = {
    MacAddress: "da:42:67:14:ed:60",
    Status: "Inactive",
    CreationDate: "21 Feb. 2026",
    ExpirationDate: "28 Feb. 2026",
  };

  const style = "flex justify-between items-center my-[20px] text-start";

  return (
    <div className={`font-[700] ${locale === "en"?"font-inter":"font-cairo"} md:text-[14px] text-[12px] tracking-[-0.25px]  md:mx-[1%]`}>
      <div className={`${style} text-primary `}>
        <p>{t("macAddress")}:</p>
        <p>{data.MacAddress}</p>
      </div>

      <div className={style}>
        <p className=" text-primary">{t("status")}:</p>
        <p className="md:w-[108px] w-[100px] h-[25px] rounded-[6px] flex justify-center items-center font-[600] text-inter text-[12px] text-[#fff] bg-[#7A1E24]">{data.Status === "Active" ? t("active") : t("inactive")}</p>
      </div>

      <div className={`${style} text-primary `}>
        <p>{t("creationDate")}:</p>
        <p>{data.CreationDate}</p>
      </div>

      <div className={`${style} text-primary `}>
        <p>{t("expirationDate")}:</p>
        <p>{data.ExpirationDate}</p>
      </div>
    </div>
  );
}