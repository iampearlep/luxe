import React from "react";
import Navbar from "./Navbar";
//  import AuthButton from "./AuthButton";
// import { Button } from "./ui/button";
// import Link from "next/link";
const Header = () => {
  return (
    <div className="w-full mx-auto items-center">
        <Navbar />
     
        {/* {" "}
        
        <Button className="text-[9px] md:text-xs font-extrabold" >
        <Link href="/login">
               Login
               </Link>
        </Button> */}
        
       {/* <AuthButton /> */}
    </div>
  );
};

export default Header;
