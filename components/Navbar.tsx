"use client";
import React from "react";
import { useState } from "react";
import { IoMenuOutline, IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { IoMdHeartEmpty, IoIosSearch } from "react-icons/io";
import { HiOutlineSearch } from "react-icons/hi";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div className="">
      <div className="w-11/12 mx-auto px-2 py-6">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-x-8">
            <Link href="/" className="cursor-pointer">
            Home
            </Link>
            <Link href="/shop" className="cursor-pointer">
             Shop
            </Link>
            <Link href="/" className="cursor-pointer">
              Portfolio
            </Link>
            <Link href="/" className="cursor-pointer">
             Blog
            </Link>
          </div>
          <div className="text-2xl font-extrabold">
          LUXE.
          </div>
          <div className="flex flex-row gap-x-8">
          <button className="">
            <Link href="">
                <AiOutlineUser />
            </Link>
          </button>
          <button className="">
            <Link href="">
              <LiaShoppingCartSolid />
            </Link>
          </button>
          <button className="">
            <Link href="">
              <IoMdHeartEmpty />
            </Link>
          </button>
          <button className="">
            <Link href="">
              <IoIosSearch />
            </Link>
          </button>
        </div>
        </div>
       
        {/* Mobile Screens */}
        {/* <div className="lg:hidden block">
          <div className="flex flex-row gap-x-6">
            <button className="flex items-center bg-[#D1563B] text-sm px-5 py-2 text-white rounded-md cursor-pointer">
              <Link href="https://app.utopiepay.com/account/create/select-country">
                Get Started
              </Link>
            </button>
            <button onClick={handleToggle}>
              {isToggle ? (
                <IoCloseSharp className="text-3xl" />
              ) : (
                <IoMenuOutline className="text-3xl" />
              )}
            </button>
          </div>
          {isToggle && (
            <div
              className="fixed top-0 right-0 h-full  w-full bg-white z-10 flex flex-col justify-start items-start "
            >
              <button onClick={handleToggle} className="absolute top-5 right-5">
                <IoCloseSharp className="text-3xl" />
              </button>
              <div className="mt-20 max-h-screen overflow-y-auto w-full">
                <div className="flex flex-col gap-10 items-start justify-start font-semibold text-xl px-5">
                  <Link
                    href="/faq"
                    onClick={handleToggle}
                    className="cursor-pointer"
                  >
                    FAQs
                  </Link>
                  <Link
                    href="/privacy"
                    onClick={handleToggle}
                    className="cursor-pointer"
                  >
                    Privacy policy
                  </Link>
                  <Link
                    href="/terms"
                    onClick={handleToggle}
                    className="cursor-pointer"
                  >
                    Terms & Conditions
                  </Link>
                </div>
                <div className="mx-auto flex flex-row justify-center items-center mt-40 gap-x-4">
                  <button className="flex items-center cursor-pointer bg-[#2A2A80] text-base px-5 py-3 text-white rounded-md">
                    <Link
                      href="https://app.utopiepay.com/"
                      onClick={handleToggle}
                    >
                      Register
                    </Link>
                  </button>
                  <button className="flex items-center bg-[#D1563B] text-base px-5 py-3 text-white rounded-md cursor-pointer">
                    <Link
                      href="https://app.utopiepay.com/account/create/select-country"
                      onClick={handleToggle}
                    >
                      Open an Account
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>*/}
      </div> 
    </div>
  );
};

export default Navbar;
