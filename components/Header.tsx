import React from "react";
import Navbar from "./Navbar";
//  import AuthButton from "./AuthButton";
// import { Button } from "./ui/button";
// import Link from "next/link";
const Header = () => {
  return (
    <div className="flex flex-row w-full mx-auto items-center">
      <div className="w-10/12 md:w-10/12 lg:w-10/12 xl:w-11/12 xxl:w-11/12">
        {" "}
        <Navbar />
      </div>
      <div className="w-3/12 md:w-1/12">
        {/* {" "}
        
        <Button className="text-[9px] md:text-xs font-extrabold" >
        <Link href="/login">
               Login
               </Link>
        </Button> */}
        
       {/* <AuthButton /> */}
      </div>
    </div>
  );
};

export default Header;
