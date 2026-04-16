import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import WeeklyAd from "@/components/sections/WeeklyAd";
import CategoryGrid from "@/components/sections/CategoryGrid";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import NewsletterSignup from "@/components/sections/NewsletterSignup";
import StoreInfo from "@/components/sections/StoreInfo";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WeeklyAd />
        <CategoryGrid />
        <FeaturedProducts />
        <WhyUs />
        <Testimonials />
        <Gallery />
        <NewsletterSignup />
        <StoreInfo />
      </main>
      <Footer />
    </>
  );
}
