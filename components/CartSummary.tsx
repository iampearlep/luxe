'use client'
import React from 'react'
import Link from 'next/link'
import { useShoppingCart } from 'use-shopping-cart'

const CartSummary = () => {
    const {cartCount, totalPrice, redirectToCheckout, cartDetails} = useShoppingCart();

   
    async function handleCheckout(){
      const res =  await fetch('http://localhost:3000/api/checkout', {
            method: 'POST',
            body: JSON.stringify(cartDetails)
        })
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
      const data = await res.json()
      console.log(data)
      const result = await redirectToCheckout(data.id)
      if(result?.error){
        console.error(result)
      }

    }
  
  return (
    <div className='w-full md:w-4/12'>
        {cartCount === 0? (
            <></>
        ) : (
            
            <div className='flex flex-col gap-y-6 shadow-sm rounded-md px-6 py-6'> 
            <h1>Cart Summary</h1>
                <div className='py-3 border-b border-gray-300'>
                    <p>Subtotal: ${totalPrice}</p>
                </div>
                <div className='py-3 border-b border-gray-300'>
                    <p>Shipping Estimate: $5000</p>
                </div>
                <div className='py-3 border-b border-gray-300'>
                    <p>Order Total: ${totalPrice! + 5000}</p>
                </div>
                <div className='w-full text-center bg-black text-white rounded-sm py-1'>
                    <button onClick={handleCheckout} className=''>Checkout</button> 
                </div>
                <div className='w-full mt-3 text-center bg-white text-black rounded-sm py-1 border border-gray-300'>
                    <Link href='/shop'>
                    <button>Continue Shopping</button>
                    </Link>
                </div>
            </div>
        )} 
       
    </div>
  )
}

export default CartSummary