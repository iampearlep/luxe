import { StaticImageData } from "next/image";
export interface ForYouData {
    image: StaticImageData;
    id: number;
    name: string;
    price: string;
    height: number;
    width: number;
  };
export interface Products {
    image: StaticImageData;
    id: number;
    name: string;
    price: string;
    category: string;
    height: number;
    width: number;
}
export interface SanityProducts {
    _id: string;
    name: string;
    price: number;
    imageUrl: any;
    categoryName: string;
    slug: string;
}