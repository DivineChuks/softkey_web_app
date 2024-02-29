// hooks/useStripeCheckout.js
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY);

const useStripeCheckout = () => {
  const handleCheckout = async (cartItems) => {
    const stripe = await stripePromise;
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cartItems }),
    });
    const { sessionId } = await response.json();

    if (!sessionId) {
      console.error("Session ID is missing.");
      return;
    }

    // Redirect to Stripe's checkout
    const result = await stripe.redirectToCheckout({
      sessionId,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return handleCheckout;
};

export default useStripeCheckout;
