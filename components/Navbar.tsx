"use client";
import React from "react";
import { useState } from "react";
import { IoMenuOutline, IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { IoMdHeartEmpty, IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div className="">
      <div className="mx-auto flex justify-between px-4 py-8">
        <div className="flex flex-row mx-auto items-center justify-between w-11/12">
          <div className="hidden md:flex flex-row gap-x-8">
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
          <div className="hidden md:flex flex-row gap-x-8">
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
        <div className="md:hidden flex flex-row">
          <div className="flex flex-row gap-x-4">
          <div className="flex flex-row gap-x-2">
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
                <Link href="/"  onClick={handleToggle} className="cursor-pointer">
            Home
            </Link>
            <Link href="/shop"  onClick={handleToggle} className="cursor-pointer">
             Shop
            </Link>
            <Link href="/"  onClick={handleToggle} className="cursor-pointer">
              Portfolio
            </Link>
            <Link href="/"  onClick={handleToggle} className="cursor-pointer">
             Blog
            </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div> 
    </div>
  );
};

export default Navbar;
