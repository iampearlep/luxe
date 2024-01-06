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
        type: "string",
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
    ]
  }