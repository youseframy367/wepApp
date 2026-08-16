import BanerCommponnt from "../component/Banner";
import FirstPoint from "../component/FirstPoint";
import GradientBorderBox from "../component/GradientBox";
import Title from "../component/TitleComponent";
import {
  GeneralInformation,
  AccountRegistration,
  Subscription,
  TechnicalSupport,
  DataProtection,
  LegalCompliance,
  DeviceManagement,
  Payment,
  Travel,
} from "./FAQData";
import MapOfAccorditionGradientBox from "../component/MapOfAccordionGradientBox";
import { useTranslations, useLocale } from "next-intl";
import { generateSeo } from "@/Metadata/Seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generateSeo({ locale, namespace: "Seo.FAQ", path: "/FAQ" });
}
export default function FAQ() {
  const locale = useLocale();
  const sections = [
    "GeneralInformation",
    "DataProtection",
    "Travel",
    "AccountRegistration",
    "LegalCompliance",
    null,
    "Subscription",
    "DeviceManagement",
    null,
    "TechnicalSupport",
    "Payment",
  ];
  const t = useTranslations("FAQ.sections");

  return (
    <div>
      <BanerCommponnt namespace="FAQ.Banner" />
      <FirstPoint
        withContainer={false}
        namespace="FAQ.firstPoint"
        className="md:mt-0 mt-[20px]"
      />
      <GradientBorderBox className="grid md:grid-cols-3 grid-cols-1 w-[90%] gap-[20px] p-[30px] mx-auto my-[20px]">
        {sections.map((item, index) =>
          item ? (
            <div key={index} className="flex items-center gap-[10px]">
              <img
                src="/imge/checkBox.svg"
                alt="check"
                className="w-[25px] h-[25px]"
              />
              <p
                className={`${locale === "en" ? "font-inter" : "font-cairo font-[400]"} text-[18px] underline`}
              >
                {t(item)}
              </p>
            </div>
          ) : (
            <div key={index} />
          ),
        )}
      </GradientBorderBox>
      <Title
        urlImg="/imge/agreement/i.svg"
        titleKey="GeneralInformation"
      />
      <MapOfAccorditionGradientBox
        CuntEffect={1}
        data={GeneralInformation}
        namespace="FAQ.GeneralInformation"
      />
      <Title
        urlImg="/imge/agreement/i.svg"
        titleKey="AccountRegistration"
      />
      <MapOfAccorditionGradientBox
        CuntEffect={1}
        data={AccountRegistration}
        namespace="FAQ.AccountRegistration"
      />
      <Title urlImg="/imge/agreement/i.svg" titleKey="Subscription" />
      <MapOfAccorditionGradientBox
        CuntEffect={1}
        data={Subscription}
        namespace="FAQ.Subscription"
      />
      <Title
        urlImg="/imge/agreement/i.svg"
        titleKey="TechnicalSupport"
      />
      <MapOfAccorditionGradientBox
        CuntEffect={1}
        data={TechnicalSupport}
        namespace="FAQ.TechnicalSupport"
      />
      <Title
        urlImg="/imge/agreement/i.svg"
        titleKey="DataProtection"
      />
      <MapOfAccorditionGradientBox
        CuntEffect={1}
        data={DataProtection}
        namespace="FAQ.DataProtection"
      />
      <Title
        urlImg="/imge/agreement/i.svg"
        titleKey="LegalCompliance"
      />
      <MapOfAccorditionGradientBox
        CuntEffect={1}
        data={LegalCompliance}
        namespace="FAQ.LegalCompliance"
      />
      <Title
        urlImg="/imge/agreement/i.svg"
        titleKey="DeviceManagement"
      />
      <MapOfAccorditionGradientBox
        CuntEffect={1}
        data={DeviceManagement}
        namespace="FAQ.DeviceManagement"
      />
      <Title urlImg="/imge/agreement/i.svg" titleKey="Payment" />
      <MapOfAccorditionGradientBox
        CuntEffect={1}
        data={Payment}
        namespace="FAQ.Payment"
      />
      <Title urlImg="/imge/agreement/i.svg" titleKey="Travel" />
      <MapOfAccorditionGradientBox
        CuntEffect={1}
        data={Travel}
        namespace="FAQ.Travel"
      />
    </div>
  );
}
