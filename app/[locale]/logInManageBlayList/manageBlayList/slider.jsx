"use client";

import { useRouter   } from "next/navigation";
import { useLocale } from "next-intl";
import GradientBorderBox from "../../componnt/GradiantBox";
import {  useEffect  } from "react";
import { useActiveSection } from "../../context/ActiveSectionContext"
export default function SliderManageBlayList() {
  const router = useRouter();
  const local =useLocale();
const { activeSection, setActiveSection } = useActiveSection();
  const list = [
    {
      title: "Manage Playlists",
      icon: "/imge/manageBlayList/managePalyList.svg",
    },
    {
      title: "Activation",
      icon: "/imge/manageBlayList/Activation.svg",
    },
    {
      title: "Transfer Device",
      icon: "/imge/manageBlayList/Transfer Device.svg",
    },
    {
      title: "Users Status",
      icon: "guhui/",
    },
    {
      title: "Parent PIN",
      icon: "/imge/manageBlayList/Parent PIN.svg",
    },
    {
      title: "Device Key",
      icon: "/imge/manageBlayList/Device Key.svg",
    },
    {
      title: "Logout",
      icon: "/imge/manageBlayList/Logout.svg",
    },
  ];

  function handleClick(item) {
    setActiveSection(item.title);
  sessionStorage.setItem("activeSection", item.title);

    if (item.navigate) {
      router.push(item.navigate);
    }
  }
useEffect(() => {
  const saved = sessionStorage.getItem("activeSection") || "Manage Playlists";
  if (saved) {
    setActiveSection(saved);
  }
}, []);
  return (
    <div className="flex">
        <GradientBorderBox className={`absolute ${local === "en" ? " md:left-[20%] left-[17%]":"md:right-[20%] right-[17%]"} top-[40px] md:w-[70%] w-[75%] h-[56px] md:mx-[5%] mx-[3%]`}>
            <h1 className="font-[600] text-[18px] font-inter text-primary py-[15px] px-[20px]">{activeSection}</h1>
        </GradientBorderBox>
    <div className={` absolute ${local === "en" ?"left-0":"right-0"} top-[0px] w-[20%] h-screen flex md:block hidden`}>
        
      <div className="flex flex-col mt-[40px] ">
        {list.map((item, index) => (
          <div key={index} className="mb-4" onClick={() => handleClick(item)}>
            <div
              className={` ${activeSection === item.title ? "" : "opacity-[60%]"} flex items-center justify-center gap-4`}
            >
              <img src={item.icon} alt={item.title} />
              <h2
                className={` ${activeSection === item.title ? "text-[24px] font-[700]" : "font-[400]"} text-primary font-montserrat w-[160px] `}
              >
                {item.title}
              </h2>
            </div>

            {index !== list.length - 1 && (
              <div className="relative mt-3">
                {/* Glow */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[4px] blur-md opacity-70 bg-[linear-gradient(90deg,#F8E5BD0A_4%,#DFC082_25%,#A97A39_50%,#DFC082_75%,#F3DCA80A_96%)]"></div>

                {/* Line */}
                <div className="relative w-full h-[2px] bg-[linear-gradient(90deg,#F8E5BD0A_4%,#DFC082_25%,#A97A39_50%,#DFC082_75%,#F3DCA80A_96%)]"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="relative">
        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[8px] h-[300px] blur-lg opacity-70 bg-[linear-gradient(180deg,#F8E5BD0A_4%,#DFC082_25%,#A97A39_50%,#DFC082_75%,#F3DCA80A_96%)]" />

        {/* Line */}
        <div className="w-[2px] h-[120vh] bg-[linear-gradient(180deg,#F8E5BD0A_4%,#DFC082_25%,#A97A39_50%,#DFC082_75%,#F3DCA80A_96%)]" />
      </div>
    </div>
    </div>
  );
}
