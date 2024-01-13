'use client'
import React from 'react'
import { CartProvider } from 'use-shopping-cart'
import { Toaster } from 'react-hot-toast';

interface Props {
    children: React.ReactNode
}

const Provider = ({children}: Props) => {
  return (
    <div>
        <CartProvider
        mode="payment"
        cartMode="client-only"
        stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string}
        currency="USD"
        shouldPersist={true}
        billingAddressCollection={true}
        successUrl='https://luxe-opal.vercel.app/success'
        cancelUrl='https://luxe-opal.vercel.app/error'
        language='en-US'
        >
            {children}
        </CartProvider>
        <Toaster />
    </div>
  )
}

export default Provider