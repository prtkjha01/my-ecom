import landingPageBanner from "@assets/LandingPageBanner.png";
import { useRouter } from "next/router";

const Banner: React.FC = () => {
  const router = useRouter();
  return (
    <section
      className="banner mt-48"
      onClick={() => router.push("/search?q=iphone")}
    >
      <img
        src={landingPageBanner.src}
        className="aspect-[18/9] md:aspect-[21/9] lg:aspect-[25/9] cursor-pointer"
        alt="Landing page banner"
      />
    </section>
  );
};

export default Banner;
