"use client";
import { JSX, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import GradientBorderBox from "../../component/GradientBox";
import { useActiveSection } from "../../context/ActiveSectionContext";


type MenuItem = { id: | "manage-playlists" | "activation" | "transfer-device" | "users-status" | "parent-pin" | "device-key" | "logout"; title: string; icon: string; };
export default function SliderManageBlayList(): JSX.Element {
  const locale = useLocale();
  const t = useTranslations("ManagePlaylist");
  const { activeSection, setActiveSection } = useActiveSection();
  const [open, setOpen] = useState<boolean>(false);
  const list: MenuItem[] = [
    {
      id: "manage-playlists",
      title: t("playlist.managePlaylists"),
      icon: "/imge/manageBlayList/managePalyList.svg",
    },
    {
      id: "activation",
      title: t("playlist.activation"),
      icon: "/imge/manageBlayList/Activation.svg",
    },
    {
      id: "transfer-device",
      title: t("playlist.transferDevice"),
      icon: "/imge/manageBlayList/Transfer Device.svg",
    },
    {
      id: "users-status",
      title: t("playlist.usersStatus"),
      icon: "/imge/manageBlayList/UsersStatus.svg",
    },
    {
      id: "parent-pin",
      title: t("playlist.parentPin"),
      icon: "/imge/manageBlayList/Parent PIN.svg",
    },
    {
      id: "device-key",
      title: t("playlist.deviceKey"),
      icon: "/imge/manageBlayList/Device Key.svg",
    },
    {
      id: "logout",
      title: t("playlist.logout"),
      icon: "/imge/manageBlayList/Logout.svg",
    },
  ];

  function handleClick(item: MenuItem): void {
    setActiveSection(item.id);
    setOpen(false);
  }
  return (
    <div className="flex">
      <GradientBorderBox
        className={`absolute ${locale === "en" ? " md:left-[20%] left-[20%] font-inter" : "md:right-[20%] right-[20%] font-cairo"} md:top-[40px] top-[20px] md:w-[70%] w-[78%] h-[56px] md:mx-[5%] `}
      >
        <h1 className="font-[600] md:text-[18px] text-[16px]  text-primary py-[15px] px-[20px]">
          {" "}
          {list.find((item) => item.id === activeSection)?.title}
        </h1>
      </GradientBorderBox>

      <div
        className={` absolute md:hidden block ${locale === "en" ? "left-[6%]" : "right-[6%]"} top-[40px]`}
      >
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1 cursor-pointer "
        >
          <span className="w-6 h-0.5 bg-[#DAAA6C]" />
          <span className="w-6 h-0.5 bg-[#DAAA6C]" />
          <span className="w-6 h-0.5 bg-[#DAAA6C]" />
        </button>
      </div>
      {open && (
        <div
          className="fixed inset-0  bg-black/80 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`
    fixed md:absolute top-0 h-screen flex flex-row   z-50
    ${locale === "en" ? "left-0" : "right-0"}
    md:w-[20%] w-[60%]
    transition-transform duration-300
    md:translate-x-0
    ${open
            ? "translate-x-0"
            : locale === "en"
              ? "-translate-x-full"
              : "translate-x-full"
          }
    md:flex
  `}
      >
        <div className="flex flex-col md:mt-[40px] mt-[120px] w-full">
          {list.map((item, index) => (
            <div
              key={index}
              className="mb-4 cursor-pointer"
              onClick={() => handleClick(item)}
            >
              <div
                className={`${activeSection === item.id ? "" : "opacity-[60%]"
                  } flex items-center justify-center mx-auto gap-4 md:my-0 my-[15px]`}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="md:w-auto w-[40px]"
                />

                <h2
                  className={`${activeSection === item.id
                      ? "md:text-[24px] text-[20px] font-[700]"
                      : "font-[400] text-[16px]"
                    } text-primary ${locale === "en" ? "font-montserrat" : "font-cairo"
                    } w-[160px]`}
                >
                  {item.title}
                </h2>
              </div>

              {index !== list.length - 1 && (
                <div className="relative mt-3">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[4px] blur-md opacity-70 bg-[linear-gradient(90deg,#F8E5BD0A_4%,#DFC082_25%,#A97A39_50%,#DFC082_75%,#F3DCA80A_96%)]"></div>

                  <div className="relative w-full h-[2px] bg-[linear-gradient(90deg,#F8E5BD0A_4%,#DFC082_25%,#A97A39_50%,#DFC082_75%,#F3DCA80A_96%)]"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="relative top-0 right-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[8px] h-[300px] blur-lg opacity-70 bg-[linear-gradient(180deg,#F8E5BD0A_4%,#DFC082_25%,#A97A39_50%,#DFC082_75%,#F3DCA80A_96%)]" />

          <div className="w-[2px] h-[120vh] bg-[linear-gradient(180deg,#F8E5BD0A_4%,#DFC082_25%,#A97A39_50%,#DFC082_75%,#F3DCA80A_96%)]" />
        </div>
      </div>
    </div>
  );
}
