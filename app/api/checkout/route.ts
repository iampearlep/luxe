import { NextResponse } from "next/server";
import Stripe from "stripe"
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!)

export async function POST(request: Request){
 
    const cartDetails = await request.json()
    console.log(cartDetails)
    const lineItems = cartDetails
    const origin = request.headers.get('origin')
    const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ['card', 'us_bank_account'],
        line_items: lineItems,
        billing_address_collection: "auto",
        success_url: `${origin}/success`,
        cancel_url: `${origin}/error`,
    })
   return NextResponse.json(session)
}