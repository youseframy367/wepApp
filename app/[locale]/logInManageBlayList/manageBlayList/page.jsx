"use client";

import SliderManageBlayList from "./slider";
import { useActiveSection } from "../../context/ActiveSectionContext";
import { useLocale } from "next-intl";
import ManagePlaylists from "./ManagePlaylists";
export default function ManageBlayList() {
  const local = useLocale();
  const { activeSection } = useActiveSection();
  return (
    <div className="min-h-[100vh] relative">
      <img
        src="/imge/effect.png"
        className="absolute md:top-[-5%] top-[0%]  left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
        alt="effect"
      />
      <img
        src="/imge/effect.png"
        className="absolute top-[90%]   left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
        alt="effect"
      />
      <SliderManageBlayList />
      <div className={` ${local === "en" ?"md:ml-[25%] ml-[5%]":"md:mr-[25%] mr-[5%]"} md:w-[70%] md:w-[90%] w-[95%]  md:mt-[10vh] mt-[8vh] `}>
        {activeSection === "Manage Playlists" && <ManagePlaylists />}
      </div>
    </div>
  );
}
