import { client, urlFor } from "@/app/lib/sanity";
import { SanityProductDetail, SanityProducts } from "@/interfaces";
import Image from "next/image";

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
      <div className="w-10/12 mt-24 grid grid-cols-2 gap-x-10 mx-auto items-center">
        <div className="w-7/12 h-[400px] mx-auto flex items-center justify-center">
        <Image
        src={urlFor(data.images[0]).url()}
        height={400}
        width={474}
        alt=""
        className="w-full h-full object-center bg-center"
      />
        </div>
        <div>
        <h1>{data.name}</h1>
        <p>{data.categoryName}</p>
        <p>{data.description}</p>
        <p>{data.price}</p>
        </div>
      </div>
    )
  }