import Navbar from "./parts/Header";
import Footer from "./parts/Fooer";
//import LoadingScreen from "./parts/loding"

import AgreementCustomer from "./agreement/customer/page";
//import AgreementReseller from "./agreement/reseller/page"
import "../globals.css";
export default function Home() {
  return (
    <div className="flex flex-col w-[100%] ">
      {/* <Navbar/>
     <Footer/>
              <AgreementReseller/>

        */}
             
 <AgreementCustomer />
    </div>
  );
}
