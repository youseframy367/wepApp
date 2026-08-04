//import { generateSeo } from "@/Metadata/Seo";

//import LoadingScreen from "./parts/loding"
import { cookies } from "next/headers";
import HomeBage from "./home/page";
import AgreementCustomer from "./agreement/customer/page";
import AgreementReseller from "./agreement/reseller/page"
import "../globals.css";


//export async function generateMetadata({ params }) {
 // const { locale } = await params;

 // return generateSeo({
  //  locale,
  //  namespace: "Seo.Home",
  //  path: "/",
  //  image: "/images/home-og.jpg",
 // });
//}

export default async  function Home() {
  const cookieStore = await cookies();

 const step = cookieStore.get("agreementStep")?.value;

if (!step) {
  return <AgreementCustomer  />;
}

if (step === "reseller") {
  return <AgreementReseller />;
}

  return (
    <div>
       
        <HomeBage/>



    </div>
  );
}
