import React from "react";
import Card from "./Card";
import { products } from "@/data/products";

const ProductsList = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <h2 className="py-8 text-3xl text-center font-semibold">Shop Here.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 justify-center items-center gap-x-6 w-full h-full">
          {products.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
