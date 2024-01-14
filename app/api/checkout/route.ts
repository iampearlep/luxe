import { NextResponse } from 'next/server'
import Stripe from "stripe"
import { validateCartItems } from 'use-shopping-cart/utilities'
import { inventory } from '@/config/inventory'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2023-10-16'
})

export async function POST(req: Request) {
    const cartDetails = await req.json()
    const line_items = validateCartItems(inventory, cartDetails)
    const origin = req.headers.get('origin')
    const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        submit_type: 'pay',
        line_items,
        success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/cart`
      })
 return NextResponse.json({id: session.id})
}