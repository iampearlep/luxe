export default {
    name: 'shop',
    type: 'document',
    title: 'Shop',
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
        name: 'category',
        type: 'reference',
        title: 'Product Category',
        to: [
          {
            type: 'category',
          },
        ]
      },
    ]
  }