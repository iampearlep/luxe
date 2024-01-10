import { SanityProducts } from "@/interfaces";
import Card from "./Card";
import { client } from "@/app/lib/sanity";

async function getProductData() {
  const query = `*[_type == 'product'][0...4] | order(_createdAt desc){
      _id,
        price,
        name,
        description,
        "slug": slug.current,
        "categoryName": category -> name,
        "imageUrl": images[0].asset -> url,
    }`
  const products = await client.fetch(query)
  return products
}


 async function Recommended() {
  const products = await getProductData();
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <h2 className=" py-8 text-3xl font-semibold">Recommended For You.</h2>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 justify-center items-center gap-x-6 w-full">
      {products.slice(0,3).map((product : SanityProducts) => {
        return (
         <Card key={product._id} product={product} />
        )
      })}    
     </div>
      </div>
    </div>
  );
};

export default Recommended;
