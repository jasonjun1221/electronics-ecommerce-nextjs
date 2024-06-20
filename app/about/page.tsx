import OrderConfirmation from "../components/OrderConfirmation";
import PaymentForm from "../components/PaymentForm";
import ProductOverview from "../components/ProductOverview";

function AboutPage() {
  return (
    <>
      <ProductOverview />
      <PaymentForm />
      <OrderConfirmation />
    </>
  );
}

export default AboutPage;
