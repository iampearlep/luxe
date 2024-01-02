import Image from "next/image"
import Img19 from "@/public/images/19.jpg"
import Img2 from "@/public/images/2.jpg"

const Categories = () => {
  return (
    <div className="py-4">
        <h2 className=" py-8 text-3xl font-semibold w-11/12 mx-auto">Categories.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
            <Image src={Img2} height={632} width={474} alt="" className="w-full " />
            </div>
            <div>
            <Image src={Img19} height={830} width={474} alt="" className="w-full" />
            </div>
        </div>
    </div>
  )
}

export default Categories