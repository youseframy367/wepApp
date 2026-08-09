import BanerCommponnt from "../componnt/Baner";
import Worning from "../componnt/warning";
import { useTranslations } from "next-intl";
import BlatformSupport from "./StepsToStartStreaming"
import SupportedDevices from "./SupportedDevices"
export default function DownloadAndWatching() {
  const t = useTranslations("DownloadAndWatching");
  return (
    <div>
      <BanerCommponnt
        namespace="DownloadAndWatching.Banner"
        imgUrl="/imge/policy/DownloadAndWatching/DownloadAndWatching.svg"
        withContainer={false}
        classNameImg="md:mt-[320px] mt-[300px]"
      />
      <Worning
        reverse={true}
        title={t("note.title")}
        text={t("note.text")}
        classNamep="flex-row-reverse"
        className="md:mt-[400px] mt-[350px]"
        img="/imge/policy/DownloadAndWatching/EXPRO.svg"
      />
      <SupportedDevices/>
      <BlatformSupport/>
    </div>
  );
}
