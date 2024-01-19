import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});
import CheckoutSession from "@/components/CheckoutSession";
interface Props {
  searchParams: {
    session_id?: string;
  };
}

export default async function Page({ searchParams }: Props) {
  const sessionId = searchParams?.session_id ?? "";
  const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId);
  const customerDetails = checkoutSession?.customer_details;

  return (
    <main className="text-black text-center">
      <div className="">
        <div>
          <CheckoutSession customerDetails={customerDetails} />
        </div>
      </div>
    </main>
  );
}
