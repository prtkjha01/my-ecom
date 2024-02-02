import { useRouter } from "next/router";
import logo from "@assets/logo.png";
import Search from "./Search";
import Actions from "./Actions";

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <nav className=" bg-slate-200 shadow-lg z-[1] lg:sticky lg:top-0 md:sticky md:top-0 sm:sticky sm:top-0 flex justify-between items-center pt-3 px-4 sm:py-5 sm:px-8 md:py-5 md:px-8 lg:py-5 lg:px-8  gap-4 lg:gap-40">
        <div className="left flex items-center gap-4 lg:gap-8 w-full">
          <img
            src={logo.src}
            alt="brand"
            className="brand w-10 h-10 object-contain mix-blend-darken cursor-pointer"
            onClick={() => router.push("/")}
          />
          <div className="w-full hidden lg:block md:block sm:block">
            <Search />
          </div>
        </div>
        <div className="right">
          <Actions />
        </div>
      </nav>
      <nav className="mobile-search shadow-lg z-[1] sticky top-0 bg-slate-200 flex justify-between items-center py-5 px-4 lg:hidden md:hidden sm:hidden">
        <Search />
      </nav>
    </>
  );
};

export default Navbar;
