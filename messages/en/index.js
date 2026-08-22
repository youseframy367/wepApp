import Component from "./Component.json";
import Home from "./home/home.json";
import managePlaylistLogin from "./ManagePlaylist/managePlaylistLogin.json";
import LegalPolicy from "./LegalPolicy/LegalPolicy.json";
import TermsAndConditions from "./LegalPolicy/TermsAndConditions.json";
import PrivcyPolicy from "./LegalPolicy/privacyPolicy.json";
import RefundPolicy from "./LegalPolicy/RefundPolicy.json";
import EULA from "./LegalPolicy/EULA.json";
import NotSellOrShare from "./LegalPolicy/NotSellOrShare.json";
import disclaimerOfContent from "./LegalPolicy/disclaimerOfContent.json";
import agreementCustomer from "./agreement/AgreementCustomer.json";
import agreementReseller from "./agreement/AgreementReseller.json";
import OurMission from "./LegalPolicy/OurMission.json";
import companyInfo from "./LegalPolicy/companyInfo.json";
import GlobalCompliance from "./LegalPolicy/GlobalCompliance.json";
import DownloadAndWatching from "./DownloadAndWatching/home.json";
import Activation from "./ManagePlaylist/Activation.json";
import TransferDevice from "./ManagePlaylist/TransferDevice.json"
import UsersStatus from "./ManagePlaylist/UsersStatus.json";
import DeviceKey from "./ManagePlaylist/DeviceKey.json";
import ParentPIN from "./ManagePlaylist/ParentPIN.json"
import ManagePlaylist from "./ManagePlaylist/managePlaylist.json";
import Dashboard from "./Dashboard/Dashboard.json"
import FAQ from "./FAQ/FAQ.json"
import Seo from "./Seo.json"
export default {
  ...Seo,
  ...Component,
  ...Home,
  ...managePlaylistLogin,
  ...LegalPolicy,
  ...TermsAndConditions,
  ...PrivcyPolicy,
  ...RefundPolicy,
  ...EULA,
  ...NotSellOrShare,
  ...disclaimerOfContent,
  ...agreementCustomer,
  ...agreementReseller,
  ...OurMission,
  ...companyInfo,
  ...GlobalCompliance,
  ...DownloadAndWatching,
  ...Activation,
  ...TransferDevice,
  ...UsersStatus,
  ...DeviceKey,
  ...ParentPIN,
  ...ManagePlaylist,
  ...Dashboard,
  ...FAQ,
};