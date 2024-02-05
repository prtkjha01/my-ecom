import { Icon } from "@chakra-ui/react";
import { MdFacebook } from "react-icons/md";
import { FaXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";
const AboutUsColumn = () => {
  return (
    <div className="footer-column">
      <h3 className="text-lg font-semibold mb-2">About MyEcom</h3>
      <p className="text-sm text-slate-200">
        Welcome to MyEcom, your go-to destination for quality products and
        unbeatable deals. At MyEcom, we are committed to providing an
        exceptional online shopping experience.
      </p>
      <p className="text-sm text-slate-200">
        MyEcom is more than just a store; it's a place where quality meets
        affordability. Join our community and experience the joy of hassle-free
        online shopping.
      </p>
    </div>
  );
};

const QuickLinksColumn = () => {
  return (
    <div className="footer-column">
      <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
      <ul className="text-sm text-slate-200">
        <li>Home</li>
        <li>Shop</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>FAQ</li>
        <li>Terms and Conditions</li>
        <li>Privacy Policy</li>
        <li>Returns</li>
      </ul>
    </div>
  );
};

const StayConnectedColumn = () => {
  return (
    <div className="footer-column">
      <h3 className="text-lg font-semibold mb-2">Stay Connected</h3>
      <p className="text-sm text-slate-200">
        Follow us on social media for the latest updates, promotions, and more.
      </p>
      <div className="flex space-x-2 items-center mt-2 mb-4">
        <Icon as={MdFacebook} boxSize={6} />
        <Icon as={FaXTwitter} boxSize={6} />
        <Icon as={FaLinkedin} boxSize={6} />
        <Icon as={FaInstagram} boxSize={6} />
      </div>
      <p className="text-sm text-slate-200">Subscribe to our newsletter:</p>
      <input
        type="email"
        placeholder="Enter your email"
        className="p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

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
