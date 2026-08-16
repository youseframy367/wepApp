
import BlatformSupport from "./SuportedBlatForm"
import Baner from "./Banner"
import WhatIsExpro from "./WhatIsEXPRO"
import { generateSeo } from "@/Metadata/Seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generateSeo({ locale, namespace: "Seo.Home", path: "/home" });
}
export default function HomeBage (){
    return(
        <div>
        <Baner/>
        <WhatIsExpro/>
        <BlatformSupport/>
        </div>
    )
}