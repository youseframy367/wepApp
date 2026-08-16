import { generateSeo } from "@/Metadata/Seo";
import { cookies } from "next/headers";
import HomeBage from "./home/page";
import AgreementCustomer from "./agreement/customer/page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return generateSeo({
    locale,
    namespace: "Seo.Home",
    path: "/",
    image: "/imge/home/EXBRO.png",
  });
}

export default async function Home() {
  const cookieStore = await cookies();

 const step = cookieStore.get("agreementStep")?.value;

if (!step) {
  return <AgreementCustomer  />;
}

  return (
    <div>
       
        <HomeBage/>



    </div>
  );
}
