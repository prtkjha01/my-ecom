import Navabar from "@/components/common/Navbar/index";
import Footer from "@/components/common/Footer/index";
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navabar />
      <main className=" min-h-[calc(100vh-428px)]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
