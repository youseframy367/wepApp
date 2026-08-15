import React from "react";
import BlackBox from "../component/BlackBox";
import { useTranslations } from "next-intl";

interface Device {
  name: string;
  alt: string;
}

export default function SupportedDevices() {
  const devices :Device[] = [
    { name: "windows", alt: "Windows" },
    { name: "linx", alt: "Linux" },
    { name: "apple", alt: "Apple" },
    { name: "android", alt: "Android" },
    { name: "samsung", alt: "Samsung" },
    { name: "LG", alt: "LG" },
  ];
  const t = useTranslations("DownloadAndWatching")

  return (
    <div className="relative flex flex-col justify-center">
      <img
        src="/imge/effect.png"
        className="absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 md:top-[20%]"
        alt="effect"
      />

      <h1 className="text-primary text-[24px] md:text-[40px] my-10 font-semibold text-center relative z-10" data-aos="fade-up">
        {t("SupportedDevicesTitle")}
      </h1>

      <BlackBox className="relative z-10 w-[90%] mx-auto min-h-[130px] py-6 px-5 md:px-8">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-6 md:gap-0 w-full">
          {devices.map((device, index) => (
            <React.Fragment key={device.name}>
              <div className="flex justify-center flex-1 min-w-[90px]">
                <img
                  data-aos="fade-out"
                  src={`/imge/policy/DownloadAndWatching/${device.name}.svg`}
                  alt={device.alt}
                  className="w-[80px] md:w-[120px] lg:w-[130px] object-contain"
                />
              </div>

              {index !== devices.length - 1 && (
                <div className="hidden md:block w-px h-26 bg-primary" />
              )}
            </React.Fragment>
          ))}
        </div>
      </BlackBox>
    </div>
  );
}