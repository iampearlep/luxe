"use client"
import { useEffect } from "react"
import { useShoppingCart } from "use-shopping-cart"
import Stripe from "stripe"

interface Props {
    customerDetails: Stripe.Checkout.Session.CustomerDetails | null
}

const CheckoutSession = ({customerDetails}: Props) => {
    const {clearCart} = useShoppingCart()
    useEffect(() => {
        if(customerDetails){
            clearCart()
        }
    }, [customerDetails])

  return (
    <div className="max-h-screen flex flex-col justify-center items-center gap-y-2 py-20">
        {!customerDetails ? (
        <div>
            <p>No checkout session found</p>
        </div>
        ) : (
        <div className="w-11/12 md:w-2/6 mx-auto py-16 shadow-md border border-gray-300 rounded-md">
             <h1 className="text-2xl font-semibold pb-3">Rich Kid!</h1>
        <p className='text-base'>Payment successful.</p>
        <h3 className="text-base">
        Thank you, <span className="font-semibold">{customerDetails.name}</span>!
      </h3>
      <p className="text-base w-10/12 md:w-9/12 mx-auto">
        Check your purchase email{" "}
        <span className="font-semibold">{customerDetails.email}</span> for
        your invoice.
      </p>
        </div>
        )}
    </div>
  )
}

export default CheckoutSession