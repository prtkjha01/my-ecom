export default () => {
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
