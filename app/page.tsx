import Newsletter from "./components/Newsletter";
import PromoSection from "./PromoSection";
import CategorySection from "./CategorySection";

export default function HomePage() {
  return (
    <div>
      <PromoSection />
      <CategorySection />
      <Newsletter />
    </div>
  );
}
