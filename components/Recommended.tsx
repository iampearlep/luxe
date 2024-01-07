import Image from "next/image";
import Img1 from "@/public/images/1.jpg";
import Img5 from "@/public/images/5.jpg";
import Img49 from "@/public/images/49.jpg";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import RecommendedCard from "./RecommendedCard";

 interface ForYou {
  image: string;
  id: number;
  name: string;
  price: string;
  height: number;
};

const data: ForYou[] = [
  {
      id: 0,
      name: "Sweater jacket",
      image: "/public/images/1.jpg",
      price: "10,000",
      height: 632,
  },
  {
      id: 1,
      name: "Wide Leg Pants",
      image: "/public/images/5.jpg",
      price: "10,000",
      height: 711,
  },
  {
      id: 2,
      name: "Straight Blue Jeans",
      image: "/public/images/49.jpg",
      price: "10,000",
      height: 735,
  },
]



const Recommended = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <h2 className=" py-8 text-3xl font-semibold">Recommended For You.</h2>

       {/* {data.map((item) => {
        return (
          <RecommendedCard key={item.id} item={data} />
        )
       })} */}

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 justify-center items-center gap-x-6 w-full">
          <div className="">
            <div className="relative h-[500px] lg:h-[450px] xl:h-[500px] xxl:h-[600px] overflow-y-hidden">
              <Image
                src={Img1}
                height={632}
                width={474}
                alt=""
                className="w-full h-full"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/30 opacity-0 hover:opacity-100 flex items-center justify-center">
              <button className=" bg-white text-black py-2 px-6  flex items-center justify-center">Shop Now</button>
            </div>
            </div>
            <div className="pt-3 flex flex-row justify-between items-center ">
             <div>
             <h3 className="text-lg font-semibold">Sweater jacket</h3>
              <p>N10, 000</p>
             </div>
             <div className="">
              <button className="flex items-center justify-center border border-black px-2 py-2 rounded-full"><HiOutlineShoppingBag /></button>
             </div>
            </div>
          </div>
          <div>
            <div className="relative h-[500px] lg:h-[450px] xl:h-[500px] xxl:h-[600px]  overflow-y-hidden">
              <Image
                src={Img5}
                height={711}
                width={474}
                alt=""
                className="w-full h-full"
              />
               <div className="absolute top-0 left-0 w-full h-full bg-black/30 opacity-0 hover:opacity-100 flex items-center justify-center">
              <button className=" bg-white text-black py-2 px-6  flex items-center justify-center">Shop Now</button>
            </div>
            </div>
            <div className="pt-3 flex flex-row justify-between items-center ">
             <div>
             <h3 className="text-lg font-semibold">Wide Leg Pants</h3>
              <p>N10, 000</p>
             </div>
             <div className="">
              <button className="flex items-center justify-center border border-black px-2 py-2 rounded-full"><HiOutlineShoppingBag /></button>
             </div>
            </div>
          </div>
          <div>
            <div className="relative h-[500px] lg:h-[450px] xl:h-[500px] xxl:h-[600px] overflow-y-hidden">
              <Image
                src={Img49}
                height={735}
                width={474}
                alt=""
                className="w-full h-full "
              />
               <div className="absolute top-0 left-0 w-full h-full bg-black/30 opacity-0 hover:opacity-100 flex items-center justify-center">
              <button className=" bg-white text-black py-2 px-6  flex items-center justify-center">Shop Now</button>
            </div>
            </div>
            <div className="pt-3 flex flex-row justify-between items-center ">
             <div>
             <h3 className="text-lg font-semibold">Straight Blue Jeans</h3>
              <p>N10, 000</p>
             </div>
             <div className="">
              <button className="flex items-center justify-center border border-black px-2 py-2 rounded-full"><HiOutlineShoppingBag /></button>
             </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Recommended;
