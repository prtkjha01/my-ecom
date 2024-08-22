import AboutUsColumn from "./components/AboutUs";
import QuickLinksColumn from "./components/QuickLinks";
import StayConnectedColumn from "./components/StayConnected";

const Footer = () => {
  return (
    <footer className=" bg-[#014aad]   w-full text-white flex flex-col md:flex-row justify-between items-start gap-10 px-4 py-20 lg:px-10">
      <div className="footer-left w-full">
        <AboutUsColumn />
      </div>
      <div className="footer-center md:pl-32 w-full">
        <QuickLinksColumn />
      </div>
      <div className="footer-right w-full">
        <StayConnectedColumn />
      </div>
    </footer>
  );
};

export default Footer;
