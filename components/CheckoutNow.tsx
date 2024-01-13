"use client"
import React from 'react'
import { urlFor } from '@/app/lib/sanity';
import { useShoppingCart } from 'use-shopping-cart'

export interface Product {
    name: string;
    description: string;
    price: number;
    currency: string;
    image: any;
    id: string;
    price_id: string;
}

const CheckoutNow = ({name, description, price, currency, image, id, price_id}: Product) => {
    const {checkoutSingleItem} = useShoppingCart()

    function buyNow(priceId: string){
        checkoutSingleItem(priceId);
    }
    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        id: id,
        price_id: price_id,
    }

  return (
    <button onClick={() => {
       buyNow(product.price_id)
    }} className='bg-white text-black rounded-sm py-1 px-3 border border-gray-300'>Checkout Now</button>
  )
}

export default CheckoutNow