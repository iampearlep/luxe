import Image from "next/image"
import Img19 from "@/public/images/71.jpg"
import Img2 from "@/public/images/70.jpg"

const Categories = () => {
  return (
    <div className="py-4">
        <h2 className=" py-8 text-3xl font-semibold w-11/12 mx-auto">Categories.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 h-[800px] overflow-y-hidden">
           <div className="">
           <div className="relative">
            <Image src={Img2} height={678} width={564} alt="" className="w-full " />
            <div className="absolute top-0 left-0 w-full h-full opacity-100 flex items-center justify-center">
              <button className=" bg-white text-black py-2 px-6  flex items-center justify-center">Shop Men</button>
            </div>
            </div>
           </div>
           <div className="">
           <div className="relative">
            <Image src={Img19} height={713} width={474} alt="" className="w-full" />
            <div className="absolute top-0 left-0 w-full h-full opacity-100 flex items-center justify-center">
              <button className=" bg-white text-black py-2 px-6  flex items-center justify-center">Shop Women</button>
            </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Categories