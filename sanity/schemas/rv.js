export default {
    name: 'rv',
    title: 'Rv',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        },
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
     
      },
      {
        name: 'text',
        title: 'Text',
        type: 'string',
      },
    ],
  };