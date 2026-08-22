import BanerCommponnt from "../component/Banner";
import Worning from "../component/Warning";
import { useTranslations } from "next-intl";
import BlatformSupport from "./StepsToStartStreaming"
import SupportedDevices from "./SupportedDevices"
import { generateSeo } from "@/Metadata/Seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generateSeo({ locale, namespace: "Seo.DownloadAndWatching", path: "/DownloadAndWatching" });
}
export default function DownloadAndWatching() {
  const t = useTranslations("DownloadAndWatching");
  return (
    <div>
      <BanerCommponnt
        namespace="DownloadAndWatching.Banner"
        imgUrl="/imge/policy/DownloadAndWatching/DownloadAndWatching.webp"
        withContainer={false}
        classNameImg="md:mt-[320px] mt-[300px] md:w-[300px] w-[250px] md:mb-[-30px] "
      />
      <Worning
        reverse={true}
        title={t("note.title")}
        text={t("note.text")}
        classNamep="flex-row-reverse"
        className="md:mt-[400px] mt-[350px]"
        img="/imge/policy/DownloadAndWatching/EXPRO.webp"
      />
      <SupportedDevices/>
      <BlatformSupport/>
    </div>
  );
}
