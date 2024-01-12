"use client"
import { urlFor } from '@/app/lib/sanity';
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

export interface Product {
    name: string;
    description: string;
    price: number;
    currency: string;
    image: any;
    id: string;
}

const AddToCart = ({name, description, price, currency, image, id}: Product) => {
    const {addItem} = useShoppingCart()

    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        id: id,
    }
  return (
    <button onClick={() => {
        addItem(product)
    }}>Add To Cart</button>
  )
}

export default AddToCart