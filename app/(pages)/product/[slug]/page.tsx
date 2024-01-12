import { client, urlFor } from "@/app/lib/sanity";
import AddToCart from "@/components/AddToCart";
import { SanityProductDetail, SanityProducts } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

async function getData (slug: string) {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0]{
    _id,
      price,
      name,
      images,
      description,
      "categoryName": category -> name,
      "slug": slug.current,
  }`

  const data = await client.fetch(query)

  return data

}



export default async function Page({ params }: { params: { slug: string } }) {
  const data: SanityProductDetail = await getData(params.slug);
    return (
      <div className="md:w-10/12 mt-24 grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-8 mx-auto items-center">
        <div className="md:w-7/12 h-[400px] mx-auto flex items-center justify-center">
        <Image
        src={urlFor(data.images[0]).url()}
        height={400}
        width={474}
        alt=""
        priority={true}
        className="w-full h-full object-center bg-center"
      />
        </div>
        <div className="w-10/12 mx-auto md:w-full flex flex-col px-6 gap-y-3 ">
        <h1 className="text-3xl font-semibold">{data.name}</h1>
        <p className="text-base">{data.description}</p>
        <p className="text-sm font-semibold">${data.price}</p>
       <div className='w-full md:w-1/2 mt-3 text-center bg-black text-white rounded-sm py-1'>
       <AddToCart key={data._id} currency="USD" description={data.description} name={data.name} price={data.price} image={data.images[0]} id={data._id} />
       </div>
        </div>
      </div>
    )
  }