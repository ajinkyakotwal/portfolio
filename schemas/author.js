export default {
    name: 'author',
    type: 'document',
      title: 'Author',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'about',
        title: 'about',
        type: 'string',
      },
      
      {
        name: 'image',
        title: 'image',
        type: 'image',
      }
    ]
}