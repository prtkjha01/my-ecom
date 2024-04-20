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
  const quickLinks = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "About Us",
      link: "/about-us",
    },
    {
      id: 3,
      title: "Contact Us",
      link: "/contact-us",
    },
    {
      id: 4,
      title: "FAQ",
      link: "/faq",
    },
    {
      id: 5,
      title: "Terms and Conditions",
      link: "/terms-and-conditions",
    },
    {
      id: 6,
      title: "Privacy Policy",
      link: "/privacy-policy",
    },
    {
      id: 7,
      title: "Returns",
      link: "/returns",
    },
  ];
  return (
    <div className="footer-column">
      <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
      <ul className="text-sm text-slate-200 w-full">
        {quickLinks?.map((link) => (
          <li key={link.id} className="cursor-pointer hover:underline w-max">
            {link.title}
          </li>
        ))}
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
        <Icon
          className=" transition duration-300 hover:scale-105 cursor-pointer"
          as={MdFacebook}
          boxSize={6}
          onClick={() => window.open("https://www.facebook.com/", "_blank")}
        />
        <Icon
          className=" transition duration-300 hover:scale-105 cursor-pointer"
          as={FaXTwitter}
          boxSize={6}
          onClick={() =>
            window.open("https://twitter.com/Prateek_Jha01", "_blank")
          }
        />
        <Icon
          className=" transition duration-300 hover:scale-105 cursor-pointer"
          as={FaLinkedin}
          boxSize={6}
          onClick={() =>
            window.open("https://www.linkedin.com/in/prateekjha01/", "_blank")
          }
        />
        <Icon
          className=" transition duration-300 hover:scale-105 cursor-pointer"
          as={FaInstagram}
          boxSize={6}
          onClick={() =>
            window.open("https://www.instagram.com/_prateek_jha_/", "_blank")
          }
        />
      </div>
      <p className="text-sm text-slate-200">Subscribe to our newsletter:</p>
      <input
        className="p-2 rounded-sm outline-none w-1/2 mt-1 text-slate-600"
        type="email"
        placeholder="Enter your email"
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
