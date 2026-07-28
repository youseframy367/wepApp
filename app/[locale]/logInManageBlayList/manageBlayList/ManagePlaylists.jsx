"use client";
import { useState } from "react";
import MasgePop from "./masge";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import GradientBorderBox from "../../componnt/GradiantBox";
import ImageCheckbox from "../../componnt/CheckBox";
export default function ManagePlaylists() {
  const [checkedItems, setCheckedItems] = useState({});
  const [search, setSearch] = useState("");
  const [DleatOpen, setDeleatOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("ManagePlaylist");
  const router = useRouter();
  const fontClass = locale === "en" ? "font-inter" : "font-cairo";

  const handleCheckboxChange = (id, checked) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };
  const data = [
    {
      id: 1,
      playList: "Domingo  Home",
      Subscription: "12-Month Subscription",
      ActivationDate: "21 Feb. 2026",
      ExpirationDate: "19 Feb. 2027",
      Status: "Active",
    },
    {
      id: 2,
      playList: "Domingo  Home",
      Subscription: "12-Month Subscription",
      ActivationDate: "21 Feb. 2026",
      ExpirationDate: "19 Feb. 2027",
      Status: "Inactive",
    },
    {
      id: 1,
      playList: "Domingo  Home",
      Subscription: "12-Month Subscription",
      ActivationDate: "21 Feb. 2026",
      ExpirationDate: "19 Feb. 2027",
      Status: "Active",
    },
    {
      id: 2,
      playList: "Domingo  Home",
      Subscription: "12-Month Subscription",
      ActivationDate: "21 Feb. 2026",
      ExpirationDate: "19 Feb. 2027",
      Status: "Inactive",
    },
    {
      id: 1,
      playList: "Domingo  Home",
      Subscription: "12-Month Subscription",
      ActivationDate: "21 Feb. 2026",
      ExpirationDate: "19 Feb. 2027",
      Status: "Active",
    },
  ];

  const filteredData = data.filter((item) => {
    const keyword = search.toLowerCase();

    return (
      item.playList.toLowerCase().includes(keyword) ||
      item.Subscription.toLowerCase().includes(keyword) ||
      item.ActivationDate.toLowerCase().includes(keyword) ||
      item.ExpirationDate.toLowerCase().includes(keyword) ||
      item.Status.toLowerCase().includes(keyword)
    );
  });
  return (
    <div className="mb-[40px]">
      {DleatOpen && (
        <MasgePop
          masege={t("popup.deletePlaylist")}
          onClose={() => setDeleatOpen(false)}
        />
      )}
     <div className="flex flex-col gap-2 md:flex-row md:justify-between">
  <GradientBorderBox className="rounded-[4px] md:w-[232px] w-full h-[29px] flex items-center px-3 gap-2">
    <img
      src="/imge/manageBlayList/manageBlayList/Search.svg"
      alt="search"
      className="w-3 h-3"
    />

    <input
      type="search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder={t("search")}
      className={`flex-1 bg-transparent outline-none text-primary placeholder:text-primary/60 text-[8px] font-[500] ${fontClass}`}
    />
  </GradientBorderBox>

  <div className="flex flex-wrap md:flex-nowrap gap-[5px]">
    <button className="border border-primary md:w-[147px] flex-1 md:flex-none min-w-[100px] h-[29px] flex justify-center items-center text-primary md:text-[12px] text-[9px] font-[600] font-inter rounded-[6px]">
      da:42:67:14:ed:60
    </button>

    <button
      className={`md:w-[114px] flex-1 md:flex-none min-w-[100px] h-[29px] rounded-[6px] flex justify-center items-center md:font-[600] font-[500] ${fontClass} md:text-[12px] text-[10px] tracking-[-0.25px] text-[#000000] bg-primary`}
      onClick={() => {
        router.push(
          `/${locale}/logInManageBlayList/manageBlayList/addPlayList`
        );
      }}
    >
      {t("addPlaylist")}
    </button>

    <button
      className={`md:w-[135px] flex-1 md:flex-none min-w-[120px] h-[29px] rounded-[6px] flex justify-center items-center md:font-[600] font-[500] ${fontClass} md:text-[12px] text-[10px] tracking-[-0.25px] text-[#000000] bg-primary`}
      onClick={() => {
        router.push(
          `/${locale}/logInManageBlayList/manageBlayList/AddXCPlayList`
        );
      }}
    >
      {t("addXCPlaylist")}
    </button>
  </div>
</div>
      <div className={`md:font-[500] font-[400] tracking-[-0.25px] md:text-[10px] text-[6px] ${fontClass}  flex md:justify-around justify-between  my-[15px]`}>
        <h3>{t("table.playlistName")}</h3>
        <h3>{t("table.subscription")}</h3>
        <h3>{t("table.activationDate")}</h3>
        <h3>{t("table.expirationDate")}</h3>
        <h3>{t("table.renew")}</h3>
        <h3>{t("table.status")}</h3>
        <h3>{t("table.edit")}</h3>
        <h3>{t("table.delete")}</h3>
      </div>

      <div className="flex flex-col gap-3 h-[90vh] overflow-y-scroll no-scrollbar md:mx-[-20px] mx-[0px] md:px-[20px] ">
        {filteredData.map((item) => (
          <GradientBorderBox
            key={item.id}
            className="md:p-4  px-2 py-4 md:w-[100%] w-[110%] mx-auto"
          >
            <div className=" tracking-[-0.25px] items-center font-[600] whitespace-nowrap text-inter md:text-[10px] text-[6px] flex  ">
              <div className="flex md:gap-[10px] gap-[5px] items-center text-primary">
                <ImageCheckbox
                  checked={checkedItems[item.id] || false}
                  onChange={(checked) => handleCheckboxChange(item.id, checked)}
                  imgClassName="md:w-[12px] w-[10px] md:h-[12px] h-[10px] rounded-[3px]"
                />
                {item.playList}
              </div>

              <div className="md:mx-[5%] mx-[1%] text-primary">
                {item.Subscription}
              </div>
              <div className="text-primary md:mx-[3%] mx-[1%]">
                {item.ActivationDate}
              </div>
              <div className="text-primary md:mx-[7%] mx-[1%]">
                {item.ExpirationDate}
              </div>
              <img
                src="/imge/manageBlayList/manageBlayList/Renew.svg"
                alt="Renew"
                className="md:mx-[2%] mx-[1%] md:w-auto w-[10px]"
              />
              <button
                className={`md:w-[62px] w-[30px] h-[15px] rounded-[3px] flex justify-center items-center md:text-[8px] text-[6px] md:font-[600] font-[400] font-inter text-[#fff] md:mx-[5%] mx-[1%] tracking-[-0.25px] ${item.Status === "Active" ? "bg-[#1E7A29]  " : "bg-[#7A1E24] "} cursor-pointer`}
              >
                {item.Status}
              </button>

              <img
                src="/imge/manageBlayList/manageBlayList/edit.svg"
                alt="Edit"
                className="mx-[1%] cursor-pointer md:w-auto w-[15px]"
              />
              <img
                src="/imge/manageBlayList/manageBlayList/delate.svg"
                alt="delate"
                className={` ${locale === "en" ? "md:ml-[6%] ml-[1%]" : "md:mr-[6%] md:mr-[1%]"} cursor-pointer md:w-auto w-[15px]`}
                onClick={() => {
                  setDeleatOpen(true);
                }}
              />
            </div>
          </GradientBorderBox>
        ))}
      </div>
    </div>
  );
}
