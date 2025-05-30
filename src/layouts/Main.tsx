import Navabar from "@/components/common/Navbar/index";
import Footer from "@/components/common/Footer/index";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <Navabar />
      <main className="min-h-[calc(100vh-428px)]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
