import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { SanityProducts } from "@/interfaces";
interface CardProps {
  product: SanityProducts;
}

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="">
        <div className="relative h-[500px] lg:h-[450px] xl:h-[500px] xxl:h-[500px] overflow-y-hidden cursor-pointer">
          <Image
            src={product.imageUrl}
            height={711}
            width={474}
            alt=""
            className="w-full h-full"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/30 opacity-0 hover:opacity-100 flex items-center justify-center transition-all duration-300 ease-linear">
            <button className=" bg-white text-black py-2 px-6  flex items-center justify-center capitalize">
              Shop Now
            </button>
          </div>
        </div>
        <div className="pt-3 flex flex-row justify-between items-center ">
          <div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p>${product.price}</p>
          </div>
          <div className="">
            <button className="flex items-center justify-center border border-black px-2 py-2 rounded-full">
              <HiOutlineShoppingBag />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
