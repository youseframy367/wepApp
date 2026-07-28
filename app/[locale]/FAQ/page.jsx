import BanerCommponnt from "../componnt/Baner";
import FirstPoint from "../componnt/FirstPoint";
import GradientBorderBox from "../componnt/GradiantBox";
import Title from "../componnt/TitleComponent";
import {
  GeneralInformation,
  AccountRegistration,
  Subscription,
  TechnicalSupport,
  DataProtection,
  LegalCompliance
} from "./FAQData";
import MapOfAccorditionGradientBox from "../componnt/MapOfAccordionGradientBox";
export default function FAQ() {
  const map = [
    "General Information",
    "privacy &Data Protection",
    "International Access",
    "Account & Registration",
    "Legal & Compliance",
    "",
    "Subscription & Billing",
    "Device Management",
    "",
    "Technical Support",
    "Payment & Refunds",
  ];
  return (
    <div>
      <BanerCommponnt namespace="FAQ.Banner" />
      <FirstPoint withContainer={false} namespace="FAQ.firstPoint" />
      <GradientBorderBox className="grid md:grid-cols-3 grid-cols-1 w-[90%] gap-[20px] p-[30px] mx-auto my-[20px]">
        {map.map((item, index) => (
          <div key={index} className="flex items-center gap-[10px] ">
            {item !== "" && (
              <img
                src="/imge/checkBox.svg"
                icon="check Box"
                className="w-[25px] h-[25px]"
              />
            )}
            <p className="font-[400] font-inter text-[18px] tracking-[-0.25px] underline">
              {item}
            </p>
          </div>
        ))}
      </GradientBorderBox>
      <Title
        urlImg="/imge/agreement/reseller/i.svg"
        titleKey="GeneralInformation"
      />
      <MapOfAccorditionGradientBox
        CuntEffect={1}
        data={GeneralInformation}
        namespace="FAQ.GeneralInformation"
      />
      <Title
        urlImg="/imge/agreement/reseller/i.svg"
        titleKey="AccountRegistration"
      />
      <MapOfAccorditionGradientBox
        CuntEffect={1}
        data={AccountRegistration}
        namespace="FAQ.AccountRegistration"
      />
      <Title urlImg="/imge/agreement/reseller/i.svg" titleKey="Subscription" />
      <MapOfAccorditionGradientBox
        CuntEffect={1}
        data={Subscription}
        namespace="FAQ.Subscription"
      />
      <Title
        urlImg="/imge/agreement/reseller/i.svg"
        titleKey="TechnicalSupport"
      />
      <MapOfAccorditionGradientBox
        CuntEffect={1}
        data={TechnicalSupport}
        namespace="FAQ.TechnicalSupport"
      />
      <Title
        urlImg="/imge/agreement/reseller/i.svg"
        titleKey="DataProtection"
      />
      <MapOfAccorditionGradientBox
        CuntEffect={1}
        data={DataProtection}
        namespace="FAQ.DataProtection"
      />
      <Title
        urlImg="/imge/agreement/reseller/i.svg"
        titleKey="LegalCompliance"
      />
       <MapOfAccorditionGradientBox
        CuntEffect={1}
        data={LegalCompliance}
        namespace="FAQ.LegalCompliance"
      />
      <Title
        urlImg="/imge/agreement/reseller/i.svg"
        titleKey="DeviceManagement"
      />
       <MapOfAccorditionGradientBox
        CuntEffect={1}
        data={LegalCompliance}
        namespace="FAQ.LegalCompliance"
      />
    </div>
  );
}
