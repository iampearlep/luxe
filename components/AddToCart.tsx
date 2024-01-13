"use client"
import { urlFor } from '@/app/lib/sanity';
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import toast from 'react-hot-toast';

export interface Product {
    name: string;
    description: string;
    price: number;
    currency: string;
    image: any;
    id: string;
    price_id: string;
}

const AddToCart = ({name, description, price, currency, image, id, price_id}: Product) => {
    const {addItem} = useShoppingCart()

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
        addItem(product); 
        toast.success(`Great choice! ${product.name} has been added to your cart.`)
    }} className='bg-black text-white  rounded-sm py-1 px-3'>Add To Cart</button>
  )
}

export default AddToCart