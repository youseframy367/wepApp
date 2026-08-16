import BanerCommponnt from "../../component/Banner";
import FirstPoint from "../../component/FirstPoint";
import ContanerTextAndImg from "../../component/ContainerImgAndText";
import { useTranslations, useLocale } from "next-intl";
import PolicyNote from "../../component/PolicyNote";
import Title from "../../component/TitleComponent";
import { LegalCompliance } from "./GlobalComplianceData";
import MapOfAccorditionGradientBox from "../../component/MapOfAccordionGradientBox";
import { generateSeo } from "@/Metadata/Seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generateSeo({ locale, namespace: "Seo.GlobalCompliance", path: "/legal-policy/GlobalCompliance" });
}
export default function GlobalCompliance() {
  const t = useTranslations("GlobalCompliance");
  const locale = useLocale();
  return (
    <div>
      <BanerCommponnt
        namespace="GlobalCompliance.banner"
        imgUrl="/imge/policy/GlobalCompliance/GlobalCompliance.svg"
        withContainer={false}
        classNameImg="md:mt-[270px]"
      />
      <FirstPoint
        withContainer={false}
        urlImg="/imge/logo.svg"
        namespace="GlobalCompliance.firstPoint"
        className="mt-[300px]"
      />

      <div className="flex gap-[20px] items-center w-[90%] mx-auto mt-[20px] ">
        <img src="/imge/policy/todo.svg" alt="todo" width="40px" />
        <h2
          className={`${locale === "en" ? "font-inter md:font-[700] font-[600] " : "font-cairo md:font-[600] font-[500]"} tracking-[-0.25px] md:text-[18px] text-[16px]`}
        >
          {t("acknowledgement.title")}
        </h2>
      </div>
      <ContanerTextAndImg
        namespace="GlobalCompliance.globalPrivacyControl"
        img="/imge/policy/DoNotSellOrShare/chexkHand.svg"
        positionEffect="20%"
      />
      <FirstPoint
        withContainer={false}
        urlImg="/imge/policy/GlobalCompliance/LegalFrameworks.svg"
        namespace="GlobalCompliance.twoPoint"
        className="mt-[50px]"
      />
      <PolicyNote NameParentSpace="GlobalCompliance" className="my-[20px]" />
      <Title
        titleKey="LegalCompliance"
        urlImg="/imge/policy/GlobalCompliance/LegalCompliance.svg"
      />
      <MapOfAccorditionGradientBox
        data={LegalCompliance}
        namespace="GlobalCompliance.LegalCompliance"
        CuntEffect={1}
        visibleLines={locale === "en" ? 3 : 2}
      />
    </div>
  );
}
