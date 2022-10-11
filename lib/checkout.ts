import { loadStripe, Stripe } from "@stripe/stripe-js";

export const checkout = async ({ lineItems }: any) => {
  let stripePromise: Promise<Stripe | null> | null = null;

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
      );
    }
    return stripePromise;
  };

  const stripe = await getStripe();

  await stripe?.redirectToCheckout({
    mode: "subscription",
    lineItems,
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: "http://localhost:3000/payment",
  });
};
