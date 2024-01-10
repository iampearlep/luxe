import React from 'react'

const CartSummary = () => {
  return (
    <div className='md:w-4/12'>
        <div className='flex flex-col gap-y-6 shadow-sm rounded-md px-6 py-6'> 
        <h1>Cart Summary</h1>
            <div className='py-3 border-b border-gray-300'>
                <p>Subtotal: $30,000.00</p>
            </div>
            <div className='py-3 border-b border-gray-300'>
                <p>Shipping Estimate: $5000.00</p>
            </div>
            <div className='py-3 border-b border-gray-300'>
                <p>Order Total: $35, 000.00</p>
            </div>
            <div className='w-full text-center bg-black text-white rounded-sm py-1'>
                <button className=''>Checkout</button>
            </div>
        </div>
    </div>
  )
}

export default CartSummary