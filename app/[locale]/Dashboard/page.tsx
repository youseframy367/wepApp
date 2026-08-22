"use client";
import { useEffect, useState } from "react";
import { DashboardData } from "./DashboardData";
import BlackBox from "../component/BlackBox";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const t = useTranslations("Dashboard");
  const locale = useLocale();
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const cookies = document.cookie.split(";");
      const stepCookie = cookies.find((c) => c.trim().startsWith("agreementStep="));
      const step = stepCookie ? stepCookie.split("=")[1] : "";
      
      if (step === "done") {
        setIsAuthorized(true);
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  const fontClass = locale === "en" ? "font-inter" : "font-cairo";

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (isAuthorized) {
    return (
      <div className="text-center flex flex-col gap-[30px] py-[100px] px-4 relative">
        <Image src="/imge/effect.webp" alt="effect" width={1280} height={509} priority className="absolute top-0 left-1/2 -translate-x-1/2 z-0 opacity-50" />
        <h1 className="font-montserrat font-[700] md:text-[60px] text-[40px] text-primary-animated relative z-10">
          {t("title")}
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 max-w-6xl mx-auto w-full relative z-10">
          <BlackBox className="p-8 flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="text-primary text-2xl">📁</span>
            </div>
            <h3 className="text-xl font-bold text-primary-dark">Manage Playlists</h3>
            <p className="text-gray-400 text-sm">Access and organize your media collections.</p>
            <button className="mt-4 px-6 py-2 bg-primary text-black rounded-lg font-bold">Open</button>
          </BlackBox>
          <BlackBox className="p-8 flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="text-primary text-2xl">⚙️</span>
            </div>
            <h3 className="text-xl font-bold text-primary-dark">Settings</h3>
            <p className="text-gray-400 text-sm">Configure your player and account preferences.</p>
            <button className="mt-4 px-6 py-2 bg-primary text-black rounded-lg font-bold">Open</button>
          </BlackBox>
          <BlackBox className="p-8 flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="text-primary text-2xl">👤</span>
            </div>
            <h3 className="text-xl font-bold text-primary-dark">Profile</h3>
            <p className="text-gray-400 text-sm">View and edit your user information.</p>
            <button className="mt-4 px-6 py-2 bg-primary text-black rounded-lg font-bold">Open</button>
          </BlackBox>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center flex flex-col gap-[10px] relative">
      <Image src="/imge/effect.webp" alt="effect" width={1280} height={509} priority className="absolute md:top-[-2%] top-[0%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none" />
      <h1 data-aos="fade-up" className="font-montserrat font-[700] md:mt-[100px] mt-[70px] md:text-[70px] text-[60px] text-primary-animated items-center">
        {t("title")}
      </h1>
      <h2 data-aos="fade-up" className={`font-[500] mt-[-10px] md:text-[30px] text-[25px] ${fontClass} tracking-[-0.25px] leading-[24px] text-primary-mid items-center`}>
        {t("subtitle")}
      </h2>
      <p data-aos="fade-up" className={`${locale === "en" ? "font-inter font-[600]" : "font-cairo font-[500]"} md:text-[16px] text-[14px] leading-[22px] tracking-[-0.25px]`}>
        {t("tagline")}
      </p>
      <p data-aos="fade-up" className={`md:w-[700px] w-[90%] mx-auto ${fontClass} font-[400] md:text-[16px] text-[14px] tracking-[-0.25px] leading-[24px]`}>
        {t("description")}
      </p>
      <Image data-aos="fade-out" src="/imge/home/EXBRO.webp" alt="EX-PRO" width={560} height={331} sizes="(min-width: 768px) 560px, 90vw" className="z-5 mx-auto md:w-[560px] w-[90%] h-auto" />
      <button
        data-aos="fade-out"
        className={`md:w-[327px] w-[280px] h-[60px] flex items-center justify-center gap-[10px] rounded-[10px] bg-primary ${locale === "en" ? " font-[600] font-inter md:text-[24px] text-[20px]" : " font-[700] md:text-[22px] text-[19px] font-cairo"} tracking-[-0.25px] text-[#000000] mx-auto`}
        onClick={() => router.push(`/${locale}/agreement/reseller`)}
      >
        <Image src="/imge/Dashbord/EnterDashbord.webp" alt="GoTODashbord" width={24} height={24} />
        {t("enterDashboard")}
        <Image src="/imge/Dashbord/drwer.webp" alt="arrow" width={24} height={22} className={locale === "ar" ? "rotate-180" : ""} />
      </button>
      
      <div className="flex text-center items-center justify-center gap-2 md:gap-3 my-3 px-4" data-aos="fade-up">
        <Image src="/imge/Dashbord/Secure.webp" alt="Secure" width={24} height={24} className="mt-1 md:mt-0 shrink-0" />
        <p className={`${fontClass} font-medium text-sm md:text-lg leading-5 md:leading-normal tracking-[-0.25px] text-left`}>
          <span dir={locale === "en" ? "ltr" : "rtl"} className="text-primary-dark text-start">
            {t("secureAccess")}
          </span>
          <span className="block md:inline md:ml-1">{t("secureText")}</span>
        </p>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 mt-[20px] w-[90%] mx-auto gap-[20px] text-start relative">
        <Image src="/imge/effect.webp" alt="effect" width={1280} height={509} loading="lazy" className="absolute md:top-[20%] top-[0%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none" />
        {DashboardData.map((item) => (
          <BlackBox borderEfect={false} key={item.key} className="flex gap-[15px] items-center w-[100%] p-[10px]">
            <Image src={item.img} alt={item.key} width={114} height={110} className="md:w-auto w-[80px] h-auto" data-aos="fade-out" />
            <div className="flex flex-col gap-[10px]" data-aos="fade-up">
              <h2 className={`font-[500] ${locale === "en" ? "font-montserrat" : "font-cairo"} md:text-[20px] text-[18px] text-primary-dark`}>
                {t(`${item.key}.title`)}
              </h2>
              <p className={`${locale === "en" ? "font-[400] md:text-[10px] text-[11px] font-inter" : "font-[500] md:text-[14px] text-[12px] font-cairo leading-[27px]"} w-[90%] tracking-[-0.25px]`}>
                {t(`${item.key}.text`)}
              </p>
            </div>
          </BlackBox>
        ))}
      </div>
      
      <BlackBox borderEfect={false} className="flex gap-[15px] items-center w-[100%] py-[20px] px-[30px] w-[90%] mx-auto text-start my-[20px]">
        <Image src="/imge/worning.webp" alt="Notice" width={42} height={34} data-aos="fade-out" />
        <div className="flex flex-col gap-[10px]" data-aos="fade-up">
          <h2 className={`font-[500] ${locale === "en" ? "font-montserrat" : "font-cairo"} md:text-[20px] text-[18px] text-primary-dark`}>
            {t("notice.title")}
          </h2>
          <p className={`${locale === "en" ? "font-[400] md:text-[10px] text-[11px] font-inter" : "font-[500] md:text-[14px] text-[12px] font-cairo leading-[27px]"} w-[90%] tracking-[-0.25px]`}>
            {t("notice.text")}
          </p>
        </div>
      </BlackBox>
    </div>
  );
}
