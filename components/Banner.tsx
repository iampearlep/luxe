import Image from "next/image"
import Img54 from "@/public/images/54.jpeg"
import Img55 from "@/public/images/55.jpeg"

const Banner = () => {
  return (
    <div>
       <div className="w-full h-[470px] md:h-[550px] overflow-y-hidden">
            <Image src={Img54} height={850} width={1640} alt="" className="w-full h-full hidden md:flex bg-cover object-cover bg-center" />
            <Image src={Img55} height={488} width={720} alt="" className="w-full h-full flex md:hidden bg-cover object-cover bg-center" />
       </div>
       <div className="z-10 absolute top-[35%] lg:top-[20%] xl:top-[35%] xxl:top-[18%] w-full lg:w-8/12 xl:w-6/12  px-5 md:px-20 flex flex-col gap-y-2 text-white">
        <h1 className="text-2xl md:text-4xl font-semibold capitalize">Unleash your inner fashion <br /> rebel</h1>
        <p className="text-base w-10/12 md:text-lg md:w-8/12">Are you ready to join the inner fashion revolution?</p>
        <button className="w-2/6 lg:w-3/12   bg-white text-black rounded-sm">Shop Now</button>
       </div>
    </div>
  )
}

export default Banner