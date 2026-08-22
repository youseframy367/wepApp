export interface TypeData {
  img: string;
  key: string;
  className?: string;
}
export const WhatIsEXPRO: TypeData[] = [
  {
    img: "/imge/home/easeToUse.webp",
    key: "easeToUse"
  },
  {
    img: "/imge/home/core.webp",
    key: "coreFeatures"
  },
  {
    img: "/imge/home/prantalControl.webp",
    key: "parentalControls"
  },
  {
    img: "/imge/home/secur.webp",
    key: "securePlayback"
  }
];

export const supportedBlatform: TypeData[] = [
  {
    key: "smartTv",
    img: "/imge/home/exproSmartTV.webp",
  },
  {
    key: "androidDevices",
    img: "/imge/home/androidDevice.webp",
  },
  {
    key: "appleDevices",
    img: "/imge/home/abbDevices.webp",
  },
  {
    key: "pcAndLaptop",
    img: "/imge/home/pcAndLabtop.webp",
    className: "mt-[10px]",
  },
];