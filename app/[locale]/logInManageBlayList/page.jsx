"use client";

import { useState } from "react";
import GradientBorderBox from "../componnt/GradiantBox";
import { useLocale , useTranslations } from "next-intl";
import Chat from "../chat/ComponentParent"
import { useRouter } from "next/navigation";
export default function ManagBlayList() {
  const local = useLocale();
  const t = useTranslations("managePlaylist");
  const router =useRouter()
 const form = [
  {
    name: "device_id",
    key: "deviceId",
    type: "text",
    img: "/imge/manageBlayList/idIcon.svg",
  },
  {
    name: "device_key",
    key: "deviceKey",
    type: "text",
    img: "/imge/manageBlayList/keyIcon.svg",
  },
  {
    name: "captcha",
    key: "captcha",
    type: "text",
    img: "/imge/manageBlayList/chekSifty.svg",
    imgRelode: "/imge/manageBlayList/refresh 2.svg",
  },
];

    const [formData, setFormData] = useState({
      device_id: "",
      device_key: "",
      captcha: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    const handleSubmit = async (e) => {
      e.preventDefault();

      setLoading(true);
      setError("");
      setSuccess("");

      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/device/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        const data = await response.json();

        if (response.ok) {
          setSuccess(data.message || "Success");

          if (data.token) {
            localStorage.setItem("token", data.token);
          }

          console.log(data);
        } else {
          setError(data.message || "Something went wrong");
        }
      } catch (err) {
        setError("Server Error");
        console.log(err);
      }

      setLoading(false);
    };

  return (
   <div className="mt-[100px] flex flex-col justify-center items-center md:min-h-[110vh] min-h-[70vh]">
  <img
    src="/imge/effect.png"
    className="absolute md:top-[0%] top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
    alt="effect"
  />

  <h1
    className={`text-primary tracking-[-0.25px] font-[500] md:font-[700] ${
      local === "ar"
        ? "font-cairo md:text-[50px] text-[30px]"
        : "font-inter md:text-[60px] text-[35px]"
    }`}
  >
    {t("title")}
  </h1>

  <p
    className={`font-[600] md:text-[16px] text-center text-[14px] ${
      local === "ar" ? "font-cairo" : "font-montserrat"
    } tracking-[-0.25px]`}
  >
    {t("description")}
  </p>

  <GradientBorderBox className="md:w-[667px] w-[94%] mx-auto my-[20px] flex flex-col md:p-[20px] p-[15px]">
    <form onSubmit={handleSubmit} className="flex flex-col gap-[19px]">
      {form.map((item) => (
        <div key={item.key} className="flex flex-col gap-[10px] mt-[10px]">
          <label
            className={`font-[600] ${
              local === "ar" ? "font-cairo" : "font-inter"
            } tracking-[-0.25px] text-[14px]`}
          >
            {t(`form.${item.key}.label`)}
          </label>

          <GradientBorderBox className="flex justify-between h-[43px] px-[15px]">
            <div className="flex gap-[10px]">
              <img src={item.img} alt="icon" width="24" height="24" />

              <div className="w-[1px] h-[27px] bg-primary my-auto"></div>

              <input
                type={item.type}
                placeholder={t(`form.${item.key}.placeholder`)}
                value={formData[item.name]}
                className="font-[500] font-[inter] md:text-[12px] text-[10px] text-[#ffffff83] border-none outline-none bg-transparent w-full"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [item.name]: e.target.value,
                  })
                }
              />
            </div>

            {item.imgRelode && (
              <button
                type="button"
                className="w-[31px] h-[28px] cursor-pointer border-primary rounded-[4px] flex justify-center items-center my-auto"
              >
                <img src={item.imgRelode} alt="reload" />
              </button>
            )}
          </GradientBorderBox>
        </div>
      ))}

      {error && (
        <p className="text-red-500 text-center">
          {error}
        </p>
      )}

      {success && (
        <p className="text-green-500 text-center">
          {success}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className={`h-[38px] mt-[20px] text-[#000000] rounded-[6px] font-[600] ${
          local === "ar"
            ? "font-cairo text-[16px]"
            : "font-inter text-[14px]"
        } flex justify-center items-center bg-primary border-[2px] border-[#FCD570]`}
      onClick={()=>{
        router.push("./")
      }}
      >
        {loading ? t("button.loading") : t("button.login")}
      </button>
    </form>
  </GradientBorderBox>
 <Chat/>
</div>
  );
}
