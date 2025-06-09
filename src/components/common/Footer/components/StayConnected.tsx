"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button, Icon, useToast } from "@chakra-ui/react";
import { MdFacebook } from "react-icons/md";
import { FaXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { IconType } from "react-icons";
import { useSubscribeToNewsletterMutation } from "@/redux/api/user/user.api";

interface SocialIcon {
  id: number;
  name: string;
  link: string;
  icon: IconType;
}

const StayConnected: React.FC = () => {
  const toast = useToast();
  const [subscribeToNewsletter] = useSubscribeToNewsletterMutation();
  const [loading, setLoading] = useState<boolean>(false);
  const [icons] = useState<SocialIcon[]>([
    {
      id: 1,
      name: "Facebook",
      link: "https://www.facebook.com/",
      icon: MdFacebook,
    },
    {
      id: 2,
      name: "Twitter",
      link: "https://twitter.com/Prateek_Jha01",
      icon: FaXTwitter,
    },
    {
      id: 3,
      name: "Linkedin",
      link: "https://www.linkedin.com/in/prateekjha01/",
      icon: FaLinkedin,
    },
    {
      id: 4,
      name: "Instagram",
      link: "https://www.instagram.com/_prateek_jha_/",
      icon: FaInstagram,
    },
  ]);
  const [email, setEmail] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handleSubscription = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await subscribeToNewsletter({ email }).unwrap();
      setLoading(false);
      toast({
        title: "Success",
        description: "You're now subscribed to MyEcom newsletter !",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error: any) {
      setLoading(false);
      setEmail("");
      toast({
        title: "Error",
        description: error?.data?.message || "Something went wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="footer-column">
      <h3 className="text-lg font-semibold mb-2">Stay Connected</h3>
      <p className="text-sm text-slate-200 h-10">
        Follow us on social media for the latest updates, promotions, and more.
      </p>
      <div className="flex space-x-2 items-center mt-2 mb-4">
        {icons.map((icon) => (
          <Icon
            key={icon.id}
            className=" transition duration-300 hover:scale-105 cursor-pointer"
            as={icon.icon}
            boxSize={6}
            onClick={() => window.open(icon.link, "_blank")}
          />
        ))}
      </div>
      <form className="flex flex-col" onSubmit={handleSubscription}>
        <label className="text-sm text-slate-200">
          Subscribe to our newsletter:
        </label>
        <div className="relative w-max">
          <input
            className="p-2 pr-20 rounded-sm outline-none w-[300px] mt-1 text-slate-600"
            type="email"
            value={email}
            placeholder="Enter your email"
            required
            name="email"
            onChange={handleChange}
          />
          <Button
            p={1}
            position={"absolute"}
            h={"max-content"}
            right={2}
            top={2.5}
            isLoading={loading}
            type="submit"
          >
            Subscribe
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StayConnected;
