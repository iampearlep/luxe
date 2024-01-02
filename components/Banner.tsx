import Image from "next/image"
import Img55 from "@/public/images/54.jpeg"

const Banner = () => {
  return (
    <div>
       <div className="w-full h-[550px] overflow-y-hidden">
            <Image src={Img55} height={850} width={1640} alt="" className="w-full bg-cover object-cover bg-center" />
       </div>
       <div className="z-10 absolute -mt-[430px] w-6/12 px-20 space-y-2 ">
        <h1 className="text-4xl font-semibold">Unleash your inner fashion rebel</h1>
        <p className="w-8/12">Are you ready to join the inner fashion revolution?</p>
        <button>Shop Now</button>
       </div>
    </div>
  )
}

export default Banner