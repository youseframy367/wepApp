import Component from "./Component.json";
import Home from "./home/home.json";
import ManagePlaylist from "./ManagePlaylist/managePlaylist.json";
import LegalPolicy from "./LegalPolicy/LegalPolicy.json";
import TermsAndConditions from "./LegalPolicy/TermsAndConditions.json";
import PrivcyPolicy from "./LegalPolicy/privacyPolicy.json";
import RefundPolicy from "./LegalPolicy/RefundPolicy.json";
import EULA from "./LegalPolicy/EULA.json";
import NotSellOrShare from "./LegalPolicy/NotSellOrShare.json";
import disclaimerOfContent from "./LegalPolicy/disclaimerOfContent.json";
import agreementCustomer from "./agreement/AgreementCustomer.json";
import AgreementReseller from "./agreement/AgreementReseller.json";
export default {
  ...Component,
  ...Home,
  ...ManagePlaylist,
  ...LegalPolicy,
  ...TermsAndConditions,
  ...PrivcyPolicy,
  ...RefundPolicy,
  ...EULA,
  ...NotSellOrShare,
  ...disclaimerOfContent,
  ...agreementCustomer,
  ...AgreementReseller
};