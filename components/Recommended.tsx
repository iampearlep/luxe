import Image from "next/image";
import { ForYouData } from "@/interfaces";
import Img1 from "@/public/images/1.jpg";
import Img5 from "@/public/images/5.jpg";
import Img49 from "@/public/images/49.jpg";
import { HiOutlineShoppingBag } from "react-icons/hi2";


const products : ForYouData[] = [
  {
      id: 0,
      name: "Cozy Knit Sweater & Straight Leg Deep Blue Pants",
      image: Img1,
      price: "10,000",
      height: 632,
      width: 474,
  },
  {
      id: 1,
      name: "Cute Crop Mesh Top & Parachute Cargo Pants",
      image: Img5,
      price: "10,000",
      height: 711,
      width: 474,
  },
  {
      id: 2,
      name: "Cozy Comfort Knit Sweater & Straight Leg Blue Pants",
      image: Img49,
      price: "10,000",
      height: 735,
      width: 474,
  },
]




const Recommended = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <h2 className=" py-8 text-3xl font-semibold">Recommended For You.</h2>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 justify-center items-center gap-x-6 w-full">
     {products.map((product) => {
        return (
          <div key={product.id}>
             <div className="" >
            <div className="relative h-[500px] lg:h-[450px] xl:h-[500px] xxl:h-[500px] overflow-y-hidden cursor-pointer">
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
      })}
     </div>
      </div>
    </div>
  );
};

export default Recommended;
