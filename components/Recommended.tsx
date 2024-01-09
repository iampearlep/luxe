import Image from "next/image";
import { ForYouData } from "@/interfaces";
import Img1 from "@/public/images/1.jpg";
import Img5 from "@/public/images/5.jpg";
import Img49 from "@/public/images/49.jpg";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { SanityProducts } from "@/interfaces";
import Card from "./Card";
import { client } from "@/app/lib/sanity";

// const products : ForYouData[] = [
//   {
//       id: 0,
//       name: "Cozy Knit Sweater & Straight Leg Deep Blue Pants",
//       image: Img1,
//       price: "10,000",
//       height: 632,
//       width: 474,
//   },
//   {
//       id: 1,
//       name: "Cute Crop Mesh Top & Parachute Cargo Pants",
//       image: Img5,
//       price: "10,000",
//       height: 711,
//       width: 474,
//   },
//   {
//       id: 2,
//       name: "Cozy Comfort Knit Sweater & Straight Leg Blue Pants",
//       image: Img49,
//       price: "10,000",
//       height: 735,
//       width: 474,
//   },
// ]
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
