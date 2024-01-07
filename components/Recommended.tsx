import { ForYouData } from "@/interfaces";
import Img1 from "@/public/images/1.jpg";
import Img5 from "@/public/images/5.jpg";
import Img49 from "@/public/images/49.jpg";
import RecommendedCard from "./RecommendedCard";


const products : ForYouData[] = [
  {
      id: 0,
      name: "Sweater jacket",
      image: Img1,
      price: "10,000",
      height: 632,
      width: 474,
  },
  {
      id: 1,
      name: "Wide Leg Pants",
      image: Img5,
      price: "10,000",
      height: 711,
      width: 474,
  },
  {
      id: 2,
      name: "Straight Blue Jeans",
      image: Img49,
      price: "10,000",
      height: 735,
      width: 474,
  },
]



const Recommended = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <h2 className=" py-8 text-3xl font-semibold">Recommended For You.</h2>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 justify-center items-center gap-x-6 w-full">
     {products.map((product) => {
        return <RecommendedCard key={product.id} product={product}  />
      })}
     </div>
      </div>
    </div>
  );
};

export default Recommended;
