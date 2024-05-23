import Header from "../app/components/Header";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import PromoSection from "./components/PromoSection";
import CategorySection from "./components/CategorySection";

export default function HomePage() {
  return (
    <div>
      <Header />
      <PromoSection />
      <CategorySection />
      <Newsletter />
      <Footer />
    </div>
  );
}
