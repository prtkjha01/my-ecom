import landingPageBanner from "@assets/LandingPageBanner.png";
const Banner = () => {
  return (
    <section className="banner mt-48">
      <img
        src={landingPageBanner.src}
        className=" aspect-[18/9] md:aspect-[21/9] lg:aspect-[25/9]"
        alt=""
      />
    </section>
  );
};

export default Banner;
