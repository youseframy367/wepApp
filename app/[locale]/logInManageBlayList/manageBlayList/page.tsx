"use client";
import Image from "next/image";
import ParentPIN from "../ParentPIN";
import SliderManageBlayList from "./slider";
import { useActiveSection } from "../../context/ActiveSectionContext";
import { useLocale } from "next-intl";
import TransferDevice from "../TransferDevice";
import ManagePlaylists from "./ManagePlaylists";
import Activation from "../Activation";
import DeviceKey from "../DeviceKey";
import UsersStatus from "../UsersStatus";
export default function ManageBlayList() {
  const local = useLocale();
  const { activeSection } = useActiveSection();
  return (
    <div className="min-h-[100vh] relative">
      <Image src="/imge/effect.webp" alt="effect" width={1280} height={509} loading="lazy" priority  className="absolute md:top-[-5%] top-[0%]  left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none" />
      <Image src="/imge/effect.webp" alt="effect" width={1280} height={509} loading="lazy" priority  className="absolute top-[92%]   left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none" />
      <SliderManageBlayList />
      <div
        className={` ${local === "en" ? "md:ml-[25%] ml-[5%]" : "md:mr-[25%] mr-[5%]"} md:w-[70%]  w-[95%]  md:mt-[10vh] mt-[8vh] `}
      >
        {activeSection === "manage-playlists" && <ManagePlaylists />}
        {activeSection === "activation" && <Activation />}
        {activeSection === "transfer-device" && <TransferDevice />}
        {activeSection === "users-status" && <UsersStatus />}
        {activeSection === "parent-pin" && <ParentPIN />}
        {activeSection === "device-key" && <DeviceKey />}
      </div>
    </div>
  );
}
