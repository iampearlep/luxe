import Image from "next/image";
import Link from "next/link";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="w-11/12 px-4 mx-auto flex flex-row items-start justify-between">
       <div className="w-7/12 flex flex-row items-start justify-between">
       <div className="text-2xl font-extrabold">
            LUXE.
          </div>
          <div>
          <Link href="/" className="cursor-pointer">
            Home
          </Link>
          </div>
        <div className="flex flex-col text-sm gap-y-3 md:gap-y-5">
          <Link href="/" className="cursor-pointer">
           Shop
          </Link>
          <Link href="/" className="cursor-pointer">
            Men
          </Link>
          <Link href="/" className="cursor-pointer">
            Women
          </Link>
          <Link href="/" className="cursor-pointer">
           Accessories
          </Link>
          <Link href="/" className="cursor-pointer">
           Outfits
          </Link>
        </div>
        <div className="flex flex-col text-sm gap-y-3 md:gap-y-5">
          <Link href="/" className="cursor-pointer">
            Blog
          </Link>
          <Link href="/" className="cursor-pointer">
            Articles
          </Link>
          <Link href="/" className="cursor-pointer">
            Newsletters
          </Link>
          <Link href="/" className="cursor-pointer">
           Look Books
          </Link>
          <Link href="/" className="cursor-pointer">
            Magazine
          </Link>
        </div>
        <div className="flex flex-col text-sm gap-y-3 md:gap-y-5">
          <Link href="/" className="cursor-pointer">
            Portfolio
          </Link>
          <Link href="/" className="cursor-pointer">
            Works
          </Link>
          <Link href="/" className="cursor-pointer">
           Reviews
          </Link>
          <Link href="/" className="cursor-pointer">
            Partners
          </Link>
          <Link href="/" className="cursor-pointer">
            Sponsors
          </Link>
        </div>
       </div>
        <div className="flex flex-col text-sm text-left md:text-right gap-y-3 md:gap-y-5">
          <p>luxefashion@gmail.com</p>
          <p>(+234) 815 639 6434</p>
          <p>
            24, Braylon Street, Ikoyi, Lagos, <br />
            Nigeria
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;