import React from 'react'
import Image from "next/image";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { ForYouData } from '@/interfaces';
interface RecommendedCardProps {
  product: ForYouData;
}

const RecommendedCard : React.FC<RecommendedCardProps> = ({product}) => {
  return (
    <div>
               <div className="">
            <div className="relative h-[500px] lg:h-[450px] xl:h-[500px] xxl:h-[600px] overflow-y-hidden">
              <Image
                src={product.image}
                height={product.height}
                width={product.width}
                alt=""
                className="w-full h-full"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/30 opacity-0 hover:opacity-100 flex items-center justify-center">
              <button className=" bg-white text-black py-2 px-6  flex items-center justify-center capitalize">Add to cart</button>
            </div>
            </div>
            <div className="pt-3 flex flex-row justify-between items-center ">
             <div>
             <h3 className="text-lg font-semibold">{product.name}</h3>
              <p>{product.price}</p>
             </div>
             <div className="">
              <button className="flex items-center justify-center border border-black px-2 py-2 rounded-full"><HiOutlineShoppingBag /></button>
             </div>
            </div>
          </div>
    </div>
  )
}

export default RecommendedCard