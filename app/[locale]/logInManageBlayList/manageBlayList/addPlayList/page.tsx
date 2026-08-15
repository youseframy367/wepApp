"use client";

import { useState } from "react";
import api from "../../../../services/api";
import GradientBorderBox from "../../../componnt/GradiantBox";
import { useLocale, useTranslations } from "next-intl";
import ImageCheckbox from "../../../componnt/CheckBox";

interface FormData {
  playlistName: string;
  playlistUrl: string;
  xmltv: string; pin: string; confirmPin: string;
} interface FormItem {
  key: "PlaylistName" | "PlaylistURL" | "XMLTV";
  type: string;
  img: string;
}
interface FormDrawerItem {
  key: "PIN" | "confirmPIN";
  type: string;
  img: string;
}



export default function ManagBlayList() {
  const local = useLocale();
  const t = useTranslations("AddBlayList");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState<FormData>({
    playlistName: "",
    playlistUrl: "",
    xmltv: "",
    pin: "",
    confirmPin: "",
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (formData.pin !== formData.confirmPin) {
      setError(local === "ar" ? "رمز PIN غير متطابق" : "PIN codes do not match");
      return;
    }

    try {
      setLoading(true);

      const { data } = await api.post("/api/playlist", formData);

      setSuccess(data.message || "Success");
    } catch (err) {
      const axiosErr = err as unknown as {
        response?: { data?: { message?: unknown } };
      };
      setError(
        axiosErr?.response?.data?.message
          ? String(axiosErr.response.data.message)
          : local === "ar"
            ? "حدث خطأ في الخادم"
            : "Server error"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const form: FormItem[] = [
    {
      key: "PlaylistName",
      type: "text",
      img: "/imge/manageBlayList/manageBlayList/AddPlayList/namePlayList.svg",
    },
    {
      key: "PlaylistURL",
      type: "text",
      img: "/imge/manageBlayList/manageBlayList/AddPlayList/playLisyUrl.svg",
    },
    {
      key: "XMLTV",
      type: "text",
      img: "/imge/manageBlayList/manageBlayList/AddPlayList/XML.svg",
    },
  ];

  const formDrwer: FormDrawerItem[] = [
    {
      key: "PIN",
      type: "text",
      img: "/imge/manageBlayList/manageBlayList/AddPlayList/PIN.svg",
    },
    {
      key: "confirmPIN",
      type: "text",
      img: "/imge/manageBlayList/manageBlayList/AddPlayList/PIN.svg",
    },
  ];

  const [loading, setLoading] = useState(false);
  const [openDrwer, setOpenDrwer] = useState(false);
  return (
    <div
      className={` ${openDrwer ? "mt-[150px]" : "mt-[100px]"} flex flex-col justify-center items-center md:min-h-[110vh] min-h-[70vh]`}
    >
      <img
        src="/imge/effect.png"
        className="absolute md:top-[0%] top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
        alt="effect"
      />

      <h1
        className={`text-primary tracking-[-0.25px] font-[500] md:font-[700] ${local === "ar"
          ? "font-cairo md:text-[50px] text-[30px]"
          : "font-inter md:text-[60px] text-[35px]"
          }`}
      >
        {t("title")}
      </h1>

      <p
        className={`font-[600] md:text-[16px] text-center text-[14px] ${local === "ar" ? "font-cairo" : "font-montserrat"
          } tracking-[-0.25px]`}
      >
        {t("description")}
      </p>

      <GradientBorderBox className="md:w-[667px] w-[94%] mx-auto my-[20px] flex flex-col md:p-[20px] p-[15px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-[19px]">
          {form.map((item) => (
            <div key={item.key} className="flex flex-col gap-[10px] mt-[10px]">
              <label
                className={`font-[600] ${local === "ar" ? "font-cairo" : "font-inter"
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
                    name={
                      item.key === "PlaylistName"
                        ? "playlistName"
                        : item.key === "PlaylistURL"
                          ? "playlistUrl"
                          : "xmltv"
                    }
                    value={
                      item.key === "PlaylistName"
                        ? formData.playlistName
                        : item.key === "PlaylistURL"
                          ? formData.playlistUrl
                          : formData.xmltv
                    }
                    onChange={handleChange}
                    placeholder={t(`form.${item.key}.placeholder`)}
                    className="font-[500] font-[inter] md:text-[12px] text-[12px] text-[#ffffff83] border-none outline-none bg-transparent w-full"
                  />
                </div>
              </GradientBorderBox>
            </div>
          ))}

          {formDrwer.map((item) => (
            <div
              key={item.key}
              className={` ${openDrwer ? "block" : "hidden"} flex flex-col gap-[10px] mt-[10px]`}
            >
              <label
                className={`font-[600] ${local === "ar" ? "font-cairo" : "font-inter"
                  } tracking-[-0.25px] text-[14px]`}
              >
                {t(`formDrwer.${item.key}.label`)}
              </label>

              <GradientBorderBox className="flex justify-between h-[43px] px-[15px]">
                <div className="flex gap-[10px]">
                  <img src={item.img} alt="icon" width="24" height="24" />

                  <div className="w-[1px] h-[27px] bg-primary my-auto"></div>

                  <input
                    type={item.type}
                    name={item.key === "PIN" ? "pin" : "confirmPin"}
                    value={
                      item.key === "PIN" ? formData.pin : formData.confirmPin
                    }
                    onChange={handleChange}
                    placeholder={t(`formDrwer.${item.key}.placeholder`)}
                    className="font-[500] font-[inter] md:text-[12px] text-[12px] text-[#ffffff83] border-none outline-none bg-transparent w-full"
                  />
                </div>
              </GradientBorderBox>
            </div>
          ))}

          <div className="flex items-center gap-[10px]">
            <ImageCheckbox
              checked={openDrwer}
              onChange={() => {
                setOpenDrwer(!openDrwer);
              }}
            />
            <div>
              <p className="font-[600] text-[12px] font-inter tracking[-0.25px]">
                Protect this playlist
              </p>
              <p className="font-[500] font-inter text-[11px] tracking-[-0.25px]">
                <span className="text-primary">NOTE :</span> Protected playlists
                will not be viewed or modified without entering PIN
              </p>
            </div>
          </div>

          {error && (
            <p className="text-red-400 text-[12px] font-[500] text-center">{error}</p>
          )}

          {success && (
            <p className="text-primary text-[12px] font-[500] text-center">{success}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`h-[38px] mt-[20px] text-[#000000] rounded-[6px] font-[600] ${local === "ar"
              ? "font-cairo text-[16px]"
              : "font-inter text-[14px]"
              } flex justify-center items-center bg-primary border-[2px] border-[#FCD570]`}
          >
            {loading ? t("button.loading") : t("button.login")}
          </button>
        </form>
      </GradientBorderBox>
    </div>
  );
}
