import React from 'react'
import Image from "next/image"
import Img10 from '@/public/images/10.jpg'
import Img7 from '@/public/images/7.jpg'
import Img3 from '@/public/images/3.jpg'
const CartItems = () => {
  return (
    <div className='w-8/12'>
       <div className=' flex flex-col gap-y-4  rounded-xl px-6 py-6 shadow-sm'>
      
        <div className=' flex flex-row justify-between items-center border-b border-gray-300 py-3'>
               <div className='w-2/12 h-[120px] overflow-y-hidden'>
               <Image src={Img10} height={60} width={120} alt="" className="w-full " />
               </div>
                <div className='w-4/12'>
                <p>Summer Breeze Crop Top & Straight Leg Jeans</p>
                </div>
            <div className='w-2/12 text-center'>
            <p>1</p>
            </div>
            <div className='w-2/12 text-center'>
            <p>$10,000</p>
            </div>
                <div className='2/12 text-center'>
                <button>X</button>
                </div>
        </div>
        <div className=' flex flex-row justify-between items-center border-b border-gray-300 py-3' >
               <div className='w-2/12 h-[120px] overflow-y-hidden'>
               <Image src={Img7} height={60} width={120} alt="" className="w-full " />
               </div>
                <div className='w-4/12'>
                <p>Bold Denim Corset & Wide Leg Leather Cargo Pants</p>
                </div>
            <div className='w-2/12 text-center'>
            <p>1</p>
            </div>
            <div className='w-2/12 text-center'>
            <p>$10,000</p>
            </div>
                <div className='2/12 text-center'>
                <button>X</button>
                </div>
        </div>
        <div className=' flex flex-row justify-between items-center border-b border-gray-300 py-3'>
               <div className='w-2/12 h-[120px] overflow-y-hidden'>
               <Image src={Img3} height={60} width={120} alt="" className="w-full " />
               </div>
                <div className='w-4/12'>
                <p>Cozy Comfort Knit Sweater & Straight Leg Blue Pants</p>
                </div>
            <div className='w-2/12 text-center'>
            <p>1</p>
            </div>
            <div className='w-2/12 text-center'>
            <p>$10,000</p>
            </div>
                <div className='2/12 text-center'>
                <button>X</button>
                </div>
        </div>
       </div>

    </div>
  )
}

export default CartItems