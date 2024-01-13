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
        successUrl='http://localhost:3000/success'
        cancelUrl='http://localhost:3000/error'
        language='en-US'
        >
            {children}
        </CartProvider>
        <Toaster />
    </div>
  )
}

export default Provider