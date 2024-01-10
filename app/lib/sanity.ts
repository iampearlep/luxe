import { createClient } from "next-sanity";
import  imageUrlBuilder  from "@sanity/image-url";

export const client = createClient({
    projectId: "h4oeo41c",
    dataset: "production",
    apiVersion: "2021-03-25",
    useCdn: true,
});

const builder = imageUrlBuilder(client)
export function urlFor(source: any) {
    return builder.image(source);
}