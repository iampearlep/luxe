interface InventoryProduct {
    id: string
    name: string
    description: string
    price: number
    currency: string
    image: string
    price_id: string
    quantity: number
    formattedPrice: string
}
export const inventory: InventoryProduct[] = [
     {
      name: 'Bold Denim Corset & Wide Leg Leather Cargo Pants',
      description: 'Make a statement with a  corset top tucked into flowy leather cargo, adding a touch of femininity to your streetwear game.',
      price: 20000,
      currency: 'USD',
      image: 'https://cdn.sanity.io/images/h4oeo41c/production/d0201df260b8bd45503ee1787653b27be610ee78-474x711.jpg',
      id: 'cf6310b8-a7bf-4892-b6e6-235e2f3992ba',
      price_id: 'price_1OXpwvE0B2WVxiTcxtnBB8OX',
      quantity: 1,
      formattedPrice: '$200.00'
    },
     {
      name: 'Summer Breeze Crop Top & Straight Leg Jeans',
      description: 'Make a statement with a crop top and flowy straight-leg jeans, adding a touch of femininity to your streetwear game.',
      price: 15000,
      currency: 'USD',
      image: 'https://cdn.sanity.io/images/h4oeo41c/production/d35870038b85646d947c87d61ec9bd6de7817ad2-474x705.jpg',
      id: 'def5f568-177c-4058-90ef-4d4d89faa568',
      price_id: 'price_1OXpn5E0B2WVxiTcaumzlO3n',
      quantity: 1,
      formattedPrice: '$150.00'
    },
     {
      name: 'Cozy Comfort Knit Sweater & Straight Leg Blue Pants',
      description: 'Embrace warm autumn vibes with a chunky knit sweater layered over a straight leg jeans and sneakers.',
      price: 20000,
      currency: 'USD',
      image: 'https://cdn.sanity.io/images/h4oeo41c/production/565133a13f4747de84cc328e5d83d62db13d41b2-474x735.jpg',
      id: '543f168f-e5c5-4476-b682-ff5fcc41ea28',
      price_id: 'price_1OXqBPE0B2WVxiTc0EBJQwpc',
      quantity: 1,
      formattedPrice: '$200.00'
    },
    {
        name: 'Crop Top & Acid Wash Baggy Cargo Jeans',
        description: 'Make a statement with a crop top tucked into flowy cargo pants, adding a touch of femininity to your streetwear game.',
        price: 15000,
        currency: 'USD',
        image: 'https://cdn.sanity.io/images/h4oeo41c/production/7eced67fd318b7255e8d6baf4b31aba9172479a1-474x592.jpg',
        id: 'b41d2aa6-684f-4fef-8ef3-032c1d2c2f94',
        price_id: 'price_1OXpy6E0B2WVxiTcIYgqMW1A',
        quantity: 1,
        formattedPrice: '$150.00'
      }
  ]