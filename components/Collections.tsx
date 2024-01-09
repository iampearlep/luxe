import Image from "next/image"
import Img66 from "@/public/images/66.jpg"
import Img67 from "@/public/images/67.jpg"
import Img68 from "@/public/images/68.jpg"

const Collections = () => {
  return (
    <div className="pt-20">
        <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div>
                <Image src={Img66} height={711} width={474} alt="" className="w-full " />
                </div>
                <div>
                <Image src={Img67} height={711} width={474} alt="" className="w-full " />
                </div>
                <div>
                <Image src={Img68} height={711} width={474} alt="" className="w-full " />
                </div>
            </div>
            <div className="absolute top-[45%] left-[12%] lg:top-[35%] lg:left-[30%] xl:top-[40%] xl:left-[34%] xxl:top-[38%] xxl:left-[36%] flex flex-col items-center bg-white rounded-md px-11 py-5">
                <h3 className="text-xl md:text-3xl font-semibold py-3">Summer 2023 Collections</h3>
                <button className="bg-black text-white px-6 py-2 mb-2">Shop Now</button>
            </div>
        </div>
    </div>
  )
}

export default Collections