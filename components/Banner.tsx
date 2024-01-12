import Image from "next/image"
import { client, urlFor } from  "@/app/lib/sanity"
import Link from 'next/link'

async function getImageData() {
   const query = "*[_type == 'heroImages'][0]"
   const data = await client.fetch(query)
   return data;
}


async function Banner () {
  const data = await getImageData()
  return (
    <div className="relative">
       <div className="w-full h-[450px] md:h-[550px] overflow-y-hidden">
            <Image src={urlFor(data.image1).url()} width={1640} height={850} priority={true} alt="" className="w-full h-full hidden md:flex bg-cover object-cover bg-center object-center brightness-75" />
            <Image src={urlFor(data.image2).url()} height={488} width={720} priority={true} alt="" className="w-full h-full flex md:hidden bg-cover object-cover bg-center object-center brightness-75" />
       </div>
       <div className="z-10 absolute top-[30%] lg:top-[30%] xl:top-[35%] xxl:top-[30%] w-full lg:w-8/12 xl:w-6/12  px-5 md:px-20 flex flex-col gap-y-2 text-white">
        <h1 className="text-2xl md:text-4xl font-semibold capitalize">Unleash your inner fashion <br /> rebel</h1>
        <p className="text-base w-10/12 md:text-lg md:w-8/12">Are you ready to join the inner fashion revolution?</p>
        <Link href='/shop'> <button className="w-2/6 lg:w-3/12 py-2  bg-white text-black">Shop Now</button> </Link>
       </div>
    </div>
  )
}

export default Banner