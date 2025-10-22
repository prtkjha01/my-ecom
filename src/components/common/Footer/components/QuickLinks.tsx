import React from "react";
import { useRouter } from "next/router";

interface QuickLink {
  id: number;
  title: string;
  link: string;
}

const QuickLinks: React.FC = () => {
  const router = useRouter();

  const quickLinks: QuickLink[] = [
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
      title: "Game",
      link: "/game",
    },
    {
      id: 6,
      title: "Terms and Conditions",
      link: "/terms-and-conditions",
    },
    {
      id: 7,
      title: "Privacy Policy",
      link: "/privacy-policy",
    },
    {
      id: 8,
      title: "Returns",
      link: "/returns",
    },
  ];

  return (
    <div className="footer-column">
      <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
      <ul className="text-sm text-slate-200 w-full">
        {quickLinks?.map((link) => (
          <li
            key={link.id}
            className="cursor-pointer hover:underline w-max"
            onClick={() => router.push(link.link)}
          >
            {link.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
