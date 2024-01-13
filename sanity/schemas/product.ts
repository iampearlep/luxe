export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: "slug",
        type: "slug",
        title: "Slug",
        options: {
          source: "name",
        },
      },
      {
        name: "images",
        type: "array",
        title: "Images",
        of: [{type: "image"}],
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description'
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price',
      },
      {
        name: 'price_id',
        type: 'string',
        title: 'Stripe Price ID',
      },
      {
        name: 'category',
        type: 'reference',
        title: 'Product Category',
        to: [
          {
            type: 'category',
          },
        ]
      },
      {
        name: "color",
        title: "Color",
        type: "array",
        of: [{ type: "string" }],
      },
      {
        name: "size",
        title: "Size",
        type: "array",
        of: [{ type: "string" }],
      },
    ]
  }