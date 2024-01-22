"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";
import toast from "react-hot-toast";

const CartItems = () => {
  const { cartCount, cartDetails, removeItem, decrementItem, incrementItem } = useShoppingCart();

  return (
    <div className="md:w-9/12">
      {cartCount === 0 ? (
        <div>
          Cart is Empty <span className="font-semibold">BOSS</span>
          <div className="w-full md:w-2/6 mt-4 text-center bg-black text-white rounded-sm py-1 px-3">
            <Link href="/shop">
              <button>Continue Shopping</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col gap-y-4  rounded-xl px-6 py-6 divide-y divide-solid shadow-sm ">
          {Object.values(cartDetails ?? {}).map((entry) => (
            <div
              className=" flex flex-row justify-between items-center  py-4"
              key={entry.id}
            >
              <div className="w-2/12  md:h-[120px] overflow-y-hidden">
                <Image
                  src={entry.image as string}
                  height={60}
                  width={120}
                  alt=""
                  priority={true}
                  className="w-auto h-auto "
                />
              </div>
              <div className="w-4/12">
                <p className="text-sm md:text-base">{entry.name}</p>
              </div>
              <div className="w-3/12 text-center">
               <div className="flex flex-row justify-center items-center gap-x-1 md:gap-x-3">
                <button className="bg-black text-white px-2 md:px-3 py-1 rounded-sm" onClick={() => {decrementItem(entry.id)}}>-</button>
                <p className="text-sm md:text-base">{entry.quantity}</p>
                <button className="bg-black text-white px-2 md:px-3 py-1 rounded-sm" onClick={()=> {incrementItem(entry.id)}}>+</button>
               </div>
              </div>
              <div className="w-2/12 text-center">
                <p className="text-sm md:text-base">${entry.price}</p>
              </div>
              <div className="2/12 text-center">
                <button
                  onClick={() => {
                    removeItem(entry.id);
                    toast.error(
                      `The ${entry.name} has been removed from your cart.`
                    );
                  }}
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartItems;
