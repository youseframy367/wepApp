"use client";
import { useState } from "react";
import MasgePop from "./masge";
import { useLocale } from "next-intl";
import GradientBorderBox from "../../componnt/GradiantBox";
import ImageCheckbox from "../../componnt/CheckBox";
export default function ManagePlaylists() {
  const [checkedItems, setCheckedItems] = useState({});
  const [search, setSearch] = useState("");
  const [DleatOpen, setDeleatOpen] = useState(false);
  const local = useLocale()
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
      {DleatOpen &&(
      <MasgePop
        masege="Enter Playlist PIN to Delete Playlist"
        onClose={() => setDeleatOpen(false)}
      />
      )}
      <div className="flex md:justify-between gap-[5px]">
        <GradientBorderBox className=" rounded-[4px] md:w-[232px] w-[100px] h-[29px] flex items-center px-3 gap-2">
          <img
            src="/imge/manageBlayList/manageBlayList/Search.svg"
            alt="search"
            className="w-3 h-3 "
          />

          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="flex-1 bg-transparent outline-none text-primary placeholder:text-primary/60 text-[8px] font-[500] font-inter"
          />
        </GradientBorderBox>
        <div className="flex gap-[5px] items-center">
          <button className="border-[1px] border-primary md:w-[147px] w-[100px] h-[29px] flex justify-center items-center text-primary md:text-[12px] text-[9px] font-[600] font-inter rounded-[6px]">
            da:42:67:14:ed:60
          </button>
          <button className="md:w-[114px] w-[70px] rounded-[6px] h-[29px] flex justify-center items-center md:font-[600] font-[500] font-inter md:text-[12px] text-[10px] tracking-[-0.25px] text-[#000000] bg-primary">
            Add Playlist
          </button>
          <button className="md:w-[135px] w-[80px] rounded-[6px] h-[29px] flex justify-center items-center md:font-[600] font-[500] font-inter md:text-[12px] text-[10px] tracking-[-0.25px] text-[#000000] bg-primary">
            Add XC Playlist
          </button>
        </div>
      </div>

      <div className="md:font-[500] font-[400] tracking-[-0.25px] md:text-[10px] text-[8px] font-inter  flex md:justify-around justify-between my-[15px]">
        <h3>Playlist Name</h3>
        <h3>Subscription ETA</h3>
        <h3>Activation Date:</h3>
        <h3>Expiration Date:</h3>
        <h3>Renew</h3>
        <h3>Status</h3>
        <h3>Edit</h3>
        <h3>Delete</h3>
      </div>

      <div className="flex flex-col gap-3 h-[90vh] overflow-y-scroll no-scrollbar md:mx-[-20px] mx-[-30px] md:px-[20px] ">
        {filteredData.map((item) => (
          <GradientBorderBox key={item.id} className="md:p-4  px-2 py-4 md:w-auto w-[95%] mx-auto">
            <div className=" tracking-[-0.25px] items-center font-[600] whitespace-nowrap text-inter md:text-[10px] text-[7px] flex  ">
              <div className="flex md:gap-[10px] gap-[5px] items-center text-primary">
                <ImageCheckbox
                  checked={checkedItems[item.id] || false}
                  onChange={(checked) => handleCheckboxChange(item.id, checked)}
                  imgClassName="md:w-[12px] w-[10px] md:h-[12px] h-[10px] rounded-[3px]"
                />
                {item.playList}
              </div>

              <div className="md:mx-[5%] mx-[2%] text-primary">{item.Subscription}</div>
              <div className="text-primary md:mx-[3%] mx-[1%]">{item.ActivationDate}</div>
              <div className="text-primary md:mx-[7%] mx-[3%]">{item.ExpirationDate}</div>
              <img
                src="/imge/manageBlayList/manageBlayList/Renew.svg"
                alt="Renew"
                className="md:mx-[2%] mx-[1%]"
              />
              <button
                className={`md:w-[62px] w-[50px] h-[15px] rounded-[3px] flex justify-center items-center md:text-[8px] text-[7px] md:font-[600] font-[400] font-inter text-[#fff] md:mx-[5%] mx-[2%] tracking-[-0.25px] ${item.Status === "Active" ? "bg-[#1E7A29]  " : "bg-[#7A1E24] "} cursor-pointer`}
              >
                {item.Status}
              </button>

              <img
                src="/imge/manageBlayList/manageBlayList/edit.svg"
                alt="Edit"
                className="mx-[2%] cursor-pointer"
              />
              <img
                src="/imge/manageBlayList/manageBlayList/delate.svg"
                alt="delate"
                className={` ${local === "en" ?"md:ml-[6%] ml-[3%]":"md:mr-[6%] md:[3%]"} cursor-pointer`}
                onClick={()=>{
                  setDeleatOpen(true)
                }}
              />
            </div>
          </GradientBorderBox>
        ))}
      </div>
    </div>
  );
}
