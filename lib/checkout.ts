import { loadStripe, Stripe } from "@stripe/stripe-js";

interface ItemsProps {
  lineItems: {
    price: string;
    quantity: number;
  }[]
}

export const checkout = async ({ lineItems }: ItemsProps) => {
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
    successUrl: `${window.location.origin}/stripe/success?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: `${window.location.origin}/payment`
  });
};
