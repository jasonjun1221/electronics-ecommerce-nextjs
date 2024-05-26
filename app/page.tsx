import Newsletter from "./Newsletter";
import PromoSection from "./PromoSection";
import CategorySection from "./CategorySection";
import ProductOverview from "./components/ProductOverview";
import PaymentForm from "./components/PaymentForm";
import OrderConfirmation from "./components/OrderConfirmation";

export default function HomePage() {
  return (
    <div>
      {/* <PromoSection />
      <CategorySection />
      <Newsletter /> */}
      <ProductOverview />
      <PaymentForm />
      <OrderConfirmation />
    </div>
  );
}
