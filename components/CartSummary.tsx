"use client";
import React from "react";
import Link from "next/link";
import { getStripe } from "@/app/lib/stripe";
import { useShoppingCart } from "use-shopping-cart";

const CartSummary = () => {
  const { cartCount, totalPrice, redirectToCheckout, cartDetails } =
    useShoppingCart();

  async function handleCheckout(e: any) {
    e.preventDefault();
    try {
      const res = await fetch(`/api/checkout`, {
        method: "POST",
        body: JSON.stringify(cartDetails),
      });
      if (!res.ok) {
        throw new Error("Error fetching checkout");
      }
      const data = await res.json();
      const stripe = await getStripe();

      //console.log(data)
      if (stripe) {
        const result = await stripe.redirectToCheckout({
          sessionId: data.id,
        });

        if (result.error) {
          console.error("Error in redirectToCheckout:", result.error);
        }
        //window.location.href = `https://checkout.stripe.com/pay/${data.id}`;
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="w-full md:w-4/12">
      {cartCount === 0 ? (
        <></>
      ) : (
        <div className="flex flex-col gap-y-6 shadow-sm rounded-md px-6 py-6">
          <h1>Cart Summary</h1>
          <div className="py-3 border-b border-gray-300">
            <p>Subtotal: ${totalPrice}</p>
          </div>
          <div className="py-3 border-b border-gray-300">
            <p>Shipping Estimate: $5000</p>
          </div>
          <div className="py-3 border-b border-gray-300">
            <p>Order Total: ${totalPrice! + 5000}</p>
          </div>
          <div className="w-full text-center bg-black text-white rounded-sm py-1">
            <button onClick={handleCheckout} className="w-full text-center bg-black text-white rounded-sm py-1">
              Checkout
            </button>
          </div>
          <div className="w-full mt-3 text-center bg-white text-black rounded-sm py-1">
            <Link href="/shop">
              <button className="w-full text-center bg-white text-black rounded-sm py-1 border border-gray-300">Continue Shopping</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSummary;
