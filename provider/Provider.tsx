'use client'
import React from 'react'
import { CartProvider } from 'use-shopping-cart'

interface Props {
    children: React.ReactNode
}

const Provider = ({children}: Props) => {
  return (
    <div>
        <CartProvider
        mode="payment"
        cartMode="client-only"
        stripe={'test'}
        currency="USD"
        shouldPersist={true}
        billingAddressCollection={true}
        successUrl='http://localhost:3000/success'
        cancelUrl='http://localhost:3000/error'
        language='en-US'
        >
            {children}
        </CartProvider>
    </div>
  )
}

export default Provider