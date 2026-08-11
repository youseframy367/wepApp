"use client";
import { useState } from "react";
import Maseg from "./form";

type ChatType = { id: string; title: string; iconActive: string; icon: string; };

export default function TypeChat() {
  const [selectedType, setSelectedType] = useState<string>("activate_ex_pro");
  const typeChat: ChatType[] = [
    {
      id: "activate_ex_pro",
      title: "Activate EX PRO",
      iconActive: "/imge/Chat/iconActivateExPro.svg",
      icon: "/imge/Chat/iconActivActivateEXPRO.svg",
    },
    {
      id: "supported_devices",
      title: "Supported Devices",
      iconActive: "/imge/Chat/icconSupported.svg",
      icon: "/imge/Chat/iconActivSupportedDevices.svg",
    },
    {
      id: "contact_h_support",
      title: "Contact .H Support",
      iconActive: "/imge/Chat/iconHSupport.svg",
      icon: "/imge/Chat/iconActivContactHSupport.svg",
    },
    {
      id: "legal_compliance",
      title: "Legal & Compliance",
      iconActive: "/imge/Chat/iconCompliance.svg",
      icon: "/imge/Chat/iconActiveLegalCompliance.svg",
    },
  ];

  function selectTypeChat(id: string): void{
    setSelectedType(id);
  }

  return (
    <div className="w-full h-[61%] overflow-y-auto   no-scrollbar">
      <div className="w-[90%] mx-auto p-[10px] my-[10px] border border-secondary bg-[#160F06]/66 rounded-[14px]">
        <p className="font-inter font-[400] leading-[21px] text-[12px] text-[#A88B77]">
          Hello 👋,
          <br />
          I am MR EX, the official AI assistant of
          <br />
          Exclusive Movies Ltd. I can help you with:
          <br />- Ex Pro activation
          <br />- Subscriptions and payments
          <br />- Device compatibility
          <br />- Technical support
          <br />- Legal and compliance information
        </p>
      </div>

      <p className="font-inter font-[400] text-[12px] text-[#A88B77] mx-[25px] my-[10px]">
        How can I assist you today?
      </p>

      <div className="grid grid-cols-2 gap-[10px] mx-[20px]">
        {typeChat.map((item) => (
          <button
            key={item.id}
            onClick={() => selectTypeChat(item.id)}
            className={`mx-auto border-[#d1ae76] cursor-pointer w-[153px] h-[37px] rounded-[17px] border text-[10px] font-[500] font-inter flex gap-[5px] items-center justify-center transition-all duration-200 ${selectedType === item.id
                ? "bg-primary text-white"
                : "bg-transparent text-primary"
              }`}
          >
            <img
              src={selectedType === item.id ? item.iconActive : item.icon}
              alt={item.title}
            />
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}
